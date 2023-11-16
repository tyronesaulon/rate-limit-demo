import { faker } from '@faker-js/faker';

function getOrderCreatedDtoMock() {
  return {
    id: faker.string.uuid(),
    name: faker.vehicle.vehicle(),
    email: faker.internet.email(),
    description: faker.lorem.paragraph(3),
    price: faker.number.int({ min: 50_000, max: 100_000 }),
    quantity: faker.number.int({ min: 1, max: 10 }),
  };
}

async function blast(n: number) {
  const requests = Array.from({ length: n }).map(async () => {
    const data = getOrderCreatedDtoMock();
    await fetch('http://localhost:3000/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  });

  const results = await Promise.allSettled(requests);
  const errors = results.filter(
    (result) => result.status === 'rejected',
  ) as PromiseRejectedResult[];
  console.log(`success: ${n - errors.length} errors: ${errors.length}`);
}

(async () => {
  console.log('start simulation');
  const duration = 10_000; // 10 seconds
  const messages = 500; // 500 messages per second
  const interval = setInterval(() => blast(messages), 1000);

  setTimeout(() => {
    clearInterval(interval); // cleanup
    console.log('end simulation');
  }, duration);
})();
