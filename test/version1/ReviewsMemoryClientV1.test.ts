import { ReviewsClientFixtureV1 } from './ReviewsClientFixtureV1';
import { ReviewsMemoryClientV1 } from '../../src/version1/ReviewsMemoryClientV1';

suite('ReviewsMemoryClientV1', () => {
    let client: ReviewsMemoryClientV1;
    let fixture: ReviewsClientFixtureV1;

    suiteSetup(async () => {
        client = new ReviewsMemoryClientV1();

        await client.open(null);

        fixture = new ReviewsClientFixtureV1(client);

    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

    suiteTeardown(async () => {
        await client.close(null);
    });

});
