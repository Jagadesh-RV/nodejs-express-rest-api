

class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async getUserDashboard(userId) {
        const user = await this.userRepository.findById(userId);
        if (!user) throw new Error("User not found");

        // Business logic remains clean and oblivious to database implementation
        return { ...user, lastLogin: new Date() };
    }
}