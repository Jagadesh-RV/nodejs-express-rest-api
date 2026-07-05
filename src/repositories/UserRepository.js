

class UserRepository {
    constructor(prismaClient) {
        this.db = prismaClient;
    }

    async findById(id) {
        const user = await this.db.user.findUnique({
            where: { id },
            include: { profile: true } // Handles complex relational mapping
        });
        return user ? this.mapToDomain(user) : null;
    }

    // Ensures consistent data shape regardless of internal DB structure
    mapToDomain(user) {
        return {
            id: user.id,
            email: user.email,
            fullName: `${user.firstName} ${user.lastName}`
        };
    }
}