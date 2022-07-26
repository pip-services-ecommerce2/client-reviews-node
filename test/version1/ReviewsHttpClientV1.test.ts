import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { ReviewsMemoryPersistence, RatingsMemoryPersistence } from 'service-reviews-node';
import { ReviewsController } from 'service-reviews-node';
import { ReviewsHttpServiceV1 } from 'service-reviews-node';
import { IReviewsClientV1 } from '../../src/version1/IReviewsClientV1';
import { ReviewsHttpClientV1 } from '../../src/version1/ReviewsHttpClientV1';
import { ReviewsClientFixtureV1 } from './ReviewsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('ReviewsHttpClientV1', () => {
    let service: ReviewsHttpServiceV1;
    let client: ReviewsHttpClientV1;
    let fixture: ReviewsClientFixtureV1;

    suiteSetup(async () => {

        let logger = new ConsoleLogger();
        let reviewsPersistence = new ReviewsMemoryPersistence();
        let ratingsPersistence = new RatingsMemoryPersistence();
        let controller = new ReviewsController();

        service = new ReviewsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-reviews', 'persistence', 'memory', 'reviews', '1.0'), reviewsPersistence,
            new Descriptor('service-reviews', 'persistence', 'memory', 'ratings', '1.0'), ratingsPersistence,
            new Descriptor('service-reviews', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-reviews', 'service', 'http', 'default', '1.0'), service
        );

        reviewsPersistence.setReferences(references);
        ratingsPersistence.setReferences(references);
        controller.setReferences(references);
        service.setReferences(references);

        client = new ReviewsHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new ReviewsClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });

    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
