class ProductService {
    constructor(repository) {
        this.repository = repository;
    }

    async createOrUpdate(data) {
        return await this.repository.save(data);
    }
}

module.exports = ProductService;