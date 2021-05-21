"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectUsersApi = exports.ObjectUsageMeteringApi = exports.ObjectTagsApi = exports.ObjectSyntheticsApi = exports.ObjectSnapshotsApi = exports.ObjectSlackIntegrationApi = exports.ObjectServiceLevelObjectivesApi = exports.ObjectServiceLevelObjectiveCorrectionsApi = exports.ObjectServiceChecksApi = exports.ObjectPagerDutyIntegrationApi = exports.ObjectOrganizationsApi = exports.ObjectNotebooksApi = exports.ObjectMonitorsApi = exports.ObjectMetricsApi = exports.ObjectLogsPipelinesApi = exports.ObjectLogsIndexesApi = exports.ObjectLogsApi = exports.ObjectKeyManagementApi = exports.ObjectIPRangesApi = exports.ObjectHostsApi = exports.ObjectGCPIntegrationApi = exports.ObjectEventsApi = exports.ObjectDowntimesApi = exports.ObjectDashboardsApi = exports.ObjectDashboardListsApi = exports.ObjectAzureIntegrationApi = exports.ObjectAuthenticationApi = exports.ObjectAWSLogsIntegrationApi = exports.ObjectAWSIntegrationApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var ObjectAWSIntegrationApi = /** @class */ (function () {
    function ObjectAWSIntegrationApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAWSIntegrationApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Create a Datadog-Amazon Web Services integration. Using the `POST` method updates your integration configuration by adding your new configuration to the existing one in your Datadog organization. A unique AWS Account ID for role based authentication.
     * Create an AWS integration
     * @param param the request object
     */
    ObjectAWSIntegrationApi.prototype.createAWSAccount = function (param, options) {
        return this.api.createAWSAccount(param.body, options).toPromise();
    };
    /**
     * Set an AWS tag filter.
     * Set an AWS tag filter
     * @param param the request object
     */
    ObjectAWSIntegrationApi.prototype.createAWSTagFilter = function (param, options) {
        return this.api.createAWSTagFilter(param.body, options).toPromise();
    };
    /**
     * Generate a new AWS external ID for a given AWS account ID and role name pair.
     * Generate a new external ID
     * @param param the request object
     */
    ObjectAWSIntegrationApi.prototype.createNewAWSExternalID = function (param, options) {
        return this.api.createNewAWSExternalID(param.body, options).toPromise();
    };
    /**
     * Delete a Datadog-AWS integration matching the specified `account_id` and `role_name parameters`.
     * Delete an AWS integration
     * @param param the request object
     */
    ObjectAWSIntegrationApi.prototype.deleteAWSAccount = function (param, options) {
        return this.api.deleteAWSAccount(param.body, options).toPromise();
    };
    /**
     * Delete a tag filtering entry.
     * Delete a tag filtering entry
     * @param param the request object
     */
    ObjectAWSIntegrationApi.prototype.deleteAWSTagFilter = function (param, options) {
        return this.api.deleteAWSTagFilter(param.body, options).toPromise();
    };
    /**
     * List all Datadog-AWS integrations available in your Datadog organization.
     * List all AWS integrations
     * @param param the request object
     */
    ObjectAWSIntegrationApi.prototype.listAWSAccounts = function (param, options) {
        return this.api.listAWSAccounts(param.accountId, param.roleName, param.accessKeyId, options).toPromise();
    };
    /**
     * Get all AWS tag filters.
     * Get all AWS tag filters
     * @param param the request object
     */
    ObjectAWSIntegrationApi.prototype.listAWSTagFilters = function (param, options) {
        return this.api.listAWSTagFilters(param.accountId, options).toPromise();
    };
    /**
     * List all namespace rules for a given Datadog-AWS integration. This endpoint takes no arguments.
     * List namespace rules
     * @param param the request object
     */
    ObjectAWSIntegrationApi.prototype.listAvailableAWSNamespaces = function (param, options) {
        return this.api.listAvailableAWSNamespaces(options).toPromise();
    };
    /**
     * Update a Datadog-Amazon Web Services integration.
     * Update an AWS integration
     * @param param the request object
     */
    ObjectAWSIntegrationApi.prototype.updateAWSAccount = function (param, options) {
        return this.api.updateAWSAccount(param.body, param.accountId, param.roleName, param.accessKeyId, options).toPromise();
    };
    return ObjectAWSIntegrationApi;
}());
exports.ObjectAWSIntegrationApi = ObjectAWSIntegrationApi;
var ObservableAPI_2 = require("./ObservableAPI");
var ObjectAWSLogsIntegrationApi = /** @class */ (function () {
    function ObjectAWSLogsIntegrationApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableAWSLogsIntegrationApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Test if permissions are present to add a log-forwarding triggers for the given services and AWS account. The input is the same as for Enable an AWS service log collection. Subsequent requests will always repeat the above, so this endpoint can be polled intermittently instead of blocking.  - Returns a status of 'created' when it's checking if the Lambda exists in the account. - Returns a status of 'waiting' while checking. - Returns a status of 'checked and ok' if the Lambda exists. - Returns a status of 'error' if the Lambda does not exist.
     * Check that an AWS Lambda Function exists
     * @param param the request object
     */
    ObjectAWSLogsIntegrationApi.prototype.checkAWSLogsLambdaAsync = function (param, options) {
        return this.api.checkAWSLogsLambdaAsync(param.body, options).toPromise();
    };
    /**
     * Test if permissions are present to add log-forwarding triggers for the given services and AWS account. Input is the same as for `EnableAWSLogServices`. Done async, so can be repeatedly polled in a non-blocking fashion until the async request completes.  - Returns a status of `created` when it's checking if the permissions exists   in the AWS account. - Returns a status of `waiting` while checking. - Returns a status of `checked and ok` if the Lambda exists. - Returns a status of `error` if the Lambda does not exist.
     * Check permissions for log services
     * @param param the request object
     */
    ObjectAWSLogsIntegrationApi.prototype.checkAWSLogsServicesAsync = function (param, options) {
        return this.api.checkAWSLogsServicesAsync(param.body, options).toPromise();
    };
    /**
     * Attach the Lambda ARN of the Lambda created for the Datadog-AWS log collection to your AWS account ID to enable log collection.
     * Add AWS Log Lambda ARN
     * @param param the request object
     */
    ObjectAWSLogsIntegrationApi.prototype.createAWSLambdaARN = function (param, options) {
        return this.api.createAWSLambdaARN(param.body, options).toPromise();
    };
    /**
     * Delete a Datadog-AWS logs configuration by removing the specific Lambda ARN associated with a given AWS account.
     * Delete an AWS Logs integration
     * @param param the request object
     */
    ObjectAWSLogsIntegrationApi.prototype.deleteAWSLambdaARN = function (param, options) {
        return this.api.deleteAWSLambdaARN(param.body, options).toPromise();
    };
    /**
     * Enable automatic log collection for a list of services. This should be run after running `CreateAWSLambdaARN` to save the configuration.
     * Enable an AWS Logs integration
     * @param param the request object
     */
    ObjectAWSLogsIntegrationApi.prototype.enableAWSLogServices = function (param, options) {
        return this.api.enableAWSLogServices(param.body, options).toPromise();
    };
    /**
     * List all Datadog-AWS Logs integrations configured in your Datadog account.
     * List all AWS Logs integrations
     * @param param the request object
     */
    ObjectAWSLogsIntegrationApi.prototype.listAWSLogsIntegrations = function (param, options) {
        return this.api.listAWSLogsIntegrations(options).toPromise();
    };
    /**
     * Get the list of current AWS services that Datadog offers automatic log collection. Use returned service IDs with the services parameter for the Enable an AWS service log collection API endpoint.
     * Get list of AWS log ready services
     * @param param the request object
     */
    ObjectAWSLogsIntegrationApi.prototype.listAWSLogsServices = function (param, options) {
        return this.api.listAWSLogsServices(options).toPromise();
    };
    return ObjectAWSLogsIntegrationApi;
}());
exports.ObjectAWSLogsIntegrationApi = ObjectAWSLogsIntegrationApi;
var ObservableAPI_3 = require("./ObservableAPI");
var ObjectAuthenticationApi = /** @class */ (function () {
    function ObjectAuthenticationApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableAuthenticationApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Check if the API key (not the APP key) is valid. If invalid, a 403 is returned.
     * Validate API key
     * @param param the request object
     */
    ObjectAuthenticationApi.prototype.validate = function (param, options) {
        return this.api.validate(options).toPromise();
    };
    return ObjectAuthenticationApi;
}());
exports.ObjectAuthenticationApi = ObjectAuthenticationApi;
var ObservableAPI_4 = require("./ObservableAPI");
var ObjectAzureIntegrationApi = /** @class */ (function () {
    function ObjectAzureIntegrationApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableAzureIntegrationApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Create a Datadog-Azure integration.  Using the `POST` method updates your integration configuration by adding your new configuration to the existing one in your Datadog organization.  Using the `PUT` method updates your integration configuration by replacing your current configuration with the new one sent to your Datadog organization.
     * Create an Azure integration
     * @param param the request object
     */
    ObjectAzureIntegrationApi.prototype.createAzureIntegration = function (param, options) {
        return this.api.createAzureIntegration(param.body, options).toPromise();
    };
    /**
     * Delete a given Datadog-Azure integration from your Datadog account.
     * Delete an Azure integration
     * @param param the request object
     */
    ObjectAzureIntegrationApi.prototype.deleteAzureIntegration = function (param, options) {
        return this.api.deleteAzureIntegration(param.body, options).toPromise();
    };
    /**
     * List all Datadog-Azure integrations configured in your Datadog account.
     * List all Azure integrations
     * @param param the request object
     */
    ObjectAzureIntegrationApi.prototype.listAzureIntegration = function (param, options) {
        return this.api.listAzureIntegration(options).toPromise();
    };
    /**
     * Update the defined list of host filters for a given Datadog-Azure integration.
     * Update Azure integration host filters
     * @param param the request object
     */
    ObjectAzureIntegrationApi.prototype.updateAzureHostFilters = function (param, options) {
        return this.api.updateAzureHostFilters(param.body, options).toPromise();
    };
    /**
     * Update a Datadog-Azure integration. Requires an existing `tenant_name` and `client_id`. Any other fields supplied will overwrite existing values. To overwrite `tenant_name` or `client_id`, use `new_tenant_name` and `new_client_id`. To leave a field unchanged, do not supply that field in the payload.
     * Update an Azure integration
     * @param param the request object
     */
    ObjectAzureIntegrationApi.prototype.updateAzureIntegration = function (param, options) {
        return this.api.updateAzureIntegration(param.body, options).toPromise();
    };
    return ObjectAzureIntegrationApi;
}());
exports.ObjectAzureIntegrationApi = ObjectAzureIntegrationApi;
var ObservableAPI_5 = require("./ObservableAPI");
var ObjectDashboardListsApi = /** @class */ (function () {
    function ObjectDashboardListsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableDashboardListsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Create an empty dashboard list.
     * Create a dashboard list
     * @param param the request object
     */
    ObjectDashboardListsApi.prototype.createDashboardList = function (param, options) {
        return this.api.createDashboardList(param.body, options).toPromise();
    };
    /**
     * Delete a dashboard list.
     * Delete a dashboard list
     * @param param the request object
     */
    ObjectDashboardListsApi.prototype.deleteDashboardList = function (param, options) {
        return this.api.deleteDashboardList(param.listId, options).toPromise();
    };
    /**
     * Fetch an existing dashboard list's definition.
     * Get a dashboard list
     * @param param the request object
     */
    ObjectDashboardListsApi.prototype.getDashboardList = function (param, options) {
        return this.api.getDashboardList(param.listId, options).toPromise();
    };
    /**
     * Fetch all of your existing dashboard list definitions.
     * Get all dashboard lists
     * @param param the request object
     */
    ObjectDashboardListsApi.prototype.listDashboardLists = function (param, options) {
        return this.api.listDashboardLists(options).toPromise();
    };
    /**
     * Update the name of a dashboard list.
     * Update a dashboard list
     * @param param the request object
     */
    ObjectDashboardListsApi.prototype.updateDashboardList = function (param, options) {
        return this.api.updateDashboardList(param.listId, param.body, options).toPromise();
    };
    return ObjectDashboardListsApi;
}());
exports.ObjectDashboardListsApi = ObjectDashboardListsApi;
var ObservableAPI_6 = require("./ObservableAPI");
var ObjectDashboardsApi = /** @class */ (function () {
    function ObjectDashboardsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableDashboardsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Create a dashboard using the specified options. When defining queries in your widgets, take note of which queries should have the `as_count()` or `as_rate()` modifiers appended. Refer to the following [documentation](https://docs.datadoghq.com/developers/metrics/type_modifiers/?tab=count#in-application-modifiers) for more information on these modifiers.
     * Create a new dashboard
     * @param param the request object
     */
    ObjectDashboardsApi.prototype.createDashboard = function (param, options) {
        return this.api.createDashboard(param.body, options).toPromise();
    };
    /**
     * Delete a dashboard using the specified ID.
     * Delete a dashboard
     * @param param the request object
     */
    ObjectDashboardsApi.prototype.deleteDashboard = function (param, options) {
        return this.api.deleteDashboard(param.dashboardId, options).toPromise();
    };
    /**
     * Get a dashboard using the specified ID.
     * Get a dashboard
     * @param param the request object
     */
    ObjectDashboardsApi.prototype.getDashboard = function (param, options) {
        return this.api.getDashboard(param.dashboardId, options).toPromise();
    };
    /**
     * Get all dashboards.  **Note**: This query will only return custom created or cloned dashboards. This query will not return preset dashboards.
     * Get all dashboards
     * @param param the request object
     */
    ObjectDashboardsApi.prototype.listDashboards = function (param, options) {
        return this.api.listDashboards(param.filterShared, options).toPromise();
    };
    /**
     * Update a dashboard using the specified ID.
     * Update a dashboard
     * @param param the request object
     */
    ObjectDashboardsApi.prototype.updateDashboard = function (param, options) {
        return this.api.updateDashboard(param.dashboardId, param.body, options).toPromise();
    };
    return ObjectDashboardsApi;
}());
exports.ObjectDashboardsApi = ObjectDashboardsApi;
var ObservableAPI_7 = require("./ObservableAPI");
var ObjectDowntimesApi = /** @class */ (function () {
    function ObjectDowntimesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableDowntimesApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Cancel a downtime.
     * Cancel a downtime
     * @param param the request object
     */
    ObjectDowntimesApi.prototype.cancelDowntime = function (param, options) {
        return this.api.cancelDowntime(param.downtimeId, options).toPromise();
    };
    /**
     * Delete all downtimes that match the scope of `X`.
     * Cancel downtimes by scope
     * @param param the request object
     */
    ObjectDowntimesApi.prototype.cancelDowntimesByScope = function (param, options) {
        return this.api.cancelDowntimesByScope(param.body, options).toPromise();
    };
    /**
     * Schedule a downtime.
     * Schedule a downtime
     * @param param the request object
     */
    ObjectDowntimesApi.prototype.createDowntime = function (param, options) {
        return this.api.createDowntime(param.body, options).toPromise();
    };
    /**
     * Get downtime detail by `downtime_id`.
     * Get a downtime
     * @param param the request object
     */
    ObjectDowntimesApi.prototype.getDowntime = function (param, options) {
        return this.api.getDowntime(param.downtimeId, options).toPromise();
    };
    /**
     * Get all scheduled downtimes.
     * Get all downtimes
     * @param param the request object
     */
    ObjectDowntimesApi.prototype.listDowntimes = function (param, options) {
        return this.api.listDowntimes(param.currentOnly, options).toPromise();
    };
    /**
     * Get all downtimes for the specified monitor
     * Get all downtimes for a monitor
     * @param param the request object
     */
    ObjectDowntimesApi.prototype.listMonitorDowntimes = function (param, options) {
        return this.api.listMonitorDowntimes(param.monitorId, options).toPromise();
    };
    /**
     * Update a single downtime by `downtime_id`.
     * Update a downtime
     * @param param the request object
     */
    ObjectDowntimesApi.prototype.updateDowntime = function (param, options) {
        return this.api.updateDowntime(param.downtimeId, param.body, options).toPromise();
    };
    return ObjectDowntimesApi;
}());
exports.ObjectDowntimesApi = ObjectDowntimesApi;
var ObservableAPI_8 = require("./ObservableAPI");
var ObjectEventsApi = /** @class */ (function () {
    function ObjectEventsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * This endpoint allows you to post events to the stream. Tag them, set priority and event aggregate them with other events.
     * Post an event
     * @param param the request object
     */
    ObjectEventsApi.prototype.createEvent = function (param, options) {
        return this.api.createEvent(param.body, options).toPromise();
    };
    /**
     * This endpoint allows you to query for event details.  **Note**: If the event you’re querying contains markdown formatting of any kind, you may see characters such as `%`,`\\`,`n` in your output.
     * Get an event
     * @param param the request object
     */
    ObjectEventsApi.prototype.getEvent = function (param, options) {
        return this.api.getEvent(param.eventId, options).toPromise();
    };
    /**
     * The event stream can be queried and filtered by time, priority, sources and tags.  **Notes**: - If the event you’re querying contains markdown formatting of any kind, you may see characters such as `%`,`\\`,`n` in your output.  - This endpoint returns a maximum of `1000` most recent results. To return additional results, identify the last timestamp of the last result and set that as the `end` query time to paginate the results. You can also use the page parameter to specify which set of `1000` results to return.
     * Query the event stream
     * @param param the request object
     */
    ObjectEventsApi.prototype.listEvents = function (param, options) {
        return this.api.listEvents(param.start, param.end, param.priority, param.sources, param.tags, param.unaggregated, param.excludeAggregate, param.page, options).toPromise();
    };
    return ObjectEventsApi;
}());
exports.ObjectEventsApi = ObjectEventsApi;
var ObservableAPI_9 = require("./ObservableAPI");
var ObjectGCPIntegrationApi = /** @class */ (function () {
    function ObjectGCPIntegrationApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableGCPIntegrationApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Create a Datadog-GCP integration.
     * Create a GCP integration
     * @param param the request object
     */
    ObjectGCPIntegrationApi.prototype.createGCPIntegration = function (param, options) {
        return this.api.createGCPIntegration(param.body, options).toPromise();
    };
    /**
     * Delete a given Datadog-GCP integration.
     * Delete a GCP integration
     * @param param the request object
     */
    ObjectGCPIntegrationApi.prototype.deleteGCPIntegration = function (param, options) {
        return this.api.deleteGCPIntegration(param.body, options).toPromise();
    };
    /**
     * List all Datadog-GCP integrations configured in your Datadog account.
     * List all GCP integrations
     * @param param the request object
     */
    ObjectGCPIntegrationApi.prototype.listGCPIntegration = function (param, options) {
        return this.api.listGCPIntegration(options).toPromise();
    };
    /**
     * Update a Datadog-GCP integrations host_filters and/or auto-mute. Requires a `project_id` and `client_email`, however these fields cannot be updated. If you need to update these fields, delete and use the create (`POST`) endpoint. The unspecified fields will keep their original values.
     * Update a GCP integration
     * @param param the request object
     */
    ObjectGCPIntegrationApi.prototype.updateGCPIntegration = function (param, options) {
        return this.api.updateGCPIntegration(param.body, options).toPromise();
    };
    return ObjectGCPIntegrationApi;
}());
exports.ObjectGCPIntegrationApi = ObjectGCPIntegrationApi;
var ObservableAPI_10 = require("./ObservableAPI");
var ObjectHostsApi = /** @class */ (function () {
    function ObjectHostsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_10.ObservableHostsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * This endpoint returns the total number of active and up hosts in your Datadog account. Active means the host has reported in the past hour, and up means it has reported in the past two hours.
     * Get the total number of active hosts
     * @param param the request object
     */
    ObjectHostsApi.prototype.getHostTotals = function (param, options) {
        return this.api.getHostTotals(param.from, options).toPromise();
    };
    /**
     * This endpoint allows searching for hosts by name, alias, or tag. Hosts live within the past 3 hours are included by default. Retention is 7 days. Results are paginated with a max of 1000 results at a time.
     * Get all hosts for your organization
     * @param param the request object
     */
    ObjectHostsApi.prototype.listHosts = function (param, options) {
        return this.api.listHosts(param.filter, param.sortField, param.sortDir, param.start, param.count, param.from, param.includeMutedHostsData, param.includeHostsMetadata, options).toPromise();
    };
    /**
     * Mute a host.
     * Mute a host
     * @param param the request object
     */
    ObjectHostsApi.prototype.muteHost = function (param, options) {
        return this.api.muteHost(param.hostName, param.body, options).toPromise();
    };
    /**
     * Unmutes a host. This endpoint takes no JSON arguments.
     * Unmute a host
     * @param param the request object
     */
    ObjectHostsApi.prototype.unmuteHost = function (param, options) {
        return this.api.unmuteHost(param.hostName, options).toPromise();
    };
    return ObjectHostsApi;
}());
exports.ObjectHostsApi = ObjectHostsApi;
var ObservableAPI_11 = require("./ObservableAPI");
var ObjectIPRangesApi = /** @class */ (function () {
    function ObjectIPRangesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_11.ObservableIPRangesApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Get information about Datadog IP ranges.
     * List IP Ranges
     * @param param the request object
     */
    ObjectIPRangesApi.prototype.getIPRanges = function (param, options) {
        return this.api.getIPRanges(options).toPromise();
    };
    return ObjectIPRangesApi;
}());
exports.ObjectIPRangesApi = ObjectIPRangesApi;
var ObservableAPI_12 = require("./ObservableAPI");
var ObjectKeyManagementApi = /** @class */ (function () {
    function ObjectKeyManagementApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_12.ObservableKeyManagementApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Creates an API key with a given name.
     * Create an API key
     * @param param the request object
     */
    ObjectKeyManagementApi.prototype.createAPIKey = function (param, options) {
        return this.api.createAPIKey(param.body, options).toPromise();
    };
    /**
     * Create an application key with a given name.
     * Create an application key
     * @param param the request object
     */
    ObjectKeyManagementApi.prototype.createApplicationKey = function (param, options) {
        return this.api.createApplicationKey(param.body, options).toPromise();
    };
    /**
     * Delete a given API key.
     * Delete an API key
     * @param param the request object
     */
    ObjectKeyManagementApi.prototype.deleteAPIKey = function (param, options) {
        return this.api.deleteAPIKey(param.key, options).toPromise();
    };
    /**
     * Delete a given application key.
     * Delete an application key
     * @param param the request object
     */
    ObjectKeyManagementApi.prototype.deleteApplicationKey = function (param, options) {
        return this.api.deleteApplicationKey(param.key, options).toPromise();
    };
    /**
     * Get a given API key.
     * Get API key
     * @param param the request object
     */
    ObjectKeyManagementApi.prototype.getAPIKey = function (param, options) {
        return this.api.getAPIKey(param.key, options).toPromise();
    };
    /**
     * Get a given application key.
     * Get an application key
     * @param param the request object
     */
    ObjectKeyManagementApi.prototype.getApplicationKey = function (param, options) {
        return this.api.getApplicationKey(param.key, options).toPromise();
    };
    /**
     * Get all API keys available for your account.
     * Get all API keys
     * @param param the request object
     */
    ObjectKeyManagementApi.prototype.listAPIKeys = function (param, options) {
        return this.api.listAPIKeys(options).toPromise();
    };
    /**
     * Get all application keys available for your Datadog account.
     * Get all application keys
     * @param param the request object
     */
    ObjectKeyManagementApi.prototype.listApplicationKeys = function (param, options) {
        return this.api.listApplicationKeys(options).toPromise();
    };
    /**
     * Edit an API key name.
     * Edit an API key
     * @param param the request object
     */
    ObjectKeyManagementApi.prototype.updateAPIKey = function (param, options) {
        return this.api.updateAPIKey(param.key, param.body, options).toPromise();
    };
    /**
     * Edit an application key name.
     * Edit an application key
     * @param param the request object
     */
    ObjectKeyManagementApi.prototype.updateApplicationKey = function (param, options) {
        return this.api.updateApplicationKey(param.key, param.body, options).toPromise();
    };
    return ObjectKeyManagementApi;
}());
exports.ObjectKeyManagementApi = ObjectKeyManagementApi;
var ObservableAPI_13 = require("./ObservableAPI");
var ObjectLogsApi = /** @class */ (function () {
    function ObjectLogsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_13.ObservableLogsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * List endpoint returns logs that match a log search query. [Results are paginated][1].  **If you are considering archiving logs for your organization, consider use of the Datadog archive capabilities instead of the log list API. See [Datadog Logs Archive documentation][2].**  [1]: /logs/guide/collect-multiple-logs-with-pagination [2]: https://docs.datadoghq.com/logs/archives
     * Search logs
     * @param param the request object
     */
    ObjectLogsApi.prototype.listLogs = function (param, options) {
        return this.api.listLogs(param.body, options).toPromise();
    };
    /**
     * Send your logs to your Datadog platform over HTTP. Limits per HTTP request are:  - Maximum content size per payload (uncompressed): 5MB - Maximum size for a single log: 1MB - Maximum array size if sending multiple logs in an array: 1000 entries  Any log exceeding 1MB is accepted and truncated by Datadog: - For a single log request, the API truncates the log at 1MB and returns a 2xx. - For a multi-logs request, the API processes all logs, truncates only logs larger than 1MB, and returns a 2xx.  Datadog recommends sending your logs compressed. Add the `Content-Encoding: gzip` header to the request when sending compressed logs.  The status codes answered by the HTTP API are: - 200: OK - 400: Bad request (likely an issue in the payload formatting) - 403: Permission issue (likely using an invalid API Key) - 413: Payload too large (batch is above 5MB uncompressed) - 5xx: Internal error, request should be retried after some time
     * Send logs
     * @param param the request object
     */
    ObjectLogsApi.prototype.submitLog = function (param, options) {
        return this.api.submitLog(param.body, param.contentEncoding, param.ddtags, options).toPromise();
    };
    return ObjectLogsApi;
}());
exports.ObjectLogsApi = ObjectLogsApi;
var ObservableAPI_14 = require("./ObservableAPI");
var ObjectLogsIndexesApi = /** @class */ (function () {
    function ObjectLogsIndexesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_14.ObservableLogsIndexesApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Creates a new index. Returns the Index object passed in the request body when the request is successful.
     * Create an index
     * @param param the request object
     */
    ObjectLogsIndexesApi.prototype.createLogsIndex = function (param, options) {
        return this.api.createLogsIndex(param.body, options).toPromise();
    };
    /**
     * Get one log index from your organization. This endpoint takes no JSON arguments.
     * Get an index
     * @param param the request object
     */
    ObjectLogsIndexesApi.prototype.getLogsIndex = function (param, options) {
        return this.api.getLogsIndex(param.name, options).toPromise();
    };
    /**
     * Get the current order of your log indexes. This endpoint takes no JSON arguments.
     * Get indexes order
     * @param param the request object
     */
    ObjectLogsIndexesApi.prototype.getLogsIndexOrder = function (param, options) {
        return this.api.getLogsIndexOrder(options).toPromise();
    };
    /**
     * The Index object describes the configuration of a log index. This endpoint returns an array of the `LogIndex` objects of your organization.
     * Get all indexes
     * @param param the request object
     */
    ObjectLogsIndexesApi.prototype.listLogIndexes = function (param, options) {
        return this.api.listLogIndexes(options).toPromise();
    };
    /**
     * Update an index as identified by its name. Returns the Index object passed in the request body when the request is successful.  Using the `PUT` method updates your index’s configuration by **replacing** your current configuration with the new one sent to your Datadog organization.
     * Update an index
     * @param param the request object
     */
    ObjectLogsIndexesApi.prototype.updateLogsIndex = function (param, options) {
        return this.api.updateLogsIndex(param.name, param.body, options).toPromise();
    };
    /**
     * This endpoint updates the index order of your organization. It returns the index order object passed in the request body when the request is successful.
     * Update indexes order
     * @param param the request object
     */
    ObjectLogsIndexesApi.prototype.updateLogsIndexOrder = function (param, options) {
        return this.api.updateLogsIndexOrder(param.body, options).toPromise();
    };
    return ObjectLogsIndexesApi;
}());
exports.ObjectLogsIndexesApi = ObjectLogsIndexesApi;
var ObservableAPI_15 = require("./ObservableAPI");
var ObjectLogsPipelinesApi = /** @class */ (function () {
    function ObjectLogsPipelinesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_15.ObservableLogsPipelinesApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Create a pipeline in your organization.
     * Create a pipeline
     * @param param the request object
     */
    ObjectLogsPipelinesApi.prototype.createLogsPipeline = function (param, options) {
        return this.api.createLogsPipeline(param.body, options).toPromise();
    };
    /**
     * Delete a given pipeline from your organization. This endpoint takes no JSON arguments.
     * Delete a pipeline
     * @param param the request object
     */
    ObjectLogsPipelinesApi.prototype.deleteLogsPipeline = function (param, options) {
        return this.api.deleteLogsPipeline(param.pipelineId, options).toPromise();
    };
    /**
     * Get a specific pipeline from your organization. This endpoint takes no JSON arguments.
     * Get a pipeline
     * @param param the request object
     */
    ObjectLogsPipelinesApi.prototype.getLogsPipeline = function (param, options) {
        return this.api.getLogsPipeline(param.pipelineId, options).toPromise();
    };
    /**
     * Get the current order of your pipelines. This endpoint takes no JSON arguments.
     * Get pipeline order
     * @param param the request object
     */
    ObjectLogsPipelinesApi.prototype.getLogsPipelineOrder = function (param, options) {
        return this.api.getLogsPipelineOrder(options).toPromise();
    };
    /**
     * Get all pipelines from your organization. This endpoint takes no JSON arguments.
     * Get all pipelines
     * @param param the request object
     */
    ObjectLogsPipelinesApi.prototype.listLogsPipelines = function (param, options) {
        return this.api.listLogsPipelines(options).toPromise();
    };
    /**
     * Update a given pipeline configuration to change it’s processors or their order.  **Note**: Using this method updates your pipeline configuration by **replacing** your current configuration with the new one sent to your Datadog organization.
     * Update a pipeline
     * @param param the request object
     */
    ObjectLogsPipelinesApi.prototype.updateLogsPipeline = function (param, options) {
        return this.api.updateLogsPipeline(param.pipelineId, param.body, options).toPromise();
    };
    /**
     * Update the order of your pipelines. Since logs are processed sequentially, reordering a pipeline may change the structure and content of the data processed by other pipelines and their processors.  **Note**: Using the `PUT` method updates your pipeline order by replacing your current order with the new one sent to your Datadog organization.
     * Update pipeline order
     * @param param the request object
     */
    ObjectLogsPipelinesApi.prototype.updateLogsPipelineOrder = function (param, options) {
        return this.api.updateLogsPipelineOrder(param.body, options).toPromise();
    };
    return ObjectLogsPipelinesApi;
}());
exports.ObjectLogsPipelinesApi = ObjectLogsPipelinesApi;
var ObservableAPI_16 = require("./ObservableAPI");
var ObjectMetricsApi = /** @class */ (function () {
    function ObjectMetricsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_16.ObservableMetricsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Get metadata about a specific metric.
     * Get metric metadata
     * @param param the request object
     */
    ObjectMetricsApi.prototype.getMetricMetadata = function (param, options) {
        return this.api.getMetricMetadata(param.metricName, options).toPromise();
    };
    /**
     * Get the list of actively reporting metrics from a given time until now.
     * Get active metrics list
     * @param param the request object
     */
    ObjectMetricsApi.prototype.listActiveMetrics = function (param, options) {
        return this.api.listActiveMetrics(param.from, param.host, param.tagFilter, options).toPromise();
    };
    /**
     * Search for metrics from the last 24 hours in Datadog.
     * Search metrics
     * @param param the request object
     */
    ObjectMetricsApi.prototype.listMetrics = function (param, options) {
        return this.api.listMetrics(param.q, options).toPromise();
    };
    /**
     * Query timeseries points.
     * Query timeseries points
     * @param param the request object
     */
    ObjectMetricsApi.prototype.queryMetrics = function (param, options) {
        return this.api.queryMetrics(param.from, param.to, param.query, options).toPromise();
    };
    /**
     * The metrics end-point allows you to post time-series data that can be graphed on Datadog’s dashboards. The maximum payload size is 3.2 megabytes (3200000 bytes). Compressed payloads must have a decompressed size of less than 62 megabytes (62914560 bytes).  If you’re submitting metrics directly to the Datadog API without using DogStatsD, expect:  - 64 bits for the timestamp - 32 bits for the value - 20 bytes for the metric names - 50 bytes for the timeseries - The full payload is approximately 100 bytes. However, with the DogStatsD API, compression is applied, which reduces the payload size.
     * Submit metrics
     * @param param the request object
     */
    ObjectMetricsApi.prototype.submitMetrics = function (param, options) {
        return this.api.submitMetrics(param.body, options).toPromise();
    };
    /**
     * Edit metadata of a specific metric. Find out more about [supported types](https://docs.datadoghq.com/developers/metrics).
     * Edit metric metadata
     * @param param the request object
     */
    ObjectMetricsApi.prototype.updateMetricMetadata = function (param, options) {
        return this.api.updateMetricMetadata(param.metricName, param.body, options).toPromise();
    };
    return ObjectMetricsApi;
}());
exports.ObjectMetricsApi = ObjectMetricsApi;
var ObservableAPI_17 = require("./ObservableAPI");
var ObjectMonitorsApi = /** @class */ (function () {
    function ObjectMonitorsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_17.ObservableMonitorsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Check if the given monitors can be deleted.
     * Check if a monitor can be deleted
     * @param param the request object
     */
    ObjectMonitorsApi.prototype.checkCanDeleteMonitor = function (param, options) {
        return this.api.checkCanDeleteMonitor(param.monitorIds, options).toPromise();
    };
    /**
     * Create a monitor using the specified options.  #### Monitor Types  The type of monitor chosen from:  - anomaly: `query alert` - APM: `query alert` or `trace-analytics alert` - composite: `composite` - custom: `service check` - event: `event alert` - forecast: `query alert` - host: `service check` - integration: `query alert` or `service check` - live process: `process alert` - logs: `log alert` - metric: `metric alert` - network: `service check` - outlier: `query alert` - process: `service check` - rum: `rum alert` - SLO: `slo alert` - watchdog: `event alert` - event-v2: `event-v2 alert`  #### Query Types  **Metric Alert Query**  Example: `time_aggr(time_window):space_aggr:metric{tags} [by {key}] operator #`  - `time_aggr`: avg, sum, max, min, change, or pct_change - `time_window`: `last_#m` (with `#` between 1 and 2880 depending on the monitor type) or `last_#h`(with `#` between 1 and 48 depending on the monitor type), or `last_1d` - `space_aggr`: avg, sum, min, or max - `tags`: one or more tags (comma-separated), or * - `key`: a 'key' in key:value tag syntax; defines a separate alert for each tag in the group (multi-alert) - `operator`: <, <=, >, >=, ==, or != - `#`: an integer or decimal number used to set the threshold  If you are using the `_change_` or `_pct_change_` time aggregator, instead use `change_aggr(time_aggr(time_window), timeshift):space_aggr:metric{tags} [by {key}] operator #` with:  - `change_aggr` change, pct_change - `time_aggr` avg, sum, max, min [Learn more](https://docs.datadoghq.com/monitors/monitor_types/#define-the-conditions) - `time_window` last\\_#m (between 1 and 2880 depending on the monitor type), last\\_#h (between 1 and 48 depending on the monitor type), or last_#d (1 or 2) - `timeshift` #m_ago (5, 10, 15, or 30), #h_ago (1, 2, or 4), or 1d_ago  Use this to create an outlier monitor using the following query: `avg(last_30m):outliers(avg:system.cpu.user{role:es-events-data} by {host}, 'dbscan', 7) > 0`  **Service Check Query**  Example: `\"check\".over(tags).last(count).count_by_status()`  - **`check`** name of the check, e.g. `datadog.agent.up` - **`tags`** one or more quoted tags (comma-separated), or \"*\". e.g.: `.over(\"env:prod\", \"role:db\")` - **`count`** must be at greater than or equal to your max threshold (defined in the `options`). It is limited to 100. For example, if you've specified to notify on 1 critical, 3 ok, and 2 warn statuses, `count` should be 3.  **Event Alert Query**  Example: `events('sources:nagios status:error,warning priority:normal tags: \"string query\"').rollup(\"count\").last(\"1h\")\"`  - **`event`**, the event query string: - **`string_query`** free text query to match against event title and text. - **`sources`** event sources (comma-separated). - **`status`** event statuses (comma-separated). Valid options: error, warn, and info. - **`priority`** event priorities (comma-separated). Valid options: low, normal, all. - **`host`** event reporting host (comma-separated). - **`tags`** event tags (comma-separated). - **`excluded_tags`** excluded event tags (comma-separated). - **`rollup`** the stats roll-up method. `count` is the only supported method now. - **`last`** the timeframe to roll up the counts. Examples: 45m, 4h. Supported timeframes: m, h and d. This value should not exceed 48 hours.  **NOTE** Only available on US1 and EU.  **Event V2 Alert Query**  Example: `events(query).rollup(rollup_method[, measure]).last(time_window) operator #`  - **`query`** The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/). - **`rollup_method`** The stats roll-up method - supports `count`, `avg` and `cardinality`. - **`measure`** For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use. - **`time_window`** #m (5, 10, 15, or 30), #h (1, 2, or 4, 24). - **`operator`** `<`, `<=`, `>`, `>=`, `==`, or `!=`. - **`#`** an integer or decimal number used to set the threshold.  **NOTE** Only available on US1-FED, US3, and in closed beta on EU and US1.  **Process Alert Query**  Example: `processes(search).over(tags).rollup('count').last(timeframe) operator #`  - **`search`** free text search string for querying processes. Matching processes match results on the [Live Processes](https://docs.datadoghq.com/infrastructure/process/?tab=linuxwindows) page. - **`tags`** one or more tags (comma-separated) - **`timeframe`** the timeframe to roll up the counts. Examples: 10m, 4h. Supported timeframes: s, m, h and d - **`operator`** <, <=, >, >=, ==, or != - **`#`** an integer or decimal number used to set the threshold  **Logs Alert Query**  Example: `logs(query).index(index_name).rollup(rollup_method[, measure]).last(time_window) operator #`  - **`query`** The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/). - **`index_name`** For multi-index organizations, the log index in which the request is performed. - **`rollup_method`** The stats roll-up method - supports `count`, `avg` and `cardinality`. - **`measure`** For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use. - **`time_window`** #m (between 1 and 2880), #h (between 1 and 48) - **`operator`** `<`, `<=`, `>`, `>=`, `==`, or `!=`. - **`#`** an integer or decimal number used to set the threshold.  **Composite Query**  Example: `12345 && 67890`, where `12345` and `67890` are the IDs of non-composite monitors  * **`name`** [*required*, *default* = **dynamic, based on query**]: The name of the alert. * **`message`** [*required*, *default* = **dynamic, based on query**]: A message to include with notifications for this monitor. Email notifications can be sent to specific users by using the same '@username' notation as events. * **`tags`** [*optional*, *default* = **empty list**]: A list of tags to associate with your monitor. When getting all monitor details via the API, use the `monitor_tags` argument to filter results by these tags. It is only available via the API and isn't visible or editable in the Datadog UI.  **SLO Alert Query**  Example: `error_budget(\"slo_id\").over(\"time_window\") operator #`  - **`slo_id`**: The alphanumeric SLO ID of the SLO you are configuring the alert for. - **`time_window`**: The time window of the SLO target you wish to alert on. Valid options: `7d`, `30d`, `90d`. - **`operator`**: `>=` or `>`
     * Create a monitor
     * @param param the request object
     */
    ObjectMonitorsApi.prototype.createMonitor = function (param, options) {
        return this.api.createMonitor(param.body, options).toPromise();
    };
    /**
     * Delete the specified monitor
     * Delete a monitor
     * @param param the request object
     */
    ObjectMonitorsApi.prototype.deleteMonitor = function (param, options) {
        return this.api.deleteMonitor(param.monitorId, param.force, options).toPromise();
    };
    /**
     * Get details about the specified monitor from your organization.
     * Get a monitor's details
     * @param param the request object
     */
    ObjectMonitorsApi.prototype.getMonitor = function (param, options) {
        return this.api.getMonitor(param.monitorId, param.groupStates, options).toPromise();
    };
    /**
     * Get details about the specified monitor from your organization.
     * Get all monitor details
     * @param param the request object
     */
    ObjectMonitorsApi.prototype.listMonitors = function (param, options) {
        return this.api.listMonitors(param.groupStates, param.name, param.tags, param.monitorTags, param.withDowntimes, param.idOffset, param.page, param.pageSize, options).toPromise();
    };
    /**
     * Edit the specified monitor.
     * Edit a monitor
     * @param param the request object
     */
    ObjectMonitorsApi.prototype.updateMonitor = function (param, options) {
        return this.api.updateMonitor(param.monitorId, param.body, options).toPromise();
    };
    /**
     * Validate the monitor provided in the request.
     * Validate a monitor
     * @param param the request object
     */
    ObjectMonitorsApi.prototype.validateMonitor = function (param, options) {
        return this.api.validateMonitor(param.body, options).toPromise();
    };
    return ObjectMonitorsApi;
}());
exports.ObjectMonitorsApi = ObjectMonitorsApi;
var ObservableAPI_18 = require("./ObservableAPI");
var ObjectNotebooksApi = /** @class */ (function () {
    function ObjectNotebooksApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_18.ObservableNotebooksApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Create a notebook using the specified options.
     * Create a notebook
     * @param param the request object
     */
    ObjectNotebooksApi.prototype.createNotebook = function (param, options) {
        return this.api.createNotebook(param.body, options).toPromise();
    };
    /**
     * Delete a notebook using the specified ID.
     * Delete a notebook
     * @param param the request object
     */
    ObjectNotebooksApi.prototype.deleteNotebook = function (param, options) {
        return this.api.deleteNotebook(param.notebookId, options).toPromise();
    };
    /**
     * Get a notebook using the specified notebook ID.
     * Get a notebook
     * @param param the request object
     */
    ObjectNotebooksApi.prototype.getNotebook = function (param, options) {
        return this.api.getNotebook(param.notebookId, options).toPromise();
    };
    /**
     * Get all notebooks. This can also be used to search for notebooks with a particular `query` in the notebook `name` or author `handle`.
     * Get all notebooks
     * @param param the request object
     */
    ObjectNotebooksApi.prototype.listNotebooks = function (param, options) {
        return this.api.listNotebooks(param.authorHandle, param.excludeAuthorHandle, param.start, param.count, param.sortField, param.sortDir, param.query, param.includeCells, options).toPromise();
    };
    /**
     * Update a notebook using the specified ID.
     * Update a notebook
     * @param param the request object
     */
    ObjectNotebooksApi.prototype.updateNotebook = function (param, options) {
        return this.api.updateNotebook(param.notebookId, param.body, options).toPromise();
    };
    return ObjectNotebooksApi;
}());
exports.ObjectNotebooksApi = ObjectNotebooksApi;
var ObservableAPI_19 = require("./ObservableAPI");
var ObjectOrganizationsApi = /** @class */ (function () {
    function ObjectOrganizationsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_19.ObservableOrganizationsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Create a child organization.  This endpoint requires the [multi-organization account](https://docs.datadoghq.com/account_management/multi_organization/) feature and must be enabled by [contacting support](https://docs.datadoghq.com/help/).  Once a new child organization is created, you can interact with it by using the `org.public_id`, `pi_key.key`, and `application_key.hash` provided in the response.
     * Create a child organization
     * @param param the request object
     */
    ObjectOrganizationsApi.prototype.createChildOrg = function (param, options) {
        return this.api.createChildOrg(param.body, options).toPromise();
    };
    /**
     * Get organization information.
     * Get organization information
     * @param param the request object
     */
    ObjectOrganizationsApi.prototype.getOrg = function (param, options) {
        return this.api.getOrg(param.publicId, options).toPromise();
    };
    /**
     * List your managed organizations.
     * List your managed organizations
     * @param param the request object
     */
    ObjectOrganizationsApi.prototype.listOrgs = function (param, options) {
        return this.api.listOrgs(options).toPromise();
    };
    /**
     * Update your organization.
     * Update your organization
     * @param param the request object
     */
    ObjectOrganizationsApi.prototype.updateOrg = function (param, options) {
        return this.api.updateOrg(param.publicId, param.body, options).toPromise();
    };
    /**
     * There are a couple of options for updating the Identity Provider (IdP) metadata from your SAML IdP.  * **Multipart Form-Data**: Post the IdP metadata file using a form post.  * **XML Body:** Post the IdP metadata file as the body of the request.
     * Upload IdP metadata
     * @param param the request object
     */
    ObjectOrganizationsApi.prototype.uploadIdPForOrg = function (param, options) {
        return this.api.uploadIdPForOrg(param.publicId, param.idpFile, options).toPromise();
    };
    return ObjectOrganizationsApi;
}());
exports.ObjectOrganizationsApi = ObjectOrganizationsApi;
var ObservableAPI_20 = require("./ObservableAPI");
var ObjectPagerDutyIntegrationApi = /** @class */ (function () {
    function ObjectPagerDutyIntegrationApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_20.ObservablePagerDutyIntegrationApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Create a new service object in the PagerDuty integration.
     * Create a new service object
     * @param param the request object
     */
    ObjectPagerDutyIntegrationApi.prototype.createPagerDutyIntegrationService = function (param, options) {
        return this.api.createPagerDutyIntegrationService(param.body, options).toPromise();
    };
    /**
     * Delete a single service object in the Datadog-PagerDuty integration.
     * Delete a single service object
     * @param param the request object
     */
    ObjectPagerDutyIntegrationApi.prototype.deletePagerDutyIntegrationService = function (param, options) {
        return this.api.deletePagerDutyIntegrationService(param.serviceName, options).toPromise();
    };
    /**
     * Get service name in the Datadog-PagerDuty integration.
     * Get a single service object
     * @param param the request object
     */
    ObjectPagerDutyIntegrationApi.prototype.getPagerDutyIntegrationService = function (param, options) {
        return this.api.getPagerDutyIntegrationService(param.serviceName, options).toPromise();
    };
    /**
     * Update a single service object in the Datadog-PagerDuty integration.
     * Update a single service object
     * @param param the request object
     */
    ObjectPagerDutyIntegrationApi.prototype.updatePagerDutyIntegrationService = function (param, options) {
        return this.api.updatePagerDutyIntegrationService(param.serviceName, param.body, options).toPromise();
    };
    return ObjectPagerDutyIntegrationApi;
}());
exports.ObjectPagerDutyIntegrationApi = ObjectPagerDutyIntegrationApi;
var ObservableAPI_21 = require("./ObservableAPI");
var ObjectServiceChecksApi = /** @class */ (function () {
    function ObjectServiceChecksApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_21.ObservableServiceChecksApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Submit a list of Service Checks.  **Note**: A valid API key is required.
     * Submit a Service Check
     * @param param the request object
     */
    ObjectServiceChecksApi.prototype.submitServiceCheck = function (param, options) {
        return this.api.submitServiceCheck(param.body, options).toPromise();
    };
    return ObjectServiceChecksApi;
}());
exports.ObjectServiceChecksApi = ObjectServiceChecksApi;
var ObservableAPI_22 = require("./ObservableAPI");
var ObjectServiceLevelObjectiveCorrectionsApi = /** @class */ (function () {
    function ObjectServiceLevelObjectiveCorrectionsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_22.ObservableServiceLevelObjectiveCorrectionsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Create an SLO Correction
     * Create an SLO correction
     * @param param the request object
     */
    ObjectServiceLevelObjectiveCorrectionsApi.prototype.createSLOCorrection = function (param, options) {
        return this.api.createSLOCorrection(param.body, options).toPromise();
    };
    /**
     * Permanently delete the specified SLO correction object
     * Delete an SLO correction
     * @param param the request object
     */
    ObjectServiceLevelObjectiveCorrectionsApi.prototype.deleteSLOCorrection = function (param, options) {
        return this.api.deleteSLOCorrection(param.sloCorrectionId, options).toPromise();
    };
    /**
     * Get an SLO correction
     * Get an SLO correction for an SLO
     * @param param the request object
     */
    ObjectServiceLevelObjectiveCorrectionsApi.prototype.getSLOCorrection = function (param, options) {
        return this.api.getSLOCorrection(param.sloCorrectionId, options).toPromise();
    };
    /**
     * Get all Service Level Objective corrections
     * Get all SLO corrections
     * @param param the request object
     */
    ObjectServiceLevelObjectiveCorrectionsApi.prototype.listSLOCorrection = function (param, options) {
        return this.api.listSLOCorrection(options).toPromise();
    };
    /**
     * Update the specified SLO correction object object
     * Update an SLO correction
     * @param param the request object
     */
    ObjectServiceLevelObjectiveCorrectionsApi.prototype.updateSLOCorrection = function (param, options) {
        return this.api.updateSLOCorrection(param.sloCorrectionId, param.body, options).toPromise();
    };
    return ObjectServiceLevelObjectiveCorrectionsApi;
}());
exports.ObjectServiceLevelObjectiveCorrectionsApi = ObjectServiceLevelObjectiveCorrectionsApi;
var ObservableAPI_23 = require("./ObservableAPI");
var ObjectServiceLevelObjectivesApi = /** @class */ (function () {
    function ObjectServiceLevelObjectivesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_23.ObservableServiceLevelObjectivesApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Check if an SLO can be safely deleted. For example, assure an SLO can be deleted without disrupting a dashboard.
     * Check if SLOs can be safely deleted
     * @param param the request object
     */
    ObjectServiceLevelObjectivesApi.prototype.checkCanDeleteSLO = function (param, options) {
        return this.api.checkCanDeleteSLO(param.ids, options).toPromise();
    };
    /**
     * Create a service level objective object.
     * Create an SLO object
     * @param param the request object
     */
    ObjectServiceLevelObjectivesApi.prototype.createSLO = function (param, options) {
        return this.api.createSLO(param.body, options).toPromise();
    };
    /**
     * Permanently delete the specified service level objective object.  If an SLO is used in a dashboard, the `DELETE /v1/slo/` endpoint returns a 409 conflict error because the SLO is referenced in a dashboard.
     * Delete an SLO
     * @param param the request object
     */
    ObjectServiceLevelObjectivesApi.prototype.deleteSLO = function (param, options) {
        return this.api.deleteSLO(param.sloId, param.force, options).toPromise();
    };
    /**
     * Delete (or partially delete) multiple service level objective objects.  This endpoint facilitates deletion of one or more thresholds for one or more service level objective objects. If all thresholds are deleted, the service level objective object is deleted as well.
     * Bulk Delete SLO Timeframes
     * @param param the request object
     */
    ObjectServiceLevelObjectivesApi.prototype.deleteSLOTimeframeInBulk = function (param, options) {
        return this.api.deleteSLOTimeframeInBulk(param.body, options).toPromise();
    };
    /**
     * Get a service level objective object.
     * Get an SLO's details
     * @param param the request object
     */
    ObjectServiceLevelObjectivesApi.prototype.getSLO = function (param, options) {
        return this.api.getSLO(param.sloId, param.withConfiguredAlertIds, options).toPromise();
    };
    /**
     * Get a specific SLO’s history, regardless of its SLO type.  The detailed history data is structured according to the source data type. For example, metric data is included for event SLOs that use the metric source, and monitor SLO types include the monitor transition history.  **Note:** There are different response formats for event based and time based SLOs. Examples of both are shown.
     * Get an SLO's history
     * @param param the request object
     */
    ObjectServiceLevelObjectivesApi.prototype.getSLOHistory = function (param, options) {
        return this.api.getSLOHistory(param.sloId, param.fromTs, param.toTs, param.target, options).toPromise();
    };
    /**
     * Get a list of service level objective objects for your organization.
     * Get all SLOs
     * @param param the request object
     */
    ObjectServiceLevelObjectivesApi.prototype.listSLOs = function (param, options) {
        return this.api.listSLOs(param.ids, param.query, param.tagsQuery, param.metricsQuery, options).toPromise();
    };
    /**
     * Update the specified service level objective object.
     * Update an SLO
     * @param param the request object
     */
    ObjectServiceLevelObjectivesApi.prototype.updateSLO = function (param, options) {
        return this.api.updateSLO(param.sloId, param.body, options).toPromise();
    };
    return ObjectServiceLevelObjectivesApi;
}());
exports.ObjectServiceLevelObjectivesApi = ObjectServiceLevelObjectivesApi;
var ObservableAPI_24 = require("./ObservableAPI");
var ObjectSlackIntegrationApi = /** @class */ (function () {
    function ObjectSlackIntegrationApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_24.ObservableSlackIntegrationApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Add a channel to your Datadog-Slack integration.
     * Create a Slack integration channel
     * @param param the request object
     */
    ObjectSlackIntegrationApi.prototype.createSlackIntegrationChannel = function (param, options) {
        return this.api.createSlackIntegrationChannel(param.accountName, param.body, options).toPromise();
    };
    /**
     * Get a channel configured for your Datadog-Slack integration.
     * Get a Slack integration channel
     * @param param the request object
     */
    ObjectSlackIntegrationApi.prototype.getSlackIntegrationChannel = function (param, options) {
        return this.api.getSlackIntegrationChannel(param.accountName, param.channelName, options).toPromise();
    };
    /**
     * Get a list of all channels configured for your Datadog-Slack integration.
     * Get all channels in a Slack integration
     * @param param the request object
     */
    ObjectSlackIntegrationApi.prototype.getSlackIntegrationChannels = function (param, options) {
        return this.api.getSlackIntegrationChannels(param.accountName, options).toPromise();
    };
    /**
     * Remove a channel from your Datadog-Slack integration.
     * Remove a Slack integration channel
     * @param param the request object
     */
    ObjectSlackIntegrationApi.prototype.removeSlackIntegrationChannel = function (param, options) {
        return this.api.removeSlackIntegrationChannel(param.accountName, param.channelName, options).toPromise();
    };
    /**
     * Update a channel used in your Datadog-Slack integration.
     * Update a Slack integration channel
     * @param param the request object
     */
    ObjectSlackIntegrationApi.prototype.updateSlackIntegrationChannel = function (param, options) {
        return this.api.updateSlackIntegrationChannel(param.accountName, param.channelName, param.body, options).toPromise();
    };
    return ObjectSlackIntegrationApi;
}());
exports.ObjectSlackIntegrationApi = ObjectSlackIntegrationApi;
var ObservableAPI_25 = require("./ObservableAPI");
var ObjectSnapshotsApi = /** @class */ (function () {
    function ObjectSnapshotsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_25.ObservableSnapshotsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Take graph snapshots. **Note**: When a snapshot is created, there is some delay before it is available.
     * Take graph snapshots
     * @param param the request object
     */
    ObjectSnapshotsApi.prototype.getGraphSnapshot = function (param, options) {
        return this.api.getGraphSnapshot(param.start, param.end, param.metricQuery, param.eventQuery, param.graphDef, param.title, options).toPromise();
    };
    return ObjectSnapshotsApi;
}());
exports.ObjectSnapshotsApi = ObjectSnapshotsApi;
var ObservableAPI_26 = require("./ObservableAPI");
var ObjectSyntheticsApi = /** @class */ (function () {
    function ObjectSyntheticsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_26.ObservableSyntheticsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Create a Synthetics global variable.
     * Create a global variable
     * @param param the request object
     */
    ObjectSyntheticsApi.prototype.createGlobalVariable = function (param, options) {
        return this.api.createGlobalVariable(param.body, options).toPromise();
    };
    /**
     * Create a new Synthetics private location.
     * Create a private location
     * @param param the request object
     */
    ObjectSyntheticsApi.prototype.createPrivateLocation = function (param, options) {
        return this.api.createPrivateLocation(param.body, options).toPromise();
    };
    /**
     * Create a Synthetic API test.
     * Create an API test
     * @param param the request object
     */
    ObjectSyntheticsApi.prototype.createSyntheticsAPITest = function (param, options) {
        return this.api.createSyntheticsAPITest(param.body, options).toPromise();
    };
    /**
     * Create a Synthetic browser test.
     * Create a browser test
     * @param param the request object
     */
    ObjectSyntheticsApi.prototype.createSyntheticsBrowserTest = function (param, options) {
        return this.api.createSyntheticsBrowserTest(param.body, options).toPromise();
    };
    /**
     * Delete a Synthetics global variable.
     * Delete a global variable
     * @param param the request object
     */
    ObjectSyntheticsApi.prototype.deleteGlobalVariable = function (param, options) {
        return this.api.deleteGlobalVariable(param.variableId, options).toPromise();
    };
    /**
     * Delete a Synthetics private location.
     * Delete a private location
     * @param param the request object
     */
    ObjectSyntheticsApi.prototype.deletePrivateLocation = function (param, options) {
        return this.api.deletePrivateLocation(param.locationId, options).toPromise();
    };
    /**
     * Delete multiple Synthetic tests by ID.
     * Delete tests
     * @param param the request object
     */
    ObjectSyntheticsApi.prototype.deleteTests = function (param, options) {
        return this.api.deleteTests(param.body, options).toPromise();
    };
    /**
     * Edit a Synthetics global variable.
     * Edit a global variable
     * @param param the request object
     */
    ObjectSyntheticsApi.prototype.editGlobalVariable = function (param, options) {
        return this.api.editGlobalVariable(param.variableId, param.body, options).toPromise();
    };
    /**
     * Get the detailed configuration associated with a Synthetic API test.
     * Get an API test
     * @param param the request object
     */
    ObjectSyntheticsApi.prototype.getAPITest = function (param, options) {
        return this.api.getAPITest(param.publicId, options).toPromise();
    };
    /**
     * Get the last 50 test results summaries for a given Synthetics API test.
     * Get an API test's latest results summaries
     * @param param the request object
     */
    ObjectSyntheticsApi.prototype.getAPITestLatestResults = function (param, options) {
        return this.api.getAPITestLatestResults(param.publicId, param.fromTs, param.toTs, param.probeDc, options).toPromise();
    };
    /**
     * Get a specific full result from a given (API) Synthetic test.
     * Get an API test result
     * @param param the request object
     */
    ObjectSyntheticsApi.prototype.getAPITestResult = function (param, options) {
        return this.api.getAPITestResult(param.publicId, param.resultId, options).toPromise();
    };
    /**
     * Get the detailed configuration (including steps) associated with a Synthetic browser test.
     * Get a browser test
     * @param param the request object
     */
    ObjectSyntheticsApi.prototype.getBrowserTest = function (param, options) {
        return this.api.getBrowserTest(param.publicId, options).toPromise();
    };
    /**
     * Get the last 50 test results summaries for a given Synthetics Browser test.
     * Get a browser test's latest results summaries
     * @param param the request object
     */
    ObjectSyntheticsApi.prototype.getBrowserTestLatestResults = function (param, options) {
        return this.api.getBrowserTestLatestResults(param.publicId, param.fromTs, param.toTs, param.probeDc, options).toPromise();
    };
    /**
     * Get a specific full result from a given (browser) Synthetic test.
     * Get a browser test result
     * @param param the request object
     */
    ObjectSyntheticsApi.prototype.getBrowserTestResult = function (param, options) {
        return this.api.getBrowserTestResult(param.publicId, param.resultId, options).toPromise();
    };
    /**
     * Get the detailed configuration of a global variable.
     * Get a global variable
     * @param param the request object
     */
    ObjectSyntheticsApi.prototype.getGlobalVariable = function (param, options) {
        return this.api.getGlobalVariable(param.variableId, options).toPromise();
    };
    /**
     * Get a Synthetics private location.
     * Get a private location
     * @param param the request object
     */
    ObjectSyntheticsApi.prototype.getPrivateLocation = function (param, options) {
        return this.api.getPrivateLocation(param.locationId, options).toPromise();
    };
    /**
     * Get the detailed configuration associated with a Synthetics test.
     * Get a test configuration
     * @param param the request object
     */
    ObjectSyntheticsApi.prototype.getTest = function (param, options) {
        return this.api.getTest(param.publicId, options).toPromise();
    };
    /**
     * Get the list of public and private locations available for Synthetic tests. No arguments required.
     * Get all locations (public and private)
     * @param param the request object
     */
    ObjectSyntheticsApi.prototype.listLocations = function (param, options) {
        return this.api.listLocations(options).toPromise();
    };
    /**
     * Get the list of all Synthetic tests.
     * Get the list of all tests
     * @param param the request object
     */
    ObjectSyntheticsApi.prototype.listTests = function (param, options) {
        return this.api.listTests(options).toPromise();
    };
    /**
     * Trigger a set of Synthetics tests for continuous integration.
     * Trigger tests from CI/CD pipelines
     * @param param the request object
     */
    ObjectSyntheticsApi.prototype.triggerCITests = function (param, options) {
        return this.api.triggerCITests(param.body, options).toPromise();
    };
    /**
     * Edit the configuration of a Synthetic API test.
     * Edit an API test
     * @param param the request object
     */
    ObjectSyntheticsApi.prototype.updateAPITest = function (param, options) {
        return this.api.updateAPITest(param.publicId, param.body, options).toPromise();
    };
    /**
     * Edit the configuration of a Synthetic browser test.
     * Edit a browser test
     * @param param the request object
     */
    ObjectSyntheticsApi.prototype.updateBrowserTest = function (param, options) {
        return this.api.updateBrowserTest(param.publicId, param.body, options).toPromise();
    };
    /**
     * Edit a Synthetics private location.
     * Edit a private location
     * @param param the request object
     */
    ObjectSyntheticsApi.prototype.updatePrivateLocation = function (param, options) {
        return this.api.updatePrivateLocation(param.locationId, param.body, options).toPromise();
    };
    /**
     * Pause or start a Synthetics test by changing the status.
     * Pause or start a test
     * @param param the request object
     */
    ObjectSyntheticsApi.prototype.updateTestPauseStatus = function (param, options) {
        return this.api.updateTestPauseStatus(param.publicId, param.body, options).toPromise();
    };
    return ObjectSyntheticsApi;
}());
exports.ObjectSyntheticsApi = ObjectSyntheticsApi;
var ObservableAPI_27 = require("./ObservableAPI");
var ObjectTagsApi = /** @class */ (function () {
    function ObjectTagsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_27.ObservableTagsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * This endpoint allows you to add new tags to a host, optionally specifying where these tags come from.
     * Add tags to a host
     * @param param the request object
     */
    ObjectTagsApi.prototype.createHostTags = function (param, options) {
        return this.api.createHostTags(param.hostName, param.body, param.source, options).toPromise();
    };
    /**
     * This endpoint allows you to remove all user-assigned tags for a single host.
     * Remove host tags
     * @param param the request object
     */
    ObjectTagsApi.prototype.deleteHostTags = function (param, options) {
        return this.api.deleteHostTags(param.hostName, param.source, options).toPromise();
    };
    /**
     * Return the list of tags that apply to a given host.
     * Get host tags
     * @param param the request object
     */
    ObjectTagsApi.prototype.getHostTags = function (param, options) {
        return this.api.getHostTags(param.hostName, param.source, options).toPromise();
    };
    /**
     * Return a mapping of tags to hosts for your whole infrastructure.
     * Get Tags
     * @param param the request object
     */
    ObjectTagsApi.prototype.listHostTags = function (param, options) {
        return this.api.listHostTags(param.source, options).toPromise();
    };
    /**
     * This endpoint allows you to update/replace all tags in an integration source with those supplied in the request.
     * Update host tags
     * @param param the request object
     */
    ObjectTagsApi.prototype.updateHostTags = function (param, options) {
        return this.api.updateHostTags(param.hostName, param.body, param.source, options).toPromise();
    };
    return ObjectTagsApi;
}());
exports.ObjectTagsApi = ObjectTagsApi;
var ObservableAPI_28 = require("./ObservableAPI");
var ObjectUsageMeteringApi = /** @class */ (function () {
    function ObjectUsageMeteringApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_28.ObservableUsageMeteringApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Get daily custom reports.
     * Get the list of available daily custom reports
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getDailyCustomReports = function (param, options) {
        return this.api.getDailyCustomReports(param.pageSize, param.pageNumber, param.sortDir, param.sort, options).toPromise();
    };
    /**
     * Get hourly usage for incident management.
     * Get hourly usage for incident management
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getIncidentManagement = function (param, options) {
        return this.api.getIncidentManagement(param.startHr, param.endHr, options).toPromise();
    };
    /**
     * Get hourly usage for ingested spans.
     * Get hourly usage for ingested spans
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getIngestedSpans = function (param, options) {
        return this.api.getIngestedSpans(param.startHr, param.endHr, options).toPromise();
    };
    /**
     * Get monthly custom reports.
     * Get the list of available monthly custom reports
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getMonthlyCustomReports = function (param, options) {
        return this.api.getMonthlyCustomReports(param.pageSize, param.pageNumber, param.sortDir, param.sort, options).toPromise();
    };
    /**
     * Get specified daily custom reports.
     * Get specified daily custom reports
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getSpecifiedDailyCustomReports = function (param, options) {
        return this.api.getSpecifiedDailyCustomReports(param.reportId, options).toPromise();
    };
    /**
     * Get specified monthly custom reports.
     * Get specified monthly custom reports
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getSpecifiedMonthlyCustomReports = function (param, options) {
        return this.api.getSpecifiedMonthlyCustomReports(param.reportId, options).toPromise();
    };
    /**
     * Get hourly usage for tracing without limits.  **Note** This endpoint has been renamed to `/api/v1/usage/ingested-spans`.
     * Get hourly usage for tracing without limits
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getTracingWithoutLimits = function (param, options) {
        return this.api.getTracingWithoutLimits(param.startHr, param.endHr, options).toPromise();
    };
    /**
     * Get hourly usage for analyzed logs (Security Monitoring).
     * Get hourly usage for analyzed logs
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getUsageAnalyzedLogs = function (param, options) {
        return this.api.getUsageAnalyzedLogs(param.startHr, param.endHr, options).toPromise();
    };
    /**
     * Get Usage Attribution.
     * Get Usage Attribution
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getUsageAttribution = function (param, options) {
        return this.api.getUsageAttribution(param.startMonth, param.fields, param.endMonth, param.sortDirection, param.sortName, options).toPromise();
    };
    /**
     * Get billable usage across your account.
     * Get billable usage across your account
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getUsageBillableSummary = function (param, options) {
        return this.api.getUsageBillableSummary(param.month, options).toPromise();
    };
    /**
     * Get hourly usage for Compliance Monitoring.
     * Get hourly usage for Compliance Monitoring
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getUsageComplianceMonitoring = function (param, options) {
        return this.api.getUsageComplianceMonitoring(param.startHr, param.endHr, options).toPromise();
    };
    /**
     * Get hourly usage for [Fargate](https://docs.datadoghq.com/integrations/ecs_fargate/).
     * Get hourly usage for Fargate
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getUsageFargate = function (param, options) {
        return this.api.getUsageFargate(param.startHr, param.endHr, options).toPromise();
    };
    /**
     * Get hourly usage for hosts and containers.
     * Get hourly usage for hosts and containers
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getUsageHosts = function (param, options) {
        return this.api.getUsageHosts(param.startHr, param.endHr, options).toPromise();
    };
    /**
     * Get hourly usage for indexed spans.
     * Get hourly usage for indexed spans
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getUsageIndexedSpans = function (param, options) {
        return this.api.getUsageIndexedSpans(param.startHr, param.endHr, options).toPromise();
    };
    /**
     * Get hourly usage for IoT.
     * Get hourly usage for IoT
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getUsageInternetOfThings = function (param, options) {
        return this.api.getUsageInternetOfThings(param.startHr, param.endHr, options).toPromise();
    };
    /**
     * Get hourly usage for lambda.
     * Get hourly usage for Lambda
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getUsageLambda = function (param, options) {
        return this.api.getUsageLambda(param.startHr, param.endHr, options).toPromise();
    };
    /**
     * Get hourly usage for logs.
     * Get hourly usage for Logs
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getUsageLogs = function (param, options) {
        return this.api.getUsageLogs(param.startHr, param.endHr, options).toPromise();
    };
    /**
     * Get hourly usage for logs by index.
     * Get hourly usage for Logs by Index
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getUsageLogsByIndex = function (param, options) {
        return this.api.getUsageLogsByIndex(param.startHr, param.endHr, param.indexName, options).toPromise();
    };
    /**
     * Get hourly usage for indexed logs by retention period.
     * Get hourly logs usage by retention
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getUsageLogsByRetention = function (param, options) {
        return this.api.getUsageLogsByRetention(param.startHr, param.endHr, options).toPromise();
    };
    /**
     * Get hourly usage for network flows.
     * Get hourly usage for Network Flows
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getUsageNetworkFlows = function (param, options) {
        return this.api.getUsageNetworkFlows(param.startHr, param.endHr, options).toPromise();
    };
    /**
     * Get hourly usage for network hosts.
     * Get hourly usage for Network Hosts
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getUsageNetworkHosts = function (param, options) {
        return this.api.getUsageNetworkHosts(param.startHr, param.endHr, options).toPromise();
    };
    /**
     * Get hourly usage for profiled hosts.
     * Get hourly usage for profiled hosts
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getUsageProfiling = function (param, options) {
        return this.api.getUsageProfiling(param.startHr, param.endHr, options).toPromise();
    };
    /**
     * Get hourly usage for [RUM](https://docs.datadoghq.com/real_user_monitoring/) Sessions.
     * Get hourly usage for RUM Sessions
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getUsageRumSessions = function (param, options) {
        return this.api.getUsageRumSessions(param.startHr, param.endHr, param.type, options).toPromise();
    };
    /**
     * Get hourly usage for SNMP devices.
     * Get hourly usage for SNMP devices
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getUsageSNMP = function (param, options) {
        return this.api.getUsageSNMP(param.startHr, param.endHr, options).toPromise();
    };
    /**
     * Get usage across your multi-org account. You must have the multi-org feature enabled.
     * Get usage across your multi-org account
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getUsageSummary = function (param, options) {
        return this.api.getUsageSummary(param.startMonth, param.endMonth, param.includeOrgDetails, options).toPromise();
    };
    /**
     * Get hourly usage for [Synthetics checks](https://docs.datadoghq.com/synthetics/).
     * Get hourly usage for Synthetics Checks
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getUsageSynthetics = function (param, options) {
        return this.api.getUsageSynthetics(param.startHr, param.endHr, options).toPromise();
    };
    /**
     * Get hourly usage for [synthetics API checks](https://docs.datadoghq.com/synthetics/).
     * Get hourly usage for Synthetics API Checks
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getUsageSyntheticsAPI = function (param, options) {
        return this.api.getUsageSyntheticsAPI(param.startHr, param.endHr, options).toPromise();
    };
    /**
     * Get hourly usage for synthetics browser checks.
     * Get hourly usage for Synthetics Browser Checks
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getUsageSyntheticsBrowser = function (param, options) {
        return this.api.getUsageSyntheticsBrowser(param.startHr, param.endHr, options).toPromise();
    };
    /**
     * Get hourly usage for [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/).
     * Get hourly usage for custom metrics
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getUsageTimeseries = function (param, options) {
        return this.api.getUsageTimeseries(param.startHr, param.endHr, options).toPromise();
    };
    /**
     * Get all [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/) by hourly average. Use the month parameter to get a month-to-date data resolution or use the day parameter to get a daily resolution. One of the two is required, and only one of the two is allowed.
     * Get all custom metrics by hourly average
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getUsageTopAvgMetrics = function (param, options) {
        return this.api.getUsageTopAvgMetrics(param.month, param.day, param.names, param.limit, param.nextRecordId, options).toPromise();
    };
    /**
     * Get hourly usage for trace search.  **Note** This endpoint has been renamed to `/api/v1/usage/indexed-spans`.
     * Get hourly usage for Trace Search
     * @param param the request object
     */
    ObjectUsageMeteringApi.prototype.getUsageTrace = function (param, options) {
        return this.api.getUsageTrace(param.startHr, param.endHr, options).toPromise();
    };
    return ObjectUsageMeteringApi;
}());
exports.ObjectUsageMeteringApi = ObjectUsageMeteringApi;
var ObservableAPI_29 = require("./ObservableAPI");
var ObjectUsersApi = /** @class */ (function () {
    function ObjectUsersApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_29.ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Create a user for your organization.  **Note**: Users can only be created with the admin access role if application keys belong to administrators.
     * Create a user
     * @param param the request object
     */
    ObjectUsersApi.prototype.createUser = function (param, options) {
        return this.api.createUser(param.body, options).toPromise();
    };
    /**
     * Delete a user from an organization.  **Note**: This endpoint can only be used with application keys belonging to administrators.
     * Disable a user
     * @param param the request object
     */
    ObjectUsersApi.prototype.disableUser = function (param, options) {
        return this.api.disableUser(param.userHandle, options).toPromise();
    };
    /**
     * Get a user's details.
     * Get user details
     * @param param the request object
     */
    ObjectUsersApi.prototype.getUser = function (param, options) {
        return this.api.getUser(param.userHandle, options).toPromise();
    };
    /**
     * List all users for your organization.
     * List all users
     * @param param the request object
     */
    ObjectUsersApi.prototype.listUsers = function (param, options) {
        return this.api.listUsers(options).toPromise();
    };
    /**
     * Update a user information.  **Note**: It can only be used with application keys belonging to administrators.
     * Update a user
     * @param param the request object
     */
    ObjectUsersApi.prototype.updateUser = function (param, options) {
        return this.api.updateUser(param.userHandle, param.body, options).toPromise();
    };
    return ObjectUsersApi;
}());
exports.ObjectUsersApi = ObjectUsersApi;
//# sourceMappingURL=ObjectParamAPI.js.map