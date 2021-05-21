"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableUsersApi = exports.ObservableUsageMeteringApi = exports.ObservableTagsApi = exports.ObservableSyntheticsApi = exports.ObservableSnapshotsApi = exports.ObservableSlackIntegrationApi = exports.ObservableServiceLevelObjectivesApi = exports.ObservableServiceLevelObjectiveCorrectionsApi = exports.ObservableServiceChecksApi = exports.ObservablePagerDutyIntegrationApi = exports.ObservableOrganizationsApi = exports.ObservableNotebooksApi = exports.ObservableMonitorsApi = exports.ObservableMetricsApi = exports.ObservableLogsPipelinesApi = exports.ObservableLogsIndexesApi = exports.ObservableLogsApi = exports.ObservableKeyManagementApi = exports.ObservableIPRangesApi = exports.ObservableHostsApi = exports.ObservableGCPIntegrationApi = exports.ObservableEventsApi = exports.ObservableDowntimesApi = exports.ObservableDashboardsApi = exports.ObservableDashboardListsApi = exports.ObservableAzureIntegrationApi = exports.ObservableAuthenticationApi = exports.ObservableAWSLogsIntegrationApi = exports.ObservableAWSIntegrationApi = void 0;
var rxjsStub_1 = require("../rxjsStub");
var rxjsStub_2 = require("../rxjsStub");
var AWSIntegrationApi_1 = require("../apis/AWSIntegrationApi");
var ObservableAWSIntegrationApi = /** @class */ (function () {
    function ObservableAWSIntegrationApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AWSIntegrationApi_1.AWSIntegrationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AWSIntegrationApi_1.AWSIntegrationApiResponseProcessor();
    }
    /**
     * Create a Datadog-Amazon Web Services integration. Using the `POST` method updates your integration configuration by adding your new configuration to the existing one in your Datadog organization. A unique AWS Account ID for role based authentication.
     * Create an AWS integration
     * @param body AWS Request Object
     */
    ObservableAWSIntegrationApi.prototype.createAWSAccount = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createAWSAccount(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_1 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_1(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_2 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_2(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createAWSAccount(rsp); }));
        }));
    };
    /**
     * Set an AWS tag filter.
     * Set an AWS tag filter
     * @param body Set an AWS tag filter using an &#x60;aws_account_identifier&#x60;, &#x60;namespace&#x60;, and filtering string. Namespace options are &#x60;application_elb&#x60;, &#x60;elb&#x60;, &#x60;lambda&#x60;, &#x60;network_elb&#x60;, &#x60;rds&#x60;, &#x60;sqs&#x60;, and &#x60;custom&#x60;.
     */
    ObservableAWSIntegrationApi.prototype.createAWSTagFilter = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createAWSTagFilter(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_3 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_3(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_4 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_4(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createAWSTagFilter(rsp); }));
        }));
    };
    /**
     * Generate a new AWS external ID for a given AWS account ID and role name pair.
     * Generate a new external ID
     * @param body Your Datadog role delegation name. For more information about your AWS account Role name, see the [Datadog AWS integration configuration info](https://github.com/DataDog/documentation/blob/master/integrations/amazon_web_services/#installation).
     */
    ObservableAWSIntegrationApi.prototype.createNewAWSExternalID = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createNewAWSExternalID(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_5 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_5(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_6 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_6(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createNewAWSExternalID(rsp); }));
        }));
    };
    /**
     * Delete a Datadog-AWS integration matching the specified `account_id` and `role_name parameters`.
     * Delete an AWS integration
     * @param body AWS request object
     */
    ObservableAWSIntegrationApi.prototype.deleteAWSAccount = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteAWSAccount(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_7 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_7(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_8 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_8(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.deleteAWSAccount(rsp); }));
        }));
    };
    /**
     * Delete a tag filtering entry.
     * Delete a tag filtering entry
     * @param body Delete a tag filtering entry for a given AWS account and &#x60;dd-aws&#x60; namespace.
     */
    ObservableAWSIntegrationApi.prototype.deleteAWSTagFilter = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteAWSTagFilter(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_9 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_9(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_10 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_10(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.deleteAWSTagFilter(rsp); }));
        }));
    };
    /**
     * List all Datadog-AWS integrations available in your Datadog organization.
     * List all AWS integrations
     * @param accountId Only return AWS accounts that matches this &#x60;account_id&#x60;.
     * @param roleName Only return AWS accounts that matches this role_name.
     * @param accessKeyId Only return AWS accounts that matches this &#x60;access_key_id&#x60;.
     */
    ObservableAWSIntegrationApi.prototype.listAWSAccounts = function (accountId, roleName, accessKeyId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listAWSAccounts(accountId, roleName, accessKeyId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_11 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_11(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_12 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_12(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.listAWSAccounts(rsp); }));
        }));
    };
    /**
     * Get all AWS tag filters.
     * Get all AWS tag filters
     * @param accountId Only return AWS filters that matches this &#x60;account_id&#x60;.
     */
    ObservableAWSIntegrationApi.prototype.listAWSTagFilters = function (accountId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listAWSTagFilters(accountId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_13 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_13(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_14 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_14(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.listAWSTagFilters(rsp); }));
        }));
    };
    /**
     * List all namespace rules for a given Datadog-AWS integration. This endpoint takes no arguments.
     * List namespace rules
     */
    ObservableAWSIntegrationApi.prototype.listAvailableAWSNamespaces = function (options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listAvailableAWSNamespaces(options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_15 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_15(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_16 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_16(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.listAvailableAWSNamespaces(rsp); }));
        }));
    };
    /**
     * Update a Datadog-Amazon Web Services integration.
     * Update an AWS integration
     * @param body AWS request object
     * @param accountId Only return AWS accounts that matches this &#x60;account_id&#x60;.
     * @param roleName Only return AWS accounts that match this &#x60;role_name&#x60;. Required if &#x60;account_id&#x60; is specified.
     * @param accessKeyId Only return AWS accounts that matches this &#x60;access_key_id&#x60;. Required if none of the other two options are specified.
     */
    ObservableAWSIntegrationApi.prototype.updateAWSAccount = function (body, accountId, roleName, accessKeyId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateAWSAccount(body, accountId, roleName, accessKeyId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_17 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_17(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_18 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_18(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updateAWSAccount(rsp); }));
        }));
    };
    return ObservableAWSIntegrationApi;
}());
exports.ObservableAWSIntegrationApi = ObservableAWSIntegrationApi;
var AWSLogsIntegrationApi_1 = require("../apis/AWSLogsIntegrationApi");
var ObservableAWSLogsIntegrationApi = /** @class */ (function () {
    function ObservableAWSLogsIntegrationApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AWSLogsIntegrationApi_1.AWSLogsIntegrationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AWSLogsIntegrationApi_1.AWSLogsIntegrationApiResponseProcessor();
    }
    /**
     * Test if permissions are present to add a log-forwarding triggers for the given services and AWS account. The input is the same as for Enable an AWS service log collection. Subsequent requests will always repeat the above, so this endpoint can be polled intermittently instead of blocking.  - Returns a status of 'created' when it's checking if the Lambda exists in the account. - Returns a status of 'waiting' while checking. - Returns a status of 'checked and ok' if the Lambda exists. - Returns a status of 'error' if the Lambda does not exist.
     * Check that an AWS Lambda Function exists
     * @param body Check AWS Log Lambda Async request body.
     */
    ObservableAWSLogsIntegrationApi.prototype.checkAWSLogsLambdaAsync = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.checkAWSLogsLambdaAsync(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_19 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_19(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_20 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_20(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.checkAWSLogsLambdaAsync(rsp); }));
        }));
    };
    /**
     * Test if permissions are present to add log-forwarding triggers for the given services and AWS account. Input is the same as for `EnableAWSLogServices`. Done async, so can be repeatedly polled in a non-blocking fashion until the async request completes.  - Returns a status of `created` when it's checking if the permissions exists   in the AWS account. - Returns a status of `waiting` while checking. - Returns a status of `checked and ok` if the Lambda exists. - Returns a status of `error` if the Lambda does not exist.
     * Check permissions for log services
     * @param body Check AWS Logs Async Services request body.
     */
    ObservableAWSLogsIntegrationApi.prototype.checkAWSLogsServicesAsync = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.checkAWSLogsServicesAsync(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_21 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_21(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_22 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_22(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.checkAWSLogsServicesAsync(rsp); }));
        }));
    };
    /**
     * Attach the Lambda ARN of the Lambda created for the Datadog-AWS log collection to your AWS account ID to enable log collection.
     * Add AWS Log Lambda ARN
     * @param body AWS Log Lambda Async request body.
     */
    ObservableAWSLogsIntegrationApi.prototype.createAWSLambdaARN = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createAWSLambdaARN(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_23 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_23(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_24 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_24(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createAWSLambdaARN(rsp); }));
        }));
    };
    /**
     * Delete a Datadog-AWS logs configuration by removing the specific Lambda ARN associated with a given AWS account.
     * Delete an AWS Logs integration
     * @param body Delete AWS Lambda ARN request body.
     */
    ObservableAWSLogsIntegrationApi.prototype.deleteAWSLambdaARN = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteAWSLambdaARN(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_25 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_25(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_26 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_26(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.deleteAWSLambdaARN(rsp); }));
        }));
    };
    /**
     * Enable automatic log collection for a list of services. This should be run after running `CreateAWSLambdaARN` to save the configuration.
     * Enable an AWS Logs integration
     * @param body Enable AWS Log Services request body.
     */
    ObservableAWSLogsIntegrationApi.prototype.enableAWSLogServices = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.enableAWSLogServices(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_27 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_27(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_28 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_28(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.enableAWSLogServices(rsp); }));
        }));
    };
    /**
     * List all Datadog-AWS Logs integrations configured in your Datadog account.
     * List all AWS Logs integrations
     */
    ObservableAWSLogsIntegrationApi.prototype.listAWSLogsIntegrations = function (options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listAWSLogsIntegrations(options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_29 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_29(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_30 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_30(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.listAWSLogsIntegrations(rsp); }));
        }));
    };
    /**
     * Get the list of current AWS services that Datadog offers automatic log collection. Use returned service IDs with the services parameter for the Enable an AWS service log collection API endpoint.
     * Get list of AWS log ready services
     */
    ObservableAWSLogsIntegrationApi.prototype.listAWSLogsServices = function (options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listAWSLogsServices(options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_31 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_31(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_32 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_32(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.listAWSLogsServices(rsp); }));
        }));
    };
    return ObservableAWSLogsIntegrationApi;
}());
exports.ObservableAWSLogsIntegrationApi = ObservableAWSLogsIntegrationApi;
var AuthenticationApi_1 = require("../apis/AuthenticationApi");
var ObservableAuthenticationApi = /** @class */ (function () {
    function ObservableAuthenticationApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthenticationApi_1.AuthenticationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthenticationApi_1.AuthenticationApiResponseProcessor();
    }
    /**
     * Check if the API key (not the APP key) is valid. If invalid, a 403 is returned.
     * Validate API key
     */
    ObservableAuthenticationApi.prototype.validate = function (options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.validate(options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_33 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_33(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_34 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_34(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.validate(rsp); }));
        }));
    };
    return ObservableAuthenticationApi;
}());
exports.ObservableAuthenticationApi = ObservableAuthenticationApi;
var AzureIntegrationApi_1 = require("../apis/AzureIntegrationApi");
var ObservableAzureIntegrationApi = /** @class */ (function () {
    function ObservableAzureIntegrationApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AzureIntegrationApi_1.AzureIntegrationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AzureIntegrationApi_1.AzureIntegrationApiResponseProcessor();
    }
    /**
     * Create a Datadog-Azure integration.  Using the `POST` method updates your integration configuration by adding your new configuration to the existing one in your Datadog organization.  Using the `PUT` method updates your integration configuration by replacing your current configuration with the new one sent to your Datadog organization.
     * Create an Azure integration
     * @param body Create a Datadog-Azure integration for your Datadog account request body.
     */
    ObservableAzureIntegrationApi.prototype.createAzureIntegration = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createAzureIntegration(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_35 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_35(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_36 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_36(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createAzureIntegration(rsp); }));
        }));
    };
    /**
     * Delete a given Datadog-Azure integration from your Datadog account.
     * Delete an Azure integration
     * @param body Delete a given Datadog-Azure integration request body.
     */
    ObservableAzureIntegrationApi.prototype.deleteAzureIntegration = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteAzureIntegration(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_37 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_37(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_38 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_38(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.deleteAzureIntegration(rsp); }));
        }));
    };
    /**
     * List all Datadog-Azure integrations configured in your Datadog account.
     * List all Azure integrations
     */
    ObservableAzureIntegrationApi.prototype.listAzureIntegration = function (options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listAzureIntegration(options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_39 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_39(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_40 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_40(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.listAzureIntegration(rsp); }));
        }));
    };
    /**
     * Update the defined list of host filters for a given Datadog-Azure integration.
     * Update Azure integration host filters
     * @param body Update a Datadog-Azure integration&#39;s host filters request body.
     */
    ObservableAzureIntegrationApi.prototype.updateAzureHostFilters = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateAzureHostFilters(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_41 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_41(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_42 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_42(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updateAzureHostFilters(rsp); }));
        }));
    };
    /**
     * Update a Datadog-Azure integration. Requires an existing `tenant_name` and `client_id`. Any other fields supplied will overwrite existing values. To overwrite `tenant_name` or `client_id`, use `new_tenant_name` and `new_client_id`. To leave a field unchanged, do not supply that field in the payload.
     * Update an Azure integration
     * @param body Update a Datadog-Azure integration request body.
     */
    ObservableAzureIntegrationApi.prototype.updateAzureIntegration = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateAzureIntegration(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_43 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_43(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_44 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_44(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updateAzureIntegration(rsp); }));
        }));
    };
    return ObservableAzureIntegrationApi;
}());
exports.ObservableAzureIntegrationApi = ObservableAzureIntegrationApi;
var DashboardListsApi_1 = require("../apis/DashboardListsApi");
var ObservableDashboardListsApi = /** @class */ (function () {
    function ObservableDashboardListsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DashboardListsApi_1.DashboardListsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DashboardListsApi_1.DashboardListsApiResponseProcessor();
    }
    /**
     * Create an empty dashboard list.
     * Create a dashboard list
     * @param body Create a dashboard list request body.
     */
    ObservableDashboardListsApi.prototype.createDashboardList = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createDashboardList(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_45 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_45(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_46 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_46(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createDashboardList(rsp); }));
        }));
    };
    /**
     * Delete a dashboard list.
     * Delete a dashboard list
     * @param listId ID of the dashboard list to delete.
     */
    ObservableDashboardListsApi.prototype.deleteDashboardList = function (listId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteDashboardList(listId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_47 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_47(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_48 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_48(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.deleteDashboardList(rsp); }));
        }));
    };
    /**
     * Fetch an existing dashboard list's definition.
     * Get a dashboard list
     * @param listId ID of the dashboard list to fetch.
     */
    ObservableDashboardListsApi.prototype.getDashboardList = function (listId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getDashboardList(listId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_49 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_49(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_50 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_50(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getDashboardList(rsp); }));
        }));
    };
    /**
     * Fetch all of your existing dashboard list definitions.
     * Get all dashboard lists
     */
    ObservableDashboardListsApi.prototype.listDashboardLists = function (options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listDashboardLists(options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_51 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_51(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_52 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_52(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.listDashboardLists(rsp); }));
        }));
    };
    /**
     * Update the name of a dashboard list.
     * Update a dashboard list
     * @param listId ID of the dashboard list to update.
     * @param body Update a dashboard list request body.
     */
    ObservableDashboardListsApi.prototype.updateDashboardList = function (listId, body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateDashboardList(listId, body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_53 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_53(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_54 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_54(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updateDashboardList(rsp); }));
        }));
    };
    return ObservableDashboardListsApi;
}());
exports.ObservableDashboardListsApi = ObservableDashboardListsApi;
var DashboardsApi_1 = require("../apis/DashboardsApi");
var ObservableDashboardsApi = /** @class */ (function () {
    function ObservableDashboardsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DashboardsApi_1.DashboardsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DashboardsApi_1.DashboardsApiResponseProcessor();
    }
    /**
     * Create a dashboard using the specified options. When defining queries in your widgets, take note of which queries should have the `as_count()` or `as_rate()` modifiers appended. Refer to the following [documentation](https://docs.datadoghq.com/developers/metrics/type_modifiers/?tab=count#in-application-modifiers) for more information on these modifiers.
     * Create a new dashboard
     * @param body Create a dashboard request body.
     */
    ObservableDashboardsApi.prototype.createDashboard = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createDashboard(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_55 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_55(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_56 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_56(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createDashboard(rsp); }));
        }));
    };
    /**
     * Delete a dashboard using the specified ID.
     * Delete a dashboard
     * @param dashboardId The ID of the dashboard.
     */
    ObservableDashboardsApi.prototype.deleteDashboard = function (dashboardId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteDashboard(dashboardId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_57 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_57(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_58 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_58(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.deleteDashboard(rsp); }));
        }));
    };
    /**
     * Get a dashboard using the specified ID.
     * Get a dashboard
     * @param dashboardId The ID of the dashboard.
     */
    ObservableDashboardsApi.prototype.getDashboard = function (dashboardId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getDashboard(dashboardId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_59 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_59(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_60 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_60(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getDashboard(rsp); }));
        }));
    };
    /**
     * Get all dashboards.  **Note**: This query will only return custom created or cloned dashboards. This query will not return preset dashboards.
     * Get all dashboards
     * @param filterShared When &#x60;true&#x60;, this query only returns shared custom created or cloned dashboards.
     */
    ObservableDashboardsApi.prototype.listDashboards = function (filterShared, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listDashboards(filterShared, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_61 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_61(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_62 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_62(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.listDashboards(rsp); }));
        }));
    };
    /**
     * Update a dashboard using the specified ID.
     * Update a dashboard
     * @param dashboardId The ID of the dashboard.
     * @param body Update Dashboard request body.
     */
    ObservableDashboardsApi.prototype.updateDashboard = function (dashboardId, body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateDashboard(dashboardId, body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_63 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_63(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_64 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_64(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updateDashboard(rsp); }));
        }));
    };
    return ObservableDashboardsApi;
}());
exports.ObservableDashboardsApi = ObservableDashboardsApi;
var DowntimesApi_1 = require("../apis/DowntimesApi");
var ObservableDowntimesApi = /** @class */ (function () {
    function ObservableDowntimesApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DowntimesApi_1.DowntimesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DowntimesApi_1.DowntimesApiResponseProcessor();
    }
    /**
     * Cancel a downtime.
     * Cancel a downtime
     * @param downtimeId ID of the downtime to cancel.
     */
    ObservableDowntimesApi.prototype.cancelDowntime = function (downtimeId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.cancelDowntime(downtimeId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_65 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_65(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_66 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_66(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.cancelDowntime(rsp); }));
        }));
    };
    /**
     * Delete all downtimes that match the scope of `X`.
     * Cancel downtimes by scope
     * @param body Scope to cancel downtimes for.
     */
    ObservableDowntimesApi.prototype.cancelDowntimesByScope = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.cancelDowntimesByScope(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_67 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_67(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_68 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_68(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.cancelDowntimesByScope(rsp); }));
        }));
    };
    /**
     * Schedule a downtime.
     * Schedule a downtime
     * @param body Schedule a downtime request body.
     */
    ObservableDowntimesApi.prototype.createDowntime = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createDowntime(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_69 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_69(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_70 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_70(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createDowntime(rsp); }));
        }));
    };
    /**
     * Get downtime detail by `downtime_id`.
     * Get a downtime
     * @param downtimeId ID of the downtime to fetch.
     */
    ObservableDowntimesApi.prototype.getDowntime = function (downtimeId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getDowntime(downtimeId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_71 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_71(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_72 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_72(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getDowntime(rsp); }));
        }));
    };
    /**
     * Get all scheduled downtimes.
     * Get all downtimes
     * @param currentOnly Only return downtimes that are active when the request is made.
     */
    ObservableDowntimesApi.prototype.listDowntimes = function (currentOnly, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listDowntimes(currentOnly, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_73 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_73(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_74 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_74(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.listDowntimes(rsp); }));
        }));
    };
    /**
     * Get all downtimes for the specified monitor
     * Get all downtimes for a monitor
     * @param monitorId The id of the monitor
     */
    ObservableDowntimesApi.prototype.listMonitorDowntimes = function (monitorId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listMonitorDowntimes(monitorId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_75 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_75(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_76 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_76(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.listMonitorDowntimes(rsp); }));
        }));
    };
    /**
     * Update a single downtime by `downtime_id`.
     * Update a downtime
     * @param downtimeId ID of the downtime to update.
     * @param body Update a downtime request body.
     */
    ObservableDowntimesApi.prototype.updateDowntime = function (downtimeId, body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateDowntime(downtimeId, body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_77 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_77(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_78 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_78(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updateDowntime(rsp); }));
        }));
    };
    return ObservableDowntimesApi;
}());
exports.ObservableDowntimesApi = ObservableDowntimesApi;
var EventsApi_1 = require("../apis/EventsApi");
var ObservableEventsApi = /** @class */ (function () {
    function ObservableEventsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EventsApi_1.EventsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EventsApi_1.EventsApiResponseProcessor();
    }
    /**
     * This endpoint allows you to post events to the stream. Tag them, set priority and event aggregate them with other events.
     * Post an event
     * @param body Event request object
     */
    ObservableEventsApi.prototype.createEvent = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createEvent(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_79 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_79(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_80 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_80(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createEvent(rsp); }));
        }));
    };
    /**
     * This endpoint allows you to query for event details.  **Note**: If the event you’re querying contains markdown formatting of any kind, you may see characters such as `%`,`\\`,`n` in your output.
     * Get an event
     * @param eventId The ID of the event.
     */
    ObservableEventsApi.prototype.getEvent = function (eventId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getEvent(eventId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_81 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_81(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_82 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_82(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getEvent(rsp); }));
        }));
    };
    /**
     * The event stream can be queried and filtered by time, priority, sources and tags.  **Notes**: - If the event you’re querying contains markdown formatting of any kind, you may see characters such as `%`,`\\`,`n` in your output.  - This endpoint returns a maximum of `1000` most recent results. To return additional results, identify the last timestamp of the last result and set that as the `end` query time to paginate the results. You can also use the page parameter to specify which set of `1000` results to return.
     * Query the event stream
     * @param start POSIX timestamp.
     * @param end POSIX timestamp.
     * @param priority Priority of your events, either &#x60;low&#x60; or &#x60;normal&#x60;.
     * @param sources A comma separated string of sources.
     * @param tags A comma separated list indicating what tags, if any, should be used to filter the list of monitors by scope.
     * @param unaggregated Set unaggregated to &#x60;true&#x60; to return all events within the specified [&#x60;start&#x60;,&#x60;end&#x60;] timeframe. Otherwise if an event is aggregated to a parent event with a timestamp outside of the timeframe, it won&#39;t be available in the output. Aggregated events with &#x60;is_aggregate&#x3D;true&#x60; in the response will still be returned unless exclude_aggregate is set to &#x60;true.&#x60;
     * @param excludeAggregate Set &#x60;exclude_aggregate&#x60; to &#x60;true&#x60; to only return unaggregated events where &#x60;is_aggregate&#x3D;false&#x60; in the response. If the &#x60;exclude_aggregate&#x60; parameter is set to &#x60;true&#x60;, then the unaggregated parameter is ignored and will be &#x60;true&#x60; by default.
     * @param page By default 1000 results are returned per request. Set page to the number of the page to return with &#x60;0&#x60; being the first page. The page parameter can only be used when either unaggregated or exclude_aggregate is set to &#x60;true.&#x60;
     */
    ObservableEventsApi.prototype.listEvents = function (start, end, priority, sources, tags, unaggregated, excludeAggregate, page, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listEvents(start, end, priority, sources, tags, unaggregated, excludeAggregate, page, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_83 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_83(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_84 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_84(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.listEvents(rsp); }));
        }));
    };
    return ObservableEventsApi;
}());
exports.ObservableEventsApi = ObservableEventsApi;
var GCPIntegrationApi_1 = require("../apis/GCPIntegrationApi");
var ObservableGCPIntegrationApi = /** @class */ (function () {
    function ObservableGCPIntegrationApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GCPIntegrationApi_1.GCPIntegrationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GCPIntegrationApi_1.GCPIntegrationApiResponseProcessor();
    }
    /**
     * Create a Datadog-GCP integration.
     * Create a GCP integration
     * @param body Create a Datadog-GCP integration.
     */
    ObservableGCPIntegrationApi.prototype.createGCPIntegration = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createGCPIntegration(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_85 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_85(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_86 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_86(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createGCPIntegration(rsp); }));
        }));
    };
    /**
     * Delete a given Datadog-GCP integration.
     * Delete a GCP integration
     * @param body Delete a given Datadog-GCP integration.
     */
    ObservableGCPIntegrationApi.prototype.deleteGCPIntegration = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteGCPIntegration(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_87 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_87(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_88 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_88(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.deleteGCPIntegration(rsp); }));
        }));
    };
    /**
     * List all Datadog-GCP integrations configured in your Datadog account.
     * List all GCP integrations
     */
    ObservableGCPIntegrationApi.prototype.listGCPIntegration = function (options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listGCPIntegration(options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_89 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_89(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_90 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_90(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.listGCPIntegration(rsp); }));
        }));
    };
    /**
     * Update a Datadog-GCP integrations host_filters and/or auto-mute. Requires a `project_id` and `client_email`, however these fields cannot be updated. If you need to update these fields, delete and use the create (`POST`) endpoint. The unspecified fields will keep their original values.
     * Update a GCP integration
     * @param body Update a Datadog-GCP integration.
     */
    ObservableGCPIntegrationApi.prototype.updateGCPIntegration = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateGCPIntegration(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_91 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_91(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_92 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_92(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updateGCPIntegration(rsp); }));
        }));
    };
    return ObservableGCPIntegrationApi;
}());
exports.ObservableGCPIntegrationApi = ObservableGCPIntegrationApi;
var HostsApi_1 = require("../apis/HostsApi");
var ObservableHostsApi = /** @class */ (function () {
    function ObservableHostsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new HostsApi_1.HostsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new HostsApi_1.HostsApiResponseProcessor();
    }
    /**
     * This endpoint returns the total number of active and up hosts in your Datadog account. Active means the host has reported in the past hour, and up means it has reported in the past two hours.
     * Get the total number of active hosts
     * @param from Number of seconds from which you want to get total number of active hosts.
     */
    ObservableHostsApi.prototype.getHostTotals = function (from, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getHostTotals(from, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_93 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_93(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_94 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_94(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getHostTotals(rsp); }));
        }));
    };
    /**
     * This endpoint allows searching for hosts by name, alias, or tag. Hosts live within the past 3 hours are included by default. Retention is 7 days. Results are paginated with a max of 1000 results at a time.
     * Get all hosts for your organization
     * @param filter String to filter search results.
     * @param sortField Sort hosts by this field.
     * @param sortDir Direction of sort. Options include &#x60;asc&#x60; and &#x60;desc&#x60;.
     * @param start Host result to start search from.
     * @param count Number of hosts to return. Max 1000.
     * @param from Number of seconds since UNIX epoch from which you want to search your hosts.
     * @param includeMutedHostsData Include information on the muted status of hosts and when the mute expires.
     * @param includeHostsMetadata Include additional metadata about the hosts (agent_version, machine, platform, processor, etc.).
     */
    ObservableHostsApi.prototype.listHosts = function (filter, sortField, sortDir, start, count, from, includeMutedHostsData, includeHostsMetadata, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listHosts(filter, sortField, sortDir, start, count, from, includeMutedHostsData, includeHostsMetadata, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_95 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_95(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_96 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_96(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.listHosts(rsp); }));
        }));
    };
    /**
     * Mute a host.
     * Mute a host
     * @param hostName Name of the host to mute.
     * @param body Mute a host request body.
     */
    ObservableHostsApi.prototype.muteHost = function (hostName, body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.muteHost(hostName, body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_97 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_97(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_98 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_98(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.muteHost(rsp); }));
        }));
    };
    /**
     * Unmutes a host. This endpoint takes no JSON arguments.
     * Unmute a host
     * @param hostName Name of the host to unmute.
     */
    ObservableHostsApi.prototype.unmuteHost = function (hostName, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.unmuteHost(hostName, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_99 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_99(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_100 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_100(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.unmuteHost(rsp); }));
        }));
    };
    return ObservableHostsApi;
}());
exports.ObservableHostsApi = ObservableHostsApi;
var IPRangesApi_1 = require("../apis/IPRangesApi");
var ObservableIPRangesApi = /** @class */ (function () {
    function ObservableIPRangesApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new IPRangesApi_1.IPRangesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new IPRangesApi_1.IPRangesApiResponseProcessor();
    }
    /**
     * Get information about Datadog IP ranges.
     * List IP Ranges
     */
    ObservableIPRangesApi.prototype.getIPRanges = function (options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getIPRanges(options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_101 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_101(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_102 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_102(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getIPRanges(rsp); }));
        }));
    };
    return ObservableIPRangesApi;
}());
exports.ObservableIPRangesApi = ObservableIPRangesApi;
var KeyManagementApi_1 = require("../apis/KeyManagementApi");
var ObservableKeyManagementApi = /** @class */ (function () {
    function ObservableKeyManagementApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new KeyManagementApi_1.KeyManagementApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new KeyManagementApi_1.KeyManagementApiResponseProcessor();
    }
    /**
     * Creates an API key with a given name.
     * Create an API key
     * @param body
     */
    ObservableKeyManagementApi.prototype.createAPIKey = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createAPIKey(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_103 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_103(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_104 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_104(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createAPIKey(rsp); }));
        }));
    };
    /**
     * Create an application key with a given name.
     * Create an application key
     * @param body
     */
    ObservableKeyManagementApi.prototype.createApplicationKey = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createApplicationKey(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_105 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_105(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_106 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_106(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createApplicationKey(rsp); }));
        }));
    };
    /**
     * Delete a given API key.
     * Delete an API key
     * @param key The specific API key you are working with.
     */
    ObservableKeyManagementApi.prototype.deleteAPIKey = function (key, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteAPIKey(key, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_107 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_107(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_108 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_108(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.deleteAPIKey(rsp); }));
        }));
    };
    /**
     * Delete a given application key.
     * Delete an application key
     * @param key The specific APP key you are working with.
     */
    ObservableKeyManagementApi.prototype.deleteApplicationKey = function (key, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteApplicationKey(key, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_109 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_109(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_110 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_110(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.deleteApplicationKey(rsp); }));
        }));
    };
    /**
     * Get a given API key.
     * Get API key
     * @param key The specific API key you are working with.
     */
    ObservableKeyManagementApi.prototype.getAPIKey = function (key, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getAPIKey(key, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_111 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_111(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_112 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_112(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getAPIKey(rsp); }));
        }));
    };
    /**
     * Get a given application key.
     * Get an application key
     * @param key The specific APP key you are working with.
     */
    ObservableKeyManagementApi.prototype.getApplicationKey = function (key, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getApplicationKey(key, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_113 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_113(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_114 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_114(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getApplicationKey(rsp); }));
        }));
    };
    /**
     * Get all API keys available for your account.
     * Get all API keys
     */
    ObservableKeyManagementApi.prototype.listAPIKeys = function (options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listAPIKeys(options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_115 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_115(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_116 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_116(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.listAPIKeys(rsp); }));
        }));
    };
    /**
     * Get all application keys available for your Datadog account.
     * Get all application keys
     */
    ObservableKeyManagementApi.prototype.listApplicationKeys = function (options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listApplicationKeys(options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_117 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_117(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_118 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_118(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.listApplicationKeys(rsp); }));
        }));
    };
    /**
     * Edit an API key name.
     * Edit an API key
     * @param key The specific API key you are working with.
     * @param body
     */
    ObservableKeyManagementApi.prototype.updateAPIKey = function (key, body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateAPIKey(key, body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_119 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_119(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_120 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_120(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updateAPIKey(rsp); }));
        }));
    };
    /**
     * Edit an application key name.
     * Edit an application key
     * @param key The specific APP key you are working with.
     * @param body
     */
    ObservableKeyManagementApi.prototype.updateApplicationKey = function (key, body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateApplicationKey(key, body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_121 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_121(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_122 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_122(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updateApplicationKey(rsp); }));
        }));
    };
    return ObservableKeyManagementApi;
}());
exports.ObservableKeyManagementApi = ObservableKeyManagementApi;
var LogsApi_1 = require("../apis/LogsApi");
var ObservableLogsApi = /** @class */ (function () {
    function ObservableLogsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LogsApi_1.LogsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LogsApi_1.LogsApiResponseProcessor();
    }
    /**
     * List endpoint returns logs that match a log search query. [Results are paginated][1].  **If you are considering archiving logs for your organization, consider use of the Datadog archive capabilities instead of the log list API. See [Datadog Logs Archive documentation][2].**  [1]: /logs/guide/collect-multiple-logs-with-pagination [2]: https://docs.datadoghq.com/logs/archives
     * Search logs
     * @param body Logs filter
     */
    ObservableLogsApi.prototype.listLogs = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listLogs(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_123 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_123(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_124 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_124(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.listLogs(rsp); }));
        }));
    };
    /**
     * Send your logs to your Datadog platform over HTTP. Limits per HTTP request are:  - Maximum content size per payload (uncompressed): 5MB - Maximum size for a single log: 1MB - Maximum array size if sending multiple logs in an array: 1000 entries  Any log exceeding 1MB is accepted and truncated by Datadog: - For a single log request, the API truncates the log at 1MB and returns a 2xx. - For a multi-logs request, the API processes all logs, truncates only logs larger than 1MB, and returns a 2xx.  Datadog recommends sending your logs compressed. Add the `Content-Encoding: gzip` header to the request when sending compressed logs.  The status codes answered by the HTTP API are: - 200: OK - 400: Bad request (likely an issue in the payload formatting) - 403: Permission issue (likely using an invalid API Key) - 413: Payload too large (batch is above 5MB uncompressed) - 5xx: Internal error, request should be retried after some time
     * Send logs
     * @param body Log to send (JSON format).
     * @param contentEncoding HTTP header used to compress the media-type.
     * @param ddtags Log tags can be passed as query parameters with &#x60;text/plain&#x60; content type.
     */
    ObservableLogsApi.prototype.submitLog = function (body, contentEncoding, ddtags, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.submitLog(body, contentEncoding, ddtags, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_125 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_125(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_126 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_126(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.submitLog(rsp); }));
        }));
    };
    return ObservableLogsApi;
}());
exports.ObservableLogsApi = ObservableLogsApi;
var LogsIndexesApi_1 = require("../apis/LogsIndexesApi");
var ObservableLogsIndexesApi = /** @class */ (function () {
    function ObservableLogsIndexesApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LogsIndexesApi_1.LogsIndexesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LogsIndexesApi_1.LogsIndexesApiResponseProcessor();
    }
    /**
     * Creates a new index. Returns the Index object passed in the request body when the request is successful.
     * Create an index
     * @param body Object containing the new index.
     */
    ObservableLogsIndexesApi.prototype.createLogsIndex = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createLogsIndex(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_127 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_127(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_128 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_128(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createLogsIndex(rsp); }));
        }));
    };
    /**
     * Get one log index from your organization. This endpoint takes no JSON arguments.
     * Get an index
     * @param name Name of the log index.
     */
    ObservableLogsIndexesApi.prototype.getLogsIndex = function (name, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getLogsIndex(name, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_129 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_129(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_130 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_130(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getLogsIndex(rsp); }));
        }));
    };
    /**
     * Get the current order of your log indexes. This endpoint takes no JSON arguments.
     * Get indexes order
     */
    ObservableLogsIndexesApi.prototype.getLogsIndexOrder = function (options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getLogsIndexOrder(options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_131 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_131(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_132 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_132(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getLogsIndexOrder(rsp); }));
        }));
    };
    /**
     * The Index object describes the configuration of a log index. This endpoint returns an array of the `LogIndex` objects of your organization.
     * Get all indexes
     */
    ObservableLogsIndexesApi.prototype.listLogIndexes = function (options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listLogIndexes(options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_133 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_133(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_134 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_134(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.listLogIndexes(rsp); }));
        }));
    };
    /**
     * Update an index as identified by its name. Returns the Index object passed in the request body when the request is successful.  Using the `PUT` method updates your index’s configuration by **replacing** your current configuration with the new one sent to your Datadog organization.
     * Update an index
     * @param name Name of the log index.
     * @param body Object containing the new &#x60;LogsIndexUpdateRequest&#x60;.
     */
    ObservableLogsIndexesApi.prototype.updateLogsIndex = function (name, body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateLogsIndex(name, body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_135 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_135(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_136 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_136(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updateLogsIndex(rsp); }));
        }));
    };
    /**
     * This endpoint updates the index order of your organization. It returns the index order object passed in the request body when the request is successful.
     * Update indexes order
     * @param body Object containing the new ordered list of index names
     */
    ObservableLogsIndexesApi.prototype.updateLogsIndexOrder = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateLogsIndexOrder(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_137 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_137(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_138 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_138(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updateLogsIndexOrder(rsp); }));
        }));
    };
    return ObservableLogsIndexesApi;
}());
exports.ObservableLogsIndexesApi = ObservableLogsIndexesApi;
var LogsPipelinesApi_1 = require("../apis/LogsPipelinesApi");
var ObservableLogsPipelinesApi = /** @class */ (function () {
    function ObservableLogsPipelinesApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LogsPipelinesApi_1.LogsPipelinesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LogsPipelinesApi_1.LogsPipelinesApiResponseProcessor();
    }
    /**
     * Create a pipeline in your organization.
     * Create a pipeline
     * @param body Definition of the new pipeline.
     */
    ObservableLogsPipelinesApi.prototype.createLogsPipeline = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createLogsPipeline(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_139 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_139(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_140 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_140(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createLogsPipeline(rsp); }));
        }));
    };
    /**
     * Delete a given pipeline from your organization. This endpoint takes no JSON arguments.
     * Delete a pipeline
     * @param pipelineId ID of the pipeline to delete.
     */
    ObservableLogsPipelinesApi.prototype.deleteLogsPipeline = function (pipelineId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteLogsPipeline(pipelineId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_141 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_141(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_142 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_142(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.deleteLogsPipeline(rsp); }));
        }));
    };
    /**
     * Get a specific pipeline from your organization. This endpoint takes no JSON arguments.
     * Get a pipeline
     * @param pipelineId ID of the pipeline to get.
     */
    ObservableLogsPipelinesApi.prototype.getLogsPipeline = function (pipelineId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getLogsPipeline(pipelineId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_143 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_143(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_144 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_144(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getLogsPipeline(rsp); }));
        }));
    };
    /**
     * Get the current order of your pipelines. This endpoint takes no JSON arguments.
     * Get pipeline order
     */
    ObservableLogsPipelinesApi.prototype.getLogsPipelineOrder = function (options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getLogsPipelineOrder(options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_145 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_145(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_146 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_146(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getLogsPipelineOrder(rsp); }));
        }));
    };
    /**
     * Get all pipelines from your organization. This endpoint takes no JSON arguments.
     * Get all pipelines
     */
    ObservableLogsPipelinesApi.prototype.listLogsPipelines = function (options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listLogsPipelines(options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_147 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_147(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_148 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_148(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.listLogsPipelines(rsp); }));
        }));
    };
    /**
     * Update a given pipeline configuration to change it’s processors or their order.  **Note**: Using this method updates your pipeline configuration by **replacing** your current configuration with the new one sent to your Datadog organization.
     * Update a pipeline
     * @param pipelineId ID of the pipeline to delete.
     * @param body New definition of the pipeline.
     */
    ObservableLogsPipelinesApi.prototype.updateLogsPipeline = function (pipelineId, body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateLogsPipeline(pipelineId, body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_149 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_149(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_150 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_150(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updateLogsPipeline(rsp); }));
        }));
    };
    /**
     * Update the order of your pipelines. Since logs are processed sequentially, reordering a pipeline may change the structure and content of the data processed by other pipelines and their processors.  **Note**: Using the `PUT` method updates your pipeline order by replacing your current order with the new one sent to your Datadog organization.
     * Update pipeline order
     * @param body Object containing the new ordered list of pipeline IDs.
     */
    ObservableLogsPipelinesApi.prototype.updateLogsPipelineOrder = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateLogsPipelineOrder(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_151 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_151(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_152 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_152(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updateLogsPipelineOrder(rsp); }));
        }));
    };
    return ObservableLogsPipelinesApi;
}());
exports.ObservableLogsPipelinesApi = ObservableLogsPipelinesApi;
var MetricsApi_1 = require("../apis/MetricsApi");
var ObservableMetricsApi = /** @class */ (function () {
    function ObservableMetricsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MetricsApi_1.MetricsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MetricsApi_1.MetricsApiResponseProcessor();
    }
    /**
     * Get metadata about a specific metric.
     * Get metric metadata
     * @param metricName Name of the metric for which to get metadata.
     */
    ObservableMetricsApi.prototype.getMetricMetadata = function (metricName, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getMetricMetadata(metricName, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_153 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_153(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_154 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_154(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getMetricMetadata(rsp); }));
        }));
    };
    /**
     * Get the list of actively reporting metrics from a given time until now.
     * Get active metrics list
     * @param from Seconds since the Unix epoch.
     * @param host Hostname for filtering the list of metrics returned. If set, metrics retrieved are those with the corresponding hostname tag.
     * @param tagFilter Filter metrics that have been submitted with the given tags. Supports boolean and wildcard expressions. Cannot be combined with other filters.
     */
    ObservableMetricsApi.prototype.listActiveMetrics = function (from, host, tagFilter, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listActiveMetrics(from, host, tagFilter, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_155 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_155(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_156 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_156(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.listActiveMetrics(rsp); }));
        }));
    };
    /**
     * Search for metrics from the last 24 hours in Datadog.
     * Search metrics
     * @param q Query string to search metrics upon. Must be prefixed with &#x60;metrics:&#x60;.
     */
    ObservableMetricsApi.prototype.listMetrics = function (q, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listMetrics(q, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_157 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_157(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_158 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_158(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.listMetrics(rsp); }));
        }));
    };
    /**
     * Query timeseries points.
     * Query timeseries points
     * @param from Start of the queried time period, seconds since the Unix epoch.
     * @param to End of the queried time period, seconds since the Unix epoch.
     * @param query Query string.
     */
    ObservableMetricsApi.prototype.queryMetrics = function (from, to, query, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.queryMetrics(from, to, query, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_159 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_159(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_160 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_160(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.queryMetrics(rsp); }));
        }));
    };
    /**
     * The metrics end-point allows you to post time-series data that can be graphed on Datadog’s dashboards. The maximum payload size is 3.2 megabytes (3200000 bytes). Compressed payloads must have a decompressed size of less than 62 megabytes (62914560 bytes).  If you’re submitting metrics directly to the Datadog API without using DogStatsD, expect:  - 64 bits for the timestamp - 32 bits for the value - 20 bytes for the metric names - 50 bytes for the timeseries - The full payload is approximately 100 bytes. However, with the DogStatsD API, compression is applied, which reduces the payload size.
     * Submit metrics
     * @param body
     */
    ObservableMetricsApi.prototype.submitMetrics = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.submitMetrics(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_161 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_161(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_162 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_162(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.submitMetrics(rsp); }));
        }));
    };
    /**
     * Edit metadata of a specific metric. Find out more about [supported types](https://docs.datadoghq.com/developers/metrics).
     * Edit metric metadata
     * @param metricName Name of the metric for which to edit metadata.
     * @param body New metadata.
     */
    ObservableMetricsApi.prototype.updateMetricMetadata = function (metricName, body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateMetricMetadata(metricName, body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_163 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_163(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_164 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_164(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updateMetricMetadata(rsp); }));
        }));
    };
    return ObservableMetricsApi;
}());
exports.ObservableMetricsApi = ObservableMetricsApi;
var MonitorsApi_1 = require("../apis/MonitorsApi");
var ObservableMonitorsApi = /** @class */ (function () {
    function ObservableMonitorsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MonitorsApi_1.MonitorsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MonitorsApi_1.MonitorsApiResponseProcessor();
    }
    /**
     * Check if the given monitors can be deleted.
     * Check if a monitor can be deleted
     * @param monitorIds The IDs of the monitor to check.
     */
    ObservableMonitorsApi.prototype.checkCanDeleteMonitor = function (monitorIds, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.checkCanDeleteMonitor(monitorIds, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_165 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_165(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_166 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_166(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.checkCanDeleteMonitor(rsp); }));
        }));
    };
    /**
     * Create a monitor using the specified options.  #### Monitor Types  The type of monitor chosen from:  - anomaly: `query alert` - APM: `query alert` or `trace-analytics alert` - composite: `composite` - custom: `service check` - event: `event alert` - forecast: `query alert` - host: `service check` - integration: `query alert` or `service check` - live process: `process alert` - logs: `log alert` - metric: `metric alert` - network: `service check` - outlier: `query alert` - process: `service check` - rum: `rum alert` - SLO: `slo alert` - watchdog: `event alert` - event-v2: `event-v2 alert`  #### Query Types  **Metric Alert Query**  Example: `time_aggr(time_window):space_aggr:metric{tags} [by {key}] operator #`  - `time_aggr`: avg, sum, max, min, change, or pct_change - `time_window`: `last_#m` (with `#` between 1 and 2880 depending on the monitor type) or `last_#h`(with `#` between 1 and 48 depending on the monitor type), or `last_1d` - `space_aggr`: avg, sum, min, or max - `tags`: one or more tags (comma-separated), or * - `key`: a 'key' in key:value tag syntax; defines a separate alert for each tag in the group (multi-alert) - `operator`: <, <=, >, >=, ==, or != - `#`: an integer or decimal number used to set the threshold  If you are using the `_change_` or `_pct_change_` time aggregator, instead use `change_aggr(time_aggr(time_window), timeshift):space_aggr:metric{tags} [by {key}] operator #` with:  - `change_aggr` change, pct_change - `time_aggr` avg, sum, max, min [Learn more](https://docs.datadoghq.com/monitors/monitor_types/#define-the-conditions) - `time_window` last\\_#m (between 1 and 2880 depending on the monitor type), last\\_#h (between 1 and 48 depending on the monitor type), or last_#d (1 or 2) - `timeshift` #m_ago (5, 10, 15, or 30), #h_ago (1, 2, or 4), or 1d_ago  Use this to create an outlier monitor using the following query: `avg(last_30m):outliers(avg:system.cpu.user{role:es-events-data} by {host}, 'dbscan', 7) > 0`  **Service Check Query**  Example: `\"check\".over(tags).last(count).count_by_status()`  - **`check`** name of the check, e.g. `datadog.agent.up` - **`tags`** one or more quoted tags (comma-separated), or \"*\". e.g.: `.over(\"env:prod\", \"role:db\")` - **`count`** must be at greater than or equal to your max threshold (defined in the `options`). It is limited to 100. For example, if you've specified to notify on 1 critical, 3 ok, and 2 warn statuses, `count` should be 3.  **Event Alert Query**  Example: `events('sources:nagios status:error,warning priority:normal tags: \"string query\"').rollup(\"count\").last(\"1h\")\"`  - **`event`**, the event query string: - **`string_query`** free text query to match against event title and text. - **`sources`** event sources (comma-separated). - **`status`** event statuses (comma-separated). Valid options: error, warn, and info. - **`priority`** event priorities (comma-separated). Valid options: low, normal, all. - **`host`** event reporting host (comma-separated). - **`tags`** event tags (comma-separated). - **`excluded_tags`** excluded event tags (comma-separated). - **`rollup`** the stats roll-up method. `count` is the only supported method now. - **`last`** the timeframe to roll up the counts. Examples: 45m, 4h. Supported timeframes: m, h and d. This value should not exceed 48 hours.  **NOTE** Only available on US1 and EU.  **Event V2 Alert Query**  Example: `events(query).rollup(rollup_method[, measure]).last(time_window) operator #`  - **`query`** The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/). - **`rollup_method`** The stats roll-up method - supports `count`, `avg` and `cardinality`. - **`measure`** For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use. - **`time_window`** #m (5, 10, 15, or 30), #h (1, 2, or 4, 24). - **`operator`** `<`, `<=`, `>`, `>=`, `==`, or `!=`. - **`#`** an integer or decimal number used to set the threshold.  **NOTE** Only available on US1-FED, US3, and in closed beta on EU and US1.  **Process Alert Query**  Example: `processes(search).over(tags).rollup('count').last(timeframe) operator #`  - **`search`** free text search string for querying processes. Matching processes match results on the [Live Processes](https://docs.datadoghq.com/infrastructure/process/?tab=linuxwindows) page. - **`tags`** one or more tags (comma-separated) - **`timeframe`** the timeframe to roll up the counts. Examples: 10m, 4h. Supported timeframes: s, m, h and d - **`operator`** <, <=, >, >=, ==, or != - **`#`** an integer or decimal number used to set the threshold  **Logs Alert Query**  Example: `logs(query).index(index_name).rollup(rollup_method[, measure]).last(time_window) operator #`  - **`query`** The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/). - **`index_name`** For multi-index organizations, the log index in which the request is performed. - **`rollup_method`** The stats roll-up method - supports `count`, `avg` and `cardinality`. - **`measure`** For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use. - **`time_window`** #m (between 1 and 2880), #h (between 1 and 48) - **`operator`** `<`, `<=`, `>`, `>=`, `==`, or `!=`. - **`#`** an integer or decimal number used to set the threshold.  **Composite Query**  Example: `12345 && 67890`, where `12345` and `67890` are the IDs of non-composite monitors  * **`name`** [*required*, *default* = **dynamic, based on query**]: The name of the alert. * **`message`** [*required*, *default* = **dynamic, based on query**]: A message to include with notifications for this monitor. Email notifications can be sent to specific users by using the same '@username' notation as events. * **`tags`** [*optional*, *default* = **empty list**]: A list of tags to associate with your monitor. When getting all monitor details via the API, use the `monitor_tags` argument to filter results by these tags. It is only available via the API and isn't visible or editable in the Datadog UI.  **SLO Alert Query**  Example: `error_budget(\"slo_id\").over(\"time_window\") operator #`  - **`slo_id`**: The alphanumeric SLO ID of the SLO you are configuring the alert for. - **`time_window`**: The time window of the SLO target you wish to alert on. Valid options: `7d`, `30d`, `90d`. - **`operator`**: `>=` or `>`
     * Create a monitor
     * @param body Create a monitor request body.
     */
    ObservableMonitorsApi.prototype.createMonitor = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createMonitor(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_167 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_167(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_168 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_168(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createMonitor(rsp); }));
        }));
    };
    /**
     * Delete the specified monitor
     * Delete a monitor
     * @param monitorId The ID of the monitor.
     * @param force Delete the monitor even if it&#39;s referenced by other resources (e.g. SLO, composite monitor).
     */
    ObservableMonitorsApi.prototype.deleteMonitor = function (monitorId, force, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteMonitor(monitorId, force, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_169 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_169(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_170 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_170(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.deleteMonitor(rsp); }));
        }));
    };
    /**
     * Get details about the specified monitor from your organization.
     * Get a monitor's details
     * @param monitorId The ID of the monitor
     * @param groupStates When specified, shows additional information about the group states. Choose one or more from &#x60;all&#x60;, &#x60;alert&#x60;, &#x60;warn&#x60;, and &#x60;no data&#x60;.
     */
    ObservableMonitorsApi.prototype.getMonitor = function (monitorId, groupStates, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getMonitor(monitorId, groupStates, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_171 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_171(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_172 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_172(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getMonitor(rsp); }));
        }));
    };
    /**
     * Get details about the specified monitor from your organization.
     * Get all monitor details
     * @param groupStates When specified, shows additional information about the group states. Choose one or more from &#x60;all&#x60;, &#x60;alert&#x60;, &#x60;warn&#x60;, and &#x60;no data&#x60;.
     * @param name A string to filter monitors by name.
     * @param tags A comma separated list indicating what tags, if any, should be used to filter the list of monitors by scope. For example, &#x60;host:host0&#x60;.
     * @param monitorTags A comma separated list indicating what service and/or custom tags, if any, should be used to filter the list of monitors. Tags created in the Datadog UI automatically have the service key prepended. For example, &#x60;service:my-app&#x60;.
     * @param withDowntimes If this argument is set to true, then the returned data includes all current downtimes for each monitor.
     * @param idOffset Monitor ID offset.
     * @param page The page to start paginating from. If this argument is not specified, the request returns all monitors without pagination.
     * @param pageSize The number of monitors to return per page. If the page argument is not specified, the default behavior returns all monitors without a &#x60;page_size&#x60; limit. However, if page is specified and &#x60;page_size&#x60; is not, the argument defaults to 100.
     */
    ObservableMonitorsApi.prototype.listMonitors = function (groupStates, name, tags, monitorTags, withDowntimes, idOffset, page, pageSize, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listMonitors(groupStates, name, tags, monitorTags, withDowntimes, idOffset, page, pageSize, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_173 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_173(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_174 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_174(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.listMonitors(rsp); }));
        }));
    };
    /**
     * Edit the specified monitor.
     * Edit a monitor
     * @param monitorId The ID of the monitor.
     * @param body Edit a monitor request body.
     */
    ObservableMonitorsApi.prototype.updateMonitor = function (monitorId, body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateMonitor(monitorId, body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_175 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_175(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_176 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_176(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updateMonitor(rsp); }));
        }));
    };
    /**
     * Validate the monitor provided in the request.
     * Validate a monitor
     * @param body Monitor request object
     */
    ObservableMonitorsApi.prototype.validateMonitor = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.validateMonitor(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_177 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_177(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_178 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_178(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.validateMonitor(rsp); }));
        }));
    };
    return ObservableMonitorsApi;
}());
exports.ObservableMonitorsApi = ObservableMonitorsApi;
var NotebooksApi_1 = require("../apis/NotebooksApi");
var ObservableNotebooksApi = /** @class */ (function () {
    function ObservableNotebooksApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new NotebooksApi_1.NotebooksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new NotebooksApi_1.NotebooksApiResponseProcessor();
    }
    /**
     * Create a notebook using the specified options.
     * Create a notebook
     * @param body The JSON description of the notebook you want to create.
     */
    ObservableNotebooksApi.prototype.createNotebook = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createNotebook(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_179 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_179(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_180 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_180(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createNotebook(rsp); }));
        }));
    };
    /**
     * Delete a notebook using the specified ID.
     * Delete a notebook
     * @param notebookId Unique ID, assigned when you create the notebook.
     */
    ObservableNotebooksApi.prototype.deleteNotebook = function (notebookId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteNotebook(notebookId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_181 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_181(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_182 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_182(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.deleteNotebook(rsp); }));
        }));
    };
    /**
     * Get a notebook using the specified notebook ID.
     * Get a notebook
     * @param notebookId Unique ID, assigned when you create the notebook.
     */
    ObservableNotebooksApi.prototype.getNotebook = function (notebookId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getNotebook(notebookId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_183 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_183(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_184 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_184(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getNotebook(rsp); }));
        }));
    };
    /**
     * Get all notebooks. This can also be used to search for notebooks with a particular `query` in the notebook `name` or author `handle`.
     * Get all notebooks
     * @param authorHandle Return notebooks created by the given &#x60;author_handle&#x60;.
     * @param excludeAuthorHandle Return notebooks not created by the given &#x60;author_handle&#x60;.
     * @param start The index of the first notebook you want returned.
     * @param count The number of notebooks to be returned.
     * @param sortField Sort by field &#x60;modified&#x60; or &#x60;name&#x60;.
     * @param sortDir Sort by direction &#x60;asc&#x60; or &#x60;desc&#x60;.
     * @param query Return only notebooks with &#x60;query&#x60; string in notebook name or author handle.
     * @param includeCells Value of &#x60;false&#x60; excludes the &#x60;cells&#x60; and global &#x60;time&#x60; for each notebook.
     */
    ObservableNotebooksApi.prototype.listNotebooks = function (authorHandle, excludeAuthorHandle, start, count, sortField, sortDir, query, includeCells, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listNotebooks(authorHandle, excludeAuthorHandle, start, count, sortField, sortDir, query, includeCells, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_185 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_185(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_186 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_186(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.listNotebooks(rsp); }));
        }));
    };
    /**
     * Update a notebook using the specified ID.
     * Update a notebook
     * @param notebookId Unique ID, assigned when you create the notebook.
     * @param body Update notebook request body.
     */
    ObservableNotebooksApi.prototype.updateNotebook = function (notebookId, body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateNotebook(notebookId, body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_187 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_187(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_188 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_188(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updateNotebook(rsp); }));
        }));
    };
    return ObservableNotebooksApi;
}());
exports.ObservableNotebooksApi = ObservableNotebooksApi;
var OrganizationsApi_1 = require("../apis/OrganizationsApi");
var ObservableOrganizationsApi = /** @class */ (function () {
    function ObservableOrganizationsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrganizationsApi_1.OrganizationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrganizationsApi_1.OrganizationsApiResponseProcessor();
    }
    /**
     * Create a child organization.  This endpoint requires the [multi-organization account](https://docs.datadoghq.com/account_management/multi_organization/) feature and must be enabled by [contacting support](https://docs.datadoghq.com/help/).  Once a new child organization is created, you can interact with it by using the `org.public_id`, `pi_key.key`, and `application_key.hash` provided in the response.
     * Create a child organization
     * @param body Organization object that needs to be created
     */
    ObservableOrganizationsApi.prototype.createChildOrg = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createChildOrg(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_189 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_189(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_190 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_190(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createChildOrg(rsp); }));
        }));
    };
    /**
     * Get organization information.
     * Get organization information
     * @param publicId The &#x60;public_id&#x60; of the organization you are operating within.
     */
    ObservableOrganizationsApi.prototype.getOrg = function (publicId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getOrg(publicId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_191 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_191(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_192 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_192(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getOrg(rsp); }));
        }));
    };
    /**
     * List your managed organizations.
     * List your managed organizations
     */
    ObservableOrganizationsApi.prototype.listOrgs = function (options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listOrgs(options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_193 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_193(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_194 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_194(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.listOrgs(rsp); }));
        }));
    };
    /**
     * Update your organization.
     * Update your organization
     * @param publicId The &#x60;public_id&#x60; of the organization you are operating within.
     * @param body
     */
    ObservableOrganizationsApi.prototype.updateOrg = function (publicId, body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateOrg(publicId, body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_195 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_195(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_196 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_196(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updateOrg(rsp); }));
        }));
    };
    /**
     * There are a couple of options for updating the Identity Provider (IdP) metadata from your SAML IdP.  * **Multipart Form-Data**: Post the IdP metadata file using a form post.  * **XML Body:** Post the IdP metadata file as the body of the request.
     * Upload IdP metadata
     * @param publicId The &#x60;public_id&#x60; of the organization you are operating with
     * @param idpFile The path to the XML metadata file you wish to upload.
     */
    ObservableOrganizationsApi.prototype.uploadIdPForOrg = function (publicId, idpFile, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.uploadIdPForOrg(publicId, idpFile, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_197 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_197(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_198 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_198(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.uploadIdPForOrg(rsp); }));
        }));
    };
    return ObservableOrganizationsApi;
}());
exports.ObservableOrganizationsApi = ObservableOrganizationsApi;
var PagerDutyIntegrationApi_1 = require("../apis/PagerDutyIntegrationApi");
var ObservablePagerDutyIntegrationApi = /** @class */ (function () {
    function ObservablePagerDutyIntegrationApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PagerDutyIntegrationApi_1.PagerDutyIntegrationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PagerDutyIntegrationApi_1.PagerDutyIntegrationApiResponseProcessor();
    }
    /**
     * Create a new service object in the PagerDuty integration.
     * Create a new service object
     * @param body Create a new service object request body.
     */
    ObservablePagerDutyIntegrationApi.prototype.createPagerDutyIntegrationService = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createPagerDutyIntegrationService(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_199 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_199(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_200 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_200(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createPagerDutyIntegrationService(rsp); }));
        }));
    };
    /**
     * Delete a single service object in the Datadog-PagerDuty integration.
     * Delete a single service object
     * @param serviceName The service name
     */
    ObservablePagerDutyIntegrationApi.prototype.deletePagerDutyIntegrationService = function (serviceName, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deletePagerDutyIntegrationService(serviceName, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_201 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_201(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_202 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_202(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.deletePagerDutyIntegrationService(rsp); }));
        }));
    };
    /**
     * Get service name in the Datadog-PagerDuty integration.
     * Get a single service object
     * @param serviceName The service name.
     */
    ObservablePagerDutyIntegrationApi.prototype.getPagerDutyIntegrationService = function (serviceName, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getPagerDutyIntegrationService(serviceName, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_203 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_203(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_204 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_204(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getPagerDutyIntegrationService(rsp); }));
        }));
    };
    /**
     * Update a single service object in the Datadog-PagerDuty integration.
     * Update a single service object
     * @param serviceName The service name
     * @param body Update an existing service object request body.
     */
    ObservablePagerDutyIntegrationApi.prototype.updatePagerDutyIntegrationService = function (serviceName, body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updatePagerDutyIntegrationService(serviceName, body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_205 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_205(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_206 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_206(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updatePagerDutyIntegrationService(rsp); }));
        }));
    };
    return ObservablePagerDutyIntegrationApi;
}());
exports.ObservablePagerDutyIntegrationApi = ObservablePagerDutyIntegrationApi;
var ServiceChecksApi_1 = require("../apis/ServiceChecksApi");
var ObservableServiceChecksApi = /** @class */ (function () {
    function ObservableServiceChecksApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ServiceChecksApi_1.ServiceChecksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ServiceChecksApi_1.ServiceChecksApiResponseProcessor();
    }
    /**
     * Submit a list of Service Checks.  **Note**: A valid API key is required.
     * Submit a Service Check
     * @param body Service Check request body.
     */
    ObservableServiceChecksApi.prototype.submitServiceCheck = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.submitServiceCheck(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_207 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_207(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_208 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_208(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.submitServiceCheck(rsp); }));
        }));
    };
    return ObservableServiceChecksApi;
}());
exports.ObservableServiceChecksApi = ObservableServiceChecksApi;
var ServiceLevelObjectiveCorrectionsApi_1 = require("../apis/ServiceLevelObjectiveCorrectionsApi");
var ObservableServiceLevelObjectiveCorrectionsApi = /** @class */ (function () {
    function ObservableServiceLevelObjectiveCorrectionsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ServiceLevelObjectiveCorrectionsApi_1.ServiceLevelObjectiveCorrectionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ServiceLevelObjectiveCorrectionsApi_1.ServiceLevelObjectiveCorrectionsApiResponseProcessor();
    }
    /**
     * Create an SLO Correction
     * Create an SLO correction
     * @param body Create an SLO Correction
     */
    ObservableServiceLevelObjectiveCorrectionsApi.prototype.createSLOCorrection = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createSLOCorrection(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_209 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_209(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_210 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_210(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createSLOCorrection(rsp); }));
        }));
    };
    /**
     * Permanently delete the specified SLO correction object
     * Delete an SLO correction
     * @param sloCorrectionId The ID of the SLO correction object
     */
    ObservableServiceLevelObjectiveCorrectionsApi.prototype.deleteSLOCorrection = function (sloCorrectionId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteSLOCorrection(sloCorrectionId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_211 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_211(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_212 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_212(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.deleteSLOCorrection(rsp); }));
        }));
    };
    /**
     * Get an SLO correction
     * Get an SLO correction for an SLO
     * @param sloCorrectionId The ID of the SLO correction object
     */
    ObservableServiceLevelObjectiveCorrectionsApi.prototype.getSLOCorrection = function (sloCorrectionId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getSLOCorrection(sloCorrectionId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_213 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_213(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_214 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_214(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getSLOCorrection(rsp); }));
        }));
    };
    /**
     * Get all Service Level Objective corrections
     * Get all SLO corrections
     */
    ObservableServiceLevelObjectiveCorrectionsApi.prototype.listSLOCorrection = function (options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listSLOCorrection(options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_215 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_215(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_216 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_216(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.listSLOCorrection(rsp); }));
        }));
    };
    /**
     * Update the specified SLO correction object object
     * Update an SLO correction
     * @param sloCorrectionId The ID of the SLO correction object
     * @param body The edited SLO correction object.
     */
    ObservableServiceLevelObjectiveCorrectionsApi.prototype.updateSLOCorrection = function (sloCorrectionId, body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateSLOCorrection(sloCorrectionId, body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_217 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_217(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_218 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_218(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updateSLOCorrection(rsp); }));
        }));
    };
    return ObservableServiceLevelObjectiveCorrectionsApi;
}());
exports.ObservableServiceLevelObjectiveCorrectionsApi = ObservableServiceLevelObjectiveCorrectionsApi;
var ServiceLevelObjectivesApi_1 = require("../apis/ServiceLevelObjectivesApi");
var ObservableServiceLevelObjectivesApi = /** @class */ (function () {
    function ObservableServiceLevelObjectivesApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ServiceLevelObjectivesApi_1.ServiceLevelObjectivesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ServiceLevelObjectivesApi_1.ServiceLevelObjectivesApiResponseProcessor();
    }
    /**
     * Check if an SLO can be safely deleted. For example, assure an SLO can be deleted without disrupting a dashboard.
     * Check if SLOs can be safely deleted
     * @param ids A comma separated list of the IDs of the service level objectives objects.
     */
    ObservableServiceLevelObjectivesApi.prototype.checkCanDeleteSLO = function (ids, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.checkCanDeleteSLO(ids, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_219 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_219(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_220 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_220(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.checkCanDeleteSLO(rsp); }));
        }));
    };
    /**
     * Create a service level objective object.
     * Create an SLO object
     * @param body Service level objective request object.
     */
    ObservableServiceLevelObjectivesApi.prototype.createSLO = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createSLO(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_221 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_221(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_222 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_222(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createSLO(rsp); }));
        }));
    };
    /**
     * Permanently delete the specified service level objective object.  If an SLO is used in a dashboard, the `DELETE /v1/slo/` endpoint returns a 409 conflict error because the SLO is referenced in a dashboard.
     * Delete an SLO
     * @param sloId The ID of the service level objective.
     * @param force Delete the monitor even if it&#39;s referenced by other resources (e.g. SLO, composite monitor).
     */
    ObservableServiceLevelObjectivesApi.prototype.deleteSLO = function (sloId, force, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteSLO(sloId, force, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_223 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_223(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_224 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_224(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.deleteSLO(rsp); }));
        }));
    };
    /**
     * Delete (or partially delete) multiple service level objective objects.  This endpoint facilitates deletion of one or more thresholds for one or more service level objective objects. If all thresholds are deleted, the service level objective object is deleted as well.
     * Bulk Delete SLO Timeframes
     * @param body Delete multiple service level objective objects request body.
     */
    ObservableServiceLevelObjectivesApi.prototype.deleteSLOTimeframeInBulk = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteSLOTimeframeInBulk(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_225 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_225(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_226 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_226(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.deleteSLOTimeframeInBulk(rsp); }));
        }));
    };
    /**
     * Get a service level objective object.
     * Get an SLO's details
     * @param sloId The ID of the service level objective object.
     * @param withConfiguredAlertIds Get the IDs of SLO monitors that reference this SLO.
     */
    ObservableServiceLevelObjectivesApi.prototype.getSLO = function (sloId, withConfiguredAlertIds, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getSLO(sloId, withConfiguredAlertIds, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_227 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_227(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_228 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_228(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getSLO(rsp); }));
        }));
    };
    /**
     * Get a specific SLO’s history, regardless of its SLO type.  The detailed history data is structured according to the source data type. For example, metric data is included for event SLOs that use the metric source, and monitor SLO types include the monitor transition history.  **Note:** There are different response formats for event based and time based SLOs. Examples of both are shown.
     * Get an SLO's history
     * @param sloId The ID of the service level objective object.
     * @param fromTs The &#x60;from&#x60; timestamp for the query window in epoch seconds.
     * @param toTs The &#x60;to&#x60; timestamp for the query window in epoch seconds.
     * @param target The SLO target. If &#x60;target&#x60; is passed in, the response will include the error budget that remains.
     */
    ObservableServiceLevelObjectivesApi.prototype.getSLOHistory = function (sloId, fromTs, toTs, target, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getSLOHistory(sloId, fromTs, toTs, target, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_229 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_229(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_230 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_230(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getSLOHistory(rsp); }));
        }));
    };
    /**
     * Get a list of service level objective objects for your organization.
     * Get all SLOs
     * @param ids A comma separated list of the IDs of the service level objectives objects.
     * @param query The query string to filter results based on SLO names.
     * @param tagsQuery The query string to filter results based on a single SLO tag.
     * @param metricsQuery The query string to filter results based on SLO numerator and denominator.
     */
    ObservableServiceLevelObjectivesApi.prototype.listSLOs = function (ids, query, tagsQuery, metricsQuery, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listSLOs(ids, query, tagsQuery, metricsQuery, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_231 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_231(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_232 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_232(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.listSLOs(rsp); }));
        }));
    };
    /**
     * Update the specified service level objective object.
     * Update an SLO
     * @param sloId The ID of the service level objective object.
     * @param body The edited service level objective request object.
     */
    ObservableServiceLevelObjectivesApi.prototype.updateSLO = function (sloId, body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateSLO(sloId, body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_233 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_233(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_234 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_234(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updateSLO(rsp); }));
        }));
    };
    return ObservableServiceLevelObjectivesApi;
}());
exports.ObservableServiceLevelObjectivesApi = ObservableServiceLevelObjectivesApi;
var SlackIntegrationApi_1 = require("../apis/SlackIntegrationApi");
var ObservableSlackIntegrationApi = /** @class */ (function () {
    function ObservableSlackIntegrationApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SlackIntegrationApi_1.SlackIntegrationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SlackIntegrationApi_1.SlackIntegrationApiResponseProcessor();
    }
    /**
     * Add a channel to your Datadog-Slack integration.
     * Create a Slack integration channel
     * @param accountName Your Slack account name.
     * @param body Payload describing Slack channel to be created
     */
    ObservableSlackIntegrationApi.prototype.createSlackIntegrationChannel = function (accountName, body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createSlackIntegrationChannel(accountName, body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_235 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_235(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_236 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_236(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createSlackIntegrationChannel(rsp); }));
        }));
    };
    /**
     * Get a channel configured for your Datadog-Slack integration.
     * Get a Slack integration channel
     * @param accountName Your Slack account name.
     * @param channelName The name of the Slack channel being operated on.
     */
    ObservableSlackIntegrationApi.prototype.getSlackIntegrationChannel = function (accountName, channelName, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getSlackIntegrationChannel(accountName, channelName, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_237 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_237(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_238 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_238(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getSlackIntegrationChannel(rsp); }));
        }));
    };
    /**
     * Get a list of all channels configured for your Datadog-Slack integration.
     * Get all channels in a Slack integration
     * @param accountName Your Slack account name.
     */
    ObservableSlackIntegrationApi.prototype.getSlackIntegrationChannels = function (accountName, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getSlackIntegrationChannels(accountName, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_239 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_239(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_240 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_240(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getSlackIntegrationChannels(rsp); }));
        }));
    };
    /**
     * Remove a channel from your Datadog-Slack integration.
     * Remove a Slack integration channel
     * @param accountName Your Slack account name.
     * @param channelName The name of the Slack channel being operated on.
     */
    ObservableSlackIntegrationApi.prototype.removeSlackIntegrationChannel = function (accountName, channelName, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.removeSlackIntegrationChannel(accountName, channelName, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_241 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_241(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_242 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_242(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.removeSlackIntegrationChannel(rsp); }));
        }));
    };
    /**
     * Update a channel used in your Datadog-Slack integration.
     * Update a Slack integration channel
     * @param accountName Your Slack account name.
     * @param channelName The name of the Slack channel being operated on.
     * @param body Payload describing fields and values to be updated.
     */
    ObservableSlackIntegrationApi.prototype.updateSlackIntegrationChannel = function (accountName, channelName, body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateSlackIntegrationChannel(accountName, channelName, body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_243 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_243(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_244 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_244(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updateSlackIntegrationChannel(rsp); }));
        }));
    };
    return ObservableSlackIntegrationApi;
}());
exports.ObservableSlackIntegrationApi = ObservableSlackIntegrationApi;
var SnapshotsApi_1 = require("../apis/SnapshotsApi");
var ObservableSnapshotsApi = /** @class */ (function () {
    function ObservableSnapshotsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SnapshotsApi_1.SnapshotsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SnapshotsApi_1.SnapshotsApiResponseProcessor();
    }
    /**
     * Take graph snapshots. **Note**: When a snapshot is created, there is some delay before it is available.
     * Take graph snapshots
     * @param start The POSIX timestamp of the start of the query.
     * @param end The POSIX timestamp of the end of the query.
     * @param metricQuery The metric query.
     * @param eventQuery A query that adds event bands to the graph.
     * @param graphDef A JSON document defining the graph. &#x60;graph_def&#x60; can be used instead of &#x60;metric_query&#x60;. The JSON document uses the [grammar defined here](https://docs.datadoghq.com/graphing/graphing_json/#grammar) and should be formatted to a single line then URL encoded.
     * @param title A title for the graph. If no title is specified, the graph does not have a title.
     */
    ObservableSnapshotsApi.prototype.getGraphSnapshot = function (start, end, metricQuery, eventQuery, graphDef, title, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getGraphSnapshot(start, end, metricQuery, eventQuery, graphDef, title, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_245 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_245(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_246 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_246(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getGraphSnapshot(rsp); }));
        }));
    };
    return ObservableSnapshotsApi;
}());
exports.ObservableSnapshotsApi = ObservableSnapshotsApi;
var SyntheticsApi_1 = require("../apis/SyntheticsApi");
var ObservableSyntheticsApi = /** @class */ (function () {
    function ObservableSyntheticsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SyntheticsApi_1.SyntheticsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SyntheticsApi_1.SyntheticsApiResponseProcessor();
    }
    /**
     * Create a Synthetics global variable.
     * Create a global variable
     * @param body Details of the global variable to create.
     */
    ObservableSyntheticsApi.prototype.createGlobalVariable = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createGlobalVariable(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_247 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_247(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_248 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_248(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createGlobalVariable(rsp); }));
        }));
    };
    /**
     * Create a new Synthetics private location.
     * Create a private location
     * @param body Details of the private location to create.
     */
    ObservableSyntheticsApi.prototype.createPrivateLocation = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createPrivateLocation(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_249 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_249(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_250 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_250(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createPrivateLocation(rsp); }));
        }));
    };
    /**
     * Create a Synthetic API test.
     * Create an API test
     * @param body Details of the test to create.
     */
    ObservableSyntheticsApi.prototype.createSyntheticsAPITest = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createSyntheticsAPITest(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_251 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_251(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_252 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_252(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createSyntheticsAPITest(rsp); }));
        }));
    };
    /**
     * Create a Synthetic browser test.
     * Create a browser test
     * @param body Details of the test to create.
     */
    ObservableSyntheticsApi.prototype.createSyntheticsBrowserTest = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createSyntheticsBrowserTest(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_253 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_253(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_254 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_254(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createSyntheticsBrowserTest(rsp); }));
        }));
    };
    /**
     * Delete a Synthetics global variable.
     * Delete a global variable
     * @param variableId The ID of the global variable.
     */
    ObservableSyntheticsApi.prototype.deleteGlobalVariable = function (variableId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteGlobalVariable(variableId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_255 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_255(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_256 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_256(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.deleteGlobalVariable(rsp); }));
        }));
    };
    /**
     * Delete a Synthetics private location.
     * Delete a private location
     * @param locationId The ID of the private location.
     */
    ObservableSyntheticsApi.prototype.deletePrivateLocation = function (locationId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deletePrivateLocation(locationId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_257 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_257(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_258 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_258(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.deletePrivateLocation(rsp); }));
        }));
    };
    /**
     * Delete multiple Synthetic tests by ID.
     * Delete tests
     * @param body Public ID list of the Synthetic tests to be deleted.
     */
    ObservableSyntheticsApi.prototype.deleteTests = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteTests(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_259 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_259(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_260 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_260(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.deleteTests(rsp); }));
        }));
    };
    /**
     * Edit a Synthetics global variable.
     * Edit a global variable
     * @param variableId The ID of the global variable.
     * @param body Details of the global variable to update.
     */
    ObservableSyntheticsApi.prototype.editGlobalVariable = function (variableId, body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.editGlobalVariable(variableId, body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_261 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_261(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_262 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_262(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.editGlobalVariable(rsp); }));
        }));
    };
    /**
     * Get the detailed configuration associated with a Synthetic API test.
     * Get an API test
     * @param publicId The public ID of the test to get details from.
     */
    ObservableSyntheticsApi.prototype.getAPITest = function (publicId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getAPITest(publicId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_263 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_263(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_264 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_264(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getAPITest(rsp); }));
        }));
    };
    /**
     * Get the last 50 test results summaries for a given Synthetics API test.
     * Get an API test's latest results summaries
     * @param publicId The public ID of the test for which to search results for.
     * @param fromTs Timestamp from which to start querying results.
     * @param toTs Timestamp up to which to query results.
     * @param probeDc Locations for which to query results.
     */
    ObservableSyntheticsApi.prototype.getAPITestLatestResults = function (publicId, fromTs, toTs, probeDc, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getAPITestLatestResults(publicId, fromTs, toTs, probeDc, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_265 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_265(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_266 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_266(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getAPITestLatestResults(rsp); }));
        }));
    };
    /**
     * Get a specific full result from a given (API) Synthetic test.
     * Get an API test result
     * @param publicId The public ID of the API test to which the target result belongs.
     * @param resultId The ID of the result to get.
     */
    ObservableSyntheticsApi.prototype.getAPITestResult = function (publicId, resultId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getAPITestResult(publicId, resultId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_267 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_267(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_268 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_268(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getAPITestResult(rsp); }));
        }));
    };
    /**
     * Get the detailed configuration (including steps) associated with a Synthetic browser test.
     * Get a browser test
     * @param publicId The public ID of the test to get details from.
     */
    ObservableSyntheticsApi.prototype.getBrowserTest = function (publicId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getBrowserTest(publicId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_269 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_269(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_270 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_270(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getBrowserTest(rsp); }));
        }));
    };
    /**
     * Get the last 50 test results summaries for a given Synthetics Browser test.
     * Get a browser test's latest results summaries
     * @param publicId The public ID of the browser test for which to search results for.
     * @param fromTs Timestamp from which to start querying results.
     * @param toTs Timestamp up to which to query results.
     * @param probeDc Locations for which to query results.
     */
    ObservableSyntheticsApi.prototype.getBrowserTestLatestResults = function (publicId, fromTs, toTs, probeDc, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getBrowserTestLatestResults(publicId, fromTs, toTs, probeDc, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_271 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_271(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_272 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_272(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getBrowserTestLatestResults(rsp); }));
        }));
    };
    /**
     * Get a specific full result from a given (browser) Synthetic test.
     * Get a browser test result
     * @param publicId The public ID of the browser test to which the target result belongs.
     * @param resultId The ID of the result to get.
     */
    ObservableSyntheticsApi.prototype.getBrowserTestResult = function (publicId, resultId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getBrowserTestResult(publicId, resultId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_273 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_273(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_274 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_274(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getBrowserTestResult(rsp); }));
        }));
    };
    /**
     * Get the detailed configuration of a global variable.
     * Get a global variable
     * @param variableId The ID of the global variable.
     */
    ObservableSyntheticsApi.prototype.getGlobalVariable = function (variableId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getGlobalVariable(variableId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_275 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_275(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_276 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_276(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getGlobalVariable(rsp); }));
        }));
    };
    /**
     * Get a Synthetics private location.
     * Get a private location
     * @param locationId The ID of the private location.
     */
    ObservableSyntheticsApi.prototype.getPrivateLocation = function (locationId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getPrivateLocation(locationId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_277 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_277(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_278 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_278(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getPrivateLocation(rsp); }));
        }));
    };
    /**
     * Get the detailed configuration associated with a Synthetics test.
     * Get a test configuration
     * @param publicId The public ID of the test to get details from.
     */
    ObservableSyntheticsApi.prototype.getTest = function (publicId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getTest(publicId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_279 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_279(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_280 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_280(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getTest(rsp); }));
        }));
    };
    /**
     * Get the list of public and private locations available for Synthetic tests. No arguments required.
     * Get all locations (public and private)
     */
    ObservableSyntheticsApi.prototype.listLocations = function (options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listLocations(options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_281 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_281(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_282 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_282(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.listLocations(rsp); }));
        }));
    };
    /**
     * Get the list of all Synthetic tests.
     * Get the list of all tests
     */
    ObservableSyntheticsApi.prototype.listTests = function (options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listTests(options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_283 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_283(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_284 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_284(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.listTests(rsp); }));
        }));
    };
    /**
     * Trigger a set of Synthetics tests for continuous integration.
     * Trigger tests from CI/CD pipelines
     * @param body Details of the test to trigger.
     */
    ObservableSyntheticsApi.prototype.triggerCITests = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.triggerCITests(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_285 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_285(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_286 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_286(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.triggerCITests(rsp); }));
        }));
    };
    /**
     * Edit the configuration of a Synthetic API test.
     * Edit an API test
     * @param publicId The public ID of the test to get details from.
     * @param body New test details to be saved.
     */
    ObservableSyntheticsApi.prototype.updateAPITest = function (publicId, body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateAPITest(publicId, body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_287 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_287(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_288 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_288(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updateAPITest(rsp); }));
        }));
    };
    /**
     * Edit the configuration of a Synthetic browser test.
     * Edit a browser test
     * @param publicId The public ID of the test to get details from.
     * @param body New test details to be saved.
     */
    ObservableSyntheticsApi.prototype.updateBrowserTest = function (publicId, body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateBrowserTest(publicId, body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_289 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_289(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_290 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_290(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updateBrowserTest(rsp); }));
        }));
    };
    /**
     * Edit a Synthetics private location.
     * Edit a private location
     * @param locationId The ID of the private location.
     * @param body Details of the private location to be updated.
     */
    ObservableSyntheticsApi.prototype.updatePrivateLocation = function (locationId, body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updatePrivateLocation(locationId, body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_291 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_291(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_292 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_292(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updatePrivateLocation(rsp); }));
        }));
    };
    /**
     * Pause or start a Synthetics test by changing the status.
     * Pause or start a test
     * @param publicId The public ID of the Synthetic test to update.
     * @param body Status to set the given Synthetic test to.
     */
    ObservableSyntheticsApi.prototype.updateTestPauseStatus = function (publicId, body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateTestPauseStatus(publicId, body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_293 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_293(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_294 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_294(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updateTestPauseStatus(rsp); }));
        }));
    };
    return ObservableSyntheticsApi;
}());
exports.ObservableSyntheticsApi = ObservableSyntheticsApi;
var TagsApi_1 = require("../apis/TagsApi");
var ObservableTagsApi = /** @class */ (function () {
    function ObservableTagsApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TagsApi_1.TagsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TagsApi_1.TagsApiResponseProcessor();
    }
    /**
     * This endpoint allows you to add new tags to a host, optionally specifying where these tags come from.
     * Add tags to a host
     * @param hostName This endpoint allows you to add new tags to a host, optionally specifying where the tags came from.
     * @param body Update host tags request body.
     * @param source The source of the tags. [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value).
     */
    ObservableTagsApi.prototype.createHostTags = function (hostName, body, source, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createHostTags(hostName, body, source, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_295 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_295(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_296 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_296(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createHostTags(rsp); }));
        }));
    };
    /**
     * This endpoint allows you to remove all user-assigned tags for a single host.
     * Remove host tags
     * @param hostName This endpoint allows you to remove all user-assigned tags for a single host.
     * @param source The source of the tags (e.g. chef, puppet). [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value).
     */
    ObservableTagsApi.prototype.deleteHostTags = function (hostName, source, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.deleteHostTags(hostName, source, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_297 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_297(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_298 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_298(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.deleteHostTags(rsp); }));
        }));
    };
    /**
     * Return the list of tags that apply to a given host.
     * Get host tags
     * @param hostName When specified, filters list of tags to those tags with the specified source.
     * @param source Source to filter.
     */
    ObservableTagsApi.prototype.getHostTags = function (hostName, source, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getHostTags(hostName, source, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_299 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_299(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_300 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_300(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getHostTags(rsp); }));
        }));
    };
    /**
     * Return a mapping of tags to hosts for your whole infrastructure.
     * Get Tags
     * @param source When specified, filters host list to those tags with the specified source.
     */
    ObservableTagsApi.prototype.listHostTags = function (source, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listHostTags(source, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_301 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_301(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_302 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_302(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.listHostTags(rsp); }));
        }));
    };
    /**
     * This endpoint allows you to update/replace all tags in an integration source with those supplied in the request.
     * Update host tags
     * @param hostName This endpoint allows you to update/replace all in an integration source with those supplied in the request.
     * @param body Add tags to host
     * @param source The source of the tags (e.g. chef, puppet). [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value)
     */
    ObservableTagsApi.prototype.updateHostTags = function (hostName, body, source, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateHostTags(hostName, body, source, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_303 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_303(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_304 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_304(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updateHostTags(rsp); }));
        }));
    };
    return ObservableTagsApi;
}());
exports.ObservableTagsApi = ObservableTagsApi;
var UsageMeteringApi_1 = require("../apis/UsageMeteringApi");
var ObservableUsageMeteringApi = /** @class */ (function () {
    function ObservableUsageMeteringApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UsageMeteringApi_1.UsageMeteringApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsageMeteringApi_1.UsageMeteringApiResponseProcessor();
    }
    /**
     * Get daily custom reports.
     * Get the list of available daily custom reports
     * @param pageSize The number of files to return in the response. &#x60;[default&#x3D;60]&#x60;.
     * @param pageNumber The identifier of the first page to return. This parameter is used for the pagination feature &#x60;[default&#x3D;0]&#x60;.
     * @param sortDir The direction to sort by: &#x60;[desc, asc]&#x60;.
     * @param sort The field to sort by: &#x60;[computed_on, size, start_date, end_date]&#x60;.
     */
    ObservableUsageMeteringApi.prototype.getDailyCustomReports = function (pageSize, pageNumber, sortDir, sort, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getDailyCustomReports(pageSize, pageNumber, sortDir, sort, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_305 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_305(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_306 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_306(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getDailyCustomReports(rsp); }));
        }));
    };
    /**
     * Get hourly usage for incident management.
     * Get hourly usage for incident management
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    ObservableUsageMeteringApi.prototype.getIncidentManagement = function (startHr, endHr, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getIncidentManagement(startHr, endHr, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_307 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_307(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_308 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_308(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getIncidentManagement(rsp); }));
        }));
    };
    /**
     * Get hourly usage for ingested spans.
     * Get hourly usage for ingested spans
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    ObservableUsageMeteringApi.prototype.getIngestedSpans = function (startHr, endHr, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getIngestedSpans(startHr, endHr, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_309 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_309(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_310 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_310(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getIngestedSpans(rsp); }));
        }));
    };
    /**
     * Get monthly custom reports.
     * Get the list of available monthly custom reports
     * @param pageSize The number of files to return in the response &#x60;[default&#x3D;60].&#x60;
     * @param pageNumber The identifier of the first page to return. This parameter is used for the pagination feature &#x60;[default&#x3D;0]&#x60;.
     * @param sortDir The direction to sort by: &#x60;[desc, asc]&#x60;.
     * @param sort The field to sort by: &#x60;[computed_on, size, start_date, end_date]&#x60;.
     */
    ObservableUsageMeteringApi.prototype.getMonthlyCustomReports = function (pageSize, pageNumber, sortDir, sort, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getMonthlyCustomReports(pageSize, pageNumber, sortDir, sort, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_311 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_311(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_312 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_312(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getMonthlyCustomReports(rsp); }));
        }));
    };
    /**
     * Get specified daily custom reports.
     * Get specified daily custom reports
     * @param reportId The specified ID to search results for.
     */
    ObservableUsageMeteringApi.prototype.getSpecifiedDailyCustomReports = function (reportId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getSpecifiedDailyCustomReports(reportId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_313 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_313(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_314 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_314(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getSpecifiedDailyCustomReports(rsp); }));
        }));
    };
    /**
     * Get specified monthly custom reports.
     * Get specified monthly custom reports
     * @param reportId The specified ID to search results for.
     */
    ObservableUsageMeteringApi.prototype.getSpecifiedMonthlyCustomReports = function (reportId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getSpecifiedMonthlyCustomReports(reportId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_315 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_315(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_316 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_316(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getSpecifiedMonthlyCustomReports(rsp); }));
        }));
    };
    /**
     * Get hourly usage for tracing without limits.  **Note** This endpoint has been renamed to `/api/v1/usage/ingested-spans`.
     * Get hourly usage for tracing without limits
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    ObservableUsageMeteringApi.prototype.getTracingWithoutLimits = function (startHr, endHr, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getTracingWithoutLimits(startHr, endHr, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_317 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_317(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_318 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_318(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getTracingWithoutLimits(rsp); }));
        }));
    };
    /**
     * Get hourly usage for analyzed logs (Security Monitoring).
     * Get hourly usage for analyzed logs
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    ObservableUsageMeteringApi.prototype.getUsageAnalyzedLogs = function (startHr, endHr, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUsageAnalyzedLogs(startHr, endHr, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_319 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_319(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_320 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_320(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getUsageAnalyzedLogs(rsp); }));
        }));
    };
    /**
     * Get Usage Attribution.
     * Get Usage Attribution
     * @param startMonth Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage beginning in this month. Maximum of 15 months ago.
     * @param fields Comma-separated list of usage types to return, or &#x60;*&#x60; for all usage types.
     * @param endMonth Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage ending this month.
     * @param sortDirection The direction to sort by: &#x60;[desc, asc]&#x60;.
     * @param sortName The field to sort by.
     */
    ObservableUsageMeteringApi.prototype.getUsageAttribution = function (startMonth, fields, endMonth, sortDirection, sortName, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUsageAttribution(startMonth, fields, endMonth, sortDirection, sortName, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_321 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_321(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_322 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_322(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getUsageAttribution(rsp); }));
        }));
    };
    /**
     * Get billable usage across your account.
     * Get billable usage across your account
     * @param month Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage starting this month.
     */
    ObservableUsageMeteringApi.prototype.getUsageBillableSummary = function (month, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUsageBillableSummary(month, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_323 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_323(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_324 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_324(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getUsageBillableSummary(rsp); }));
        }));
    };
    /**
     * Get hourly usage for Compliance Monitoring.
     * Get hourly usage for Compliance Monitoring
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    ObservableUsageMeteringApi.prototype.getUsageComplianceMonitoring = function (startHr, endHr, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUsageComplianceMonitoring(startHr, endHr, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_325 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_325(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_326 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_326(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getUsageComplianceMonitoring(rsp); }));
        }));
    };
    /**
     * Get hourly usage for [Fargate](https://docs.datadoghq.com/integrations/ecs_fargate/).
     * Get hourly usage for Fargate
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    ObservableUsageMeteringApi.prototype.getUsageFargate = function (startHr, endHr, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUsageFargate(startHr, endHr, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_327 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_327(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_328 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_328(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getUsageFargate(rsp); }));
        }));
    };
    /**
     * Get hourly usage for hosts and containers.
     * Get hourly usage for hosts and containers
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    ObservableUsageMeteringApi.prototype.getUsageHosts = function (startHr, endHr, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUsageHosts(startHr, endHr, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_329 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_329(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_330 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_330(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getUsageHosts(rsp); }));
        }));
    };
    /**
     * Get hourly usage for indexed spans.
     * Get hourly usage for indexed spans
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    ObservableUsageMeteringApi.prototype.getUsageIndexedSpans = function (startHr, endHr, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUsageIndexedSpans(startHr, endHr, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_331 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_331(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_332 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_332(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getUsageIndexedSpans(rsp); }));
        }));
    };
    /**
     * Get hourly usage for IoT.
     * Get hourly usage for IoT
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    ObservableUsageMeteringApi.prototype.getUsageInternetOfThings = function (startHr, endHr, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUsageInternetOfThings(startHr, endHr, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_333 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_333(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_334 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_334(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getUsageInternetOfThings(rsp); }));
        }));
    };
    /**
     * Get hourly usage for lambda.
     * Get hourly usage for Lambda
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    ObservableUsageMeteringApi.prototype.getUsageLambda = function (startHr, endHr, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUsageLambda(startHr, endHr, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_335 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_335(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_336 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_336(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getUsageLambda(rsp); }));
        }));
    };
    /**
     * Get hourly usage for logs.
     * Get hourly usage for Logs
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    ObservableUsageMeteringApi.prototype.getUsageLogs = function (startHr, endHr, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUsageLogs(startHr, endHr, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_337 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_337(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_338 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_338(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getUsageLogs(rsp); }));
        }));
    };
    /**
     * Get hourly usage for logs by index.
     * Get hourly usage for Logs by Index
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @param indexName Comma-separated list of log index names.
     */
    ObservableUsageMeteringApi.prototype.getUsageLogsByIndex = function (startHr, endHr, indexName, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUsageLogsByIndex(startHr, endHr, indexName, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_339 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_339(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_340 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_340(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getUsageLogsByIndex(rsp); }));
        }));
    };
    /**
     * Get hourly usage for indexed logs by retention period.
     * Get hourly logs usage by retention
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    ObservableUsageMeteringApi.prototype.getUsageLogsByRetention = function (startHr, endHr, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUsageLogsByRetention(startHr, endHr, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_341 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_341(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_342 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_342(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getUsageLogsByRetention(rsp); }));
        }));
    };
    /**
     * Get hourly usage for network flows.
     * Get hourly usage for Network Flows
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    ObservableUsageMeteringApi.prototype.getUsageNetworkFlows = function (startHr, endHr, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUsageNetworkFlows(startHr, endHr, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_343 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_343(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_344 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_344(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getUsageNetworkFlows(rsp); }));
        }));
    };
    /**
     * Get hourly usage for network hosts.
     * Get hourly usage for Network Hosts
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    ObservableUsageMeteringApi.prototype.getUsageNetworkHosts = function (startHr, endHr, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUsageNetworkHosts(startHr, endHr, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_345 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_345(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_346 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_346(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getUsageNetworkHosts(rsp); }));
        }));
    };
    /**
     * Get hourly usage for profiled hosts.
     * Get hourly usage for profiled hosts
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    ObservableUsageMeteringApi.prototype.getUsageProfiling = function (startHr, endHr, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUsageProfiling(startHr, endHr, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_347 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_347(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_348 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_348(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getUsageProfiling(rsp); }));
        }));
    };
    /**
     * Get hourly usage for [RUM](https://docs.datadoghq.com/real_user_monitoring/) Sessions.
     * Get hourly usage for RUM Sessions
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @param type RUM type: &#x60;[browser, mobile]&#x60;. Defaults to &#x60;browser&#x60;.
     */
    ObservableUsageMeteringApi.prototype.getUsageRumSessions = function (startHr, endHr, type, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUsageRumSessions(startHr, endHr, type, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_349 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_349(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_350 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_350(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getUsageRumSessions(rsp); }));
        }));
    };
    /**
     * Get hourly usage for SNMP devices.
     * Get hourly usage for SNMP devices
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    ObservableUsageMeteringApi.prototype.getUsageSNMP = function (startHr, endHr, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUsageSNMP(startHr, endHr, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_351 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_351(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_352 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_352(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getUsageSNMP(rsp); }));
        }));
    };
    /**
     * Get usage across your multi-org account. You must have the multi-org feature enabled.
     * Get usage across your multi-org account
     * @param startMonth Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage beginning in this month. Maximum of 15 months ago.
     * @param endMonth Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage ending this month.
     * @param includeOrgDetails Include usage summaries for each sub-org.
     */
    ObservableUsageMeteringApi.prototype.getUsageSummary = function (startMonth, endMonth, includeOrgDetails, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUsageSummary(startMonth, endMonth, includeOrgDetails, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_353 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_353(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_354 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_354(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getUsageSummary(rsp); }));
        }));
    };
    /**
     * Get hourly usage for [Synthetics checks](https://docs.datadoghq.com/synthetics/).
     * Get hourly usage for Synthetics Checks
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    ObservableUsageMeteringApi.prototype.getUsageSynthetics = function (startHr, endHr, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUsageSynthetics(startHr, endHr, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_355 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_355(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_356 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_356(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getUsageSynthetics(rsp); }));
        }));
    };
    /**
     * Get hourly usage for [synthetics API checks](https://docs.datadoghq.com/synthetics/).
     * Get hourly usage for Synthetics API Checks
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    ObservableUsageMeteringApi.prototype.getUsageSyntheticsAPI = function (startHr, endHr, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUsageSyntheticsAPI(startHr, endHr, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_357 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_357(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_358 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_358(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getUsageSyntheticsAPI(rsp); }));
        }));
    };
    /**
     * Get hourly usage for synthetics browser checks.
     * Get hourly usage for Synthetics Browser Checks
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    ObservableUsageMeteringApi.prototype.getUsageSyntheticsBrowser = function (startHr, endHr, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUsageSyntheticsBrowser(startHr, endHr, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_359 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_359(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_360 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_360(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getUsageSyntheticsBrowser(rsp); }));
        }));
    };
    /**
     * Get hourly usage for [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/).
     * Get hourly usage for custom metrics
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    ObservableUsageMeteringApi.prototype.getUsageTimeseries = function (startHr, endHr, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUsageTimeseries(startHr, endHr, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_361 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_361(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_362 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_362(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getUsageTimeseries(rsp); }));
        }));
    };
    /**
     * Get all [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/) by hourly average. Use the month parameter to get a month-to-date data resolution or use the day parameter to get a daily resolution. One of the two is required, and only one of the two is allowed.
     * Get all custom metrics by hourly average
     * @param month Datetime in ISO-8601 format, UTC, precise to month: [YYYY-MM] for usage beginning at this hour. (Either month or day should be specified, but not both)
     * @param day Datetime in ISO-8601 format, UTC, precise to day: [YYYY-MM-DD] for usage beginning at this hour. (Either month or day should be specified, but not both)
     * @param names Comma-separated list of metric names.
     * @param limit Maximum number of results to return (between 1 and 5000) - defaults to 500 results if limit not specified.
     * @param nextRecordId List following results with a next_record_id provided in the previous query.
     */
    ObservableUsageMeteringApi.prototype.getUsageTopAvgMetrics = function (month, day, names, limit, nextRecordId, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUsageTopAvgMetrics(month, day, names, limit, nextRecordId, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_363 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_363(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_364 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_364(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getUsageTopAvgMetrics(rsp); }));
        }));
    };
    /**
     * Get hourly usage for trace search.  **Note** This endpoint has been renamed to `/api/v1/usage/indexed-spans`.
     * Get hourly usage for Trace Search
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    ObservableUsageMeteringApi.prototype.getUsageTrace = function (startHr, endHr, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUsageTrace(startHr, endHr, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_365 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_365(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_366 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_366(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getUsageTrace(rsp); }));
        }));
    };
    return ObservableUsageMeteringApi;
}());
exports.ObservableUsageMeteringApi = ObservableUsageMeteringApi;
var UsersApi_1 = require("../apis/UsersApi");
var ObservableUsersApi = /** @class */ (function () {
    function ObservableUsersApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UsersApi_1.UsersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsersApi_1.UsersApiResponseProcessor();
    }
    /**
     * Create a user for your organization.  **Note**: Users can only be created with the admin access role if application keys belong to administrators.
     * Create a user
     * @param body User object that needs to be created.
     */
    ObservableUsersApi.prototype.createUser = function (body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.createUser(body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_367 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_367(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_368 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_368(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.createUser(rsp); }));
        }));
    };
    /**
     * Delete a user from an organization.  **Note**: This endpoint can only be used with application keys belonging to administrators.
     * Disable a user
     * @param userHandle The handle of the user.
     */
    ObservableUsersApi.prototype.disableUser = function (userHandle, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.disableUser(userHandle, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_369 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_369(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_370 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_370(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.disableUser(rsp); }));
        }));
    };
    /**
     * Get a user's details.
     * Get user details
     * @param userHandle The ID of the user.
     */
    ObservableUsersApi.prototype.getUser = function (userHandle, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getUser(userHandle, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_371 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_371(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_372 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_372(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.getUser(rsp); }));
        }));
    };
    /**
     * List all users for your organization.
     * List all users
     */
    ObservableUsersApi.prototype.listUsers = function (options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listUsers(options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_373 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_373(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_374 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_374(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.listUsers(rsp); }));
        }));
    };
    /**
     * Update a user information.  **Note**: It can only be used with application keys belonging to administrators.
     * Update a user
     * @param userHandle The ID of the user.
     * @param body Description of the update.
     */
    ObservableUsersApi.prototype.updateUser = function (userHandle, body, options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateUser(userHandle, body, options);
        // build promise chain
        var middlewarePreObservable = rxjsStub_1.from(requestContextPromise);
        var _loop_375 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_375(middleware);
        }
        return middlewarePreObservable.pipe(rxjsStub_2.mergeMap(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe(rxjsStub_2.mergeMap(function (response) {
            var middlewarePostObservable = rxjsStub_1.of(response);
            var _loop_376 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe(rxjsStub_2.mergeMap(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_376(middleware);
            }
            return middlewarePostObservable.pipe(rxjsStub_2.map(function (rsp) { return _this.responseProcessor.updateUser(rsp); }));
        }));
    };
    return ObservableUsersApi;
}());
exports.ObservableUsersApi = ObservableUsersApi;
//# sourceMappingURL=ObservableAPI.js.map