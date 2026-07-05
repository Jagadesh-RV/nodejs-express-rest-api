async save(data) {
    return await this.db.product.upsert({
        where: { id: data.id || '' }, // Prisma upsert requires a unique identifier
        update: { name: data.name, price: data.price },
        create: { name: data.name, price: data.price }
    });
}