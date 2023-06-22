export interface User{}

export interface UpdateUserDto extends Partial<User>{}

export interface CreateUserDto extends Omit<User,'id' | 'created_at' | 'updated_at'>{}