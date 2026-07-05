// Route: Direct DB access
app.get('/users/:id', async (req, res) => {
    const user = await prisma.user.findUnique({ where: { id: req.params.id } });
    res.json(user);
});

class ProductService {
    constructor(productRepo) { this.repo = productRepo; }

    async updatePrice(id, newPrice) {
        const product = await this.repo.findById(id);
        if (!product) throw new Error("Product not found");
        product.price = newPrice;
        return await this.repo.save(product);
    }
}

class ProductRepository {
    constructor(prismaClient) {
        this.db = prismaClient;
    }

    async findById(id) {
        return await this.db.product.findUnique({ where: { id } });
    }

    async save(data) {
        return await this.db.product.upsert({
            where: { id: data.id || '' }, // Prisma upsert requires a unique identifier
            update: { name: data.name, price: data.price },
            create: { name: data.name, price: data.price }
        });
    }
}