export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const USERS_KEY = 'flowpay_users';
const CURRENT_USER_KEY = 'flowpay_current_user';

export const authUtils = {
  // Get all users from localStorage
  getAllUsers: (): User[] => {
    try {
      const users = localStorage.getItem(USERS_KEY);
      return users ? JSON.parse(users) : [];
    } catch (error) {
      console.error('Error getting users from localStorage:', error);
      return [];
    }
  },

  // Save users to localStorage
  saveUsers: (users: User[]): void => {
    try {
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
      console.log('All registered users:', users);
    } catch (error) {
      console.error('Error saving users to localStorage:', error);
    }
  },

  // Register a new user
  register: (userData: RegisterData): { success: boolean; message: string; user?: User } => {
    try {
      const users = authUtils.getAllUsers();
      
      // Check if user already exists
      const existingUser = users.find(user => user.email.toLowerCase() === userData.email.toLowerCase());
      if (existingUser) {
        return { success: false, message: 'User with this email already exists' };
      }

      // Create new user
      const newUser: User = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email.toLowerCase(),
        password: userData.password, // In production, this should be hashed
        createdAt: new Date().toISOString()
      };

      // Add to users array
      users.push(newUser);
      authUtils.saveUsers(users);

      console.log('New user registered:', {
        id: newUser.id,
        name: `${newUser.firstName} ${newUser.lastName}`,
        email: newUser.email,
        createdAt: newUser.createdAt
      });

      return { success: true, message: 'Registration successful!', user: newUser };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, message: 'Registration failed. Please try again.' };
    }
  },

  // Login user
  login: (credentials: LoginCredentials): { success: boolean; message: string; user?: User } => {
    try {
      const users = authUtils.getAllUsers();
      console.log('Login attempt for:', credentials.email);
      console.log('All registered users:', users.map(u => ({ 
        id: u.id, 
        name: `${u.firstName} ${u.lastName}`, 
        email: u.email,
        createdAt: u.createdAt
      })));

      const user = users.find(u => 
        u.email.toLowerCase() === credentials.email.toLowerCase() && 
        u.password === credentials.password
      );

      if (!user) {
        return { success: false, message: 'Invalid email or password' };
      }

      // Set current user
      authUtils.setCurrentUser(user);
      
      console.log('User logged in successfully:', {
        id: user.id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        loginTime: new Date().toISOString()
      });

      return { success: true, message: `Welcome back, ${user.firstName}!`, user };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Login failed. Please try again.' };
    }
  },

  // Set current user
  setCurrentUser: (user: User): void => {
    try {
      const userSession = {
        ...user,
        loginTime: new Date().toISOString()
      };
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userSession));
    } catch (error) {
      console.error('Error setting current user:', error);
    }
  },

  // Get current user
  getCurrentUser: (): User | null => {
    try {
      const currentUser = localStorage.getItem(CURRENT_USER_KEY);
      return currentUser ? JSON.parse(currentUser) : null;
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  },

  // Logout user
  logout: (): void => {
    try {
      const currentUser = authUtils.getCurrentUser();
      if (currentUser) {
        console.log('User logged out:', {
          name: `${currentUser.firstName} ${currentUser.lastName}`,
          email: currentUser.email,
          logoutTime: new Date().toISOString()
        });
      }
      localStorage.removeItem(CURRENT_USER_KEY);
    } catch (error) {
      console.error('Logout error:', error);
    }
  },

  // Check if user is logged in
  isLoggedIn: (): boolean => {
    return authUtils.getCurrentUser() !== null;
  }
};