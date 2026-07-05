
const ProductService = require('../src/services/product.service');

test('should call repository save method', async () => {
    const mockRepo = { save: jest.fn().mockResolvedValue({ id: 1 }) };
    const service = new ProductService(mockRepo);

    const result = await service.createOrUpdate({ name: 'Test' });

    expect(mockRepo.save).toHaveBeenCalledWith({ name: 'Test' });
    expect(result.id).toBe(1);
});