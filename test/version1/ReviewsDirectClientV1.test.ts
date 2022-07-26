import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { RatingsMemoryPersistence } from 'service-reviews-node';
import { ReviewsMemoryPersistence } from 'service-reviews-node';
import { ReviewsController } from 'service-reviews-node';
import { ReviewsDirectClientV1 } from '../../src/version1/ReviewsDirectClientV1';
import { ReviewsClientFixtureV1 } from './ReviewsClientFixtureV1';

suite('ReviewsDirectClientV1', () => {
    let client: ReviewsDirectClientV1;
    let fixture: ReviewsClientFixtureV1;

    suiteSetup(async () => {
        
        let logger = new ConsoleLogger();
        let reviewsPersistence = new ReviewsMemoryPersistence();
        let ratingsPersistence = new RatingsMemoryPersistence();

        let controller = new ReviewsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-reviews', 'persistence', 'memory', 'reviews', '1.0'), reviewsPersistence,
            new Descriptor('service-reviews', 'persistence', 'memory', 'ratings', '1.0'), ratingsPersistence,
            new Descriptor('service-reviews', 'controller', 'default', 'default', '1.0'), controller,
        );

        reviewsPersistence.setReferences(references);
        ratingsPersistence.setReferences(references);
        controller.setReferences(references);

        client = new ReviewsDirectClientV1();
        client.setReferences(references);

        fixture = new ReviewsClientFixtureV1(client);

        await client.open(null);
    });

    suiteTeardown(async () => {
        await client.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
