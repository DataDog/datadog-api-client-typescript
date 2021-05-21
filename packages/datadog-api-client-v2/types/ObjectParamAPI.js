"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectUsersApi = exports.ObjectSecurityMonitoringApi = exports.ObjectRolesApi = exports.ObjectProcessesApi = exports.ObjectMetricsApi = exports.ObjectLogsMetricsApi = exports.ObjectLogsArchivesApi = exports.ObjectLogsApi = exports.ObjectKeyManagementApi = exports.ObjectIncidentsApi = exports.ObjectIncidentTeamsApi = exports.ObjectIncidentServicesApi = exports.ObjectDashboardListsApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var ObjectDashboardListsApi = /** @class */ (function () {
    function ObjectDashboardListsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableDashboardListsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Add dashboards to an existing dashboard list.
     * Add Items to a Dashboard List
     * @param param the request object
     */
    ObjectDashboardListsApi.prototype.createDashboardListItems = function (param, options) {
        return this.api.createDashboardListItems(param.dashboardListId, param.body, options).toPromise();
    };
    /**
     * Delete dashboards from an existing dashboard list.
     * Delete items from a dashboard list
     * @param param the request object
     */
    ObjectDashboardListsApi.prototype.deleteDashboardListItems = function (param, options) {
        return this.api.deleteDashboardListItems(param.dashboardListId, param.body, options).toPromise();
    };
    /**
     * Fetch the dashboard list’s dashboard definitions.
     * Get items of a Dashboard List
     * @param param the request object
     */
    ObjectDashboardListsApi.prototype.getDashboardListItems = function (param, options) {
        return this.api.getDashboardListItems(param.dashboardListId, options).toPromise();
    };
    /**
     * Update dashboards of an existing dashboard list.
     * Update items of a dashboard list
     * @param param the request object
     */
    ObjectDashboardListsApi.prototype.updateDashboardListItems = function (param, options) {
        return this.api.updateDashboardListItems(param.dashboardListId, param.body, options).toPromise();
    };
    return ObjectDashboardListsApi;
}());
exports.ObjectDashboardListsApi = ObjectDashboardListsApi;
var ObservableAPI_2 = require("./ObservableAPI");
var ObjectIncidentServicesApi = /** @class */ (function () {
    function ObjectIncidentServicesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableIncidentServicesApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Creates a new incident service.
     * Create a new incident service
     * @param param the request object
     */
    ObjectIncidentServicesApi.prototype.createIncidentService = function (param, options) {
        return this.api.createIncidentService(param.body, options).toPromise();
    };
    /**
     * Deletes an existing incident service.
     * Delete an existing incident service
     * @param param the request object
     */
    ObjectIncidentServicesApi.prototype.deleteIncidentService = function (param, options) {
        return this.api.deleteIncidentService(param.serviceId, options).toPromise();
    };
    /**
     * Get details of an incident service. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident services.
     * Get details of an incident service
     * @param param the request object
     */
    ObjectIncidentServicesApi.prototype.getIncidentService = function (param, options) {
        return this.api.getIncidentService(param.serviceId, param.include, options).toPromise();
    };
    /**
     * Get all incident services uploaded for the requesting user's organization. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident services.
     * Get a list of all incident services
     * @param param the request object
     */
    ObjectIncidentServicesApi.prototype.listIncidentServices = function (param, options) {
        return this.api.listIncidentServices(param.include, param.pageSize, param.pageOffset, param.filter, options).toPromise();
    };
    /**
     * Updates an existing incident service. Only provide the attributes which should be updated as this request is a partial update.
     * Update an existing incident service
     * @param param the request object
     */
    ObjectIncidentServicesApi.prototype.updateIncidentService = function (param, options) {
        return this.api.updateIncidentService(param.serviceId, param.body, options).toPromise();
    };
    return ObjectIncidentServicesApi;
}());
exports.ObjectIncidentServicesApi = ObjectIncidentServicesApi;
var ObservableAPI_3 = require("./ObservableAPI");
var ObjectIncidentTeamsApi = /** @class */ (function () {
    function ObjectIncidentTeamsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableIncidentTeamsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Creates a new incident team.
     * Create a new incident team
     * @param param the request object
     */
    ObjectIncidentTeamsApi.prototype.createIncidentTeam = function (param, options) {
        return this.api.createIncidentTeam(param.body, options).toPromise();
    };
    /**
     * Deletes an existing incident team.
     * Delete an existing incident team
     * @param param the request object
     */
    ObjectIncidentTeamsApi.prototype.deleteIncidentTeam = function (param, options) {
        return this.api.deleteIncidentTeam(param.teamId, options).toPromise();
    };
    /**
     * Get details of an incident team. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident teams.
     * Get details of an incident team
     * @param param the request object
     */
    ObjectIncidentTeamsApi.prototype.getIncidentTeam = function (param, options) {
        return this.api.getIncidentTeam(param.teamId, param.include, options).toPromise();
    };
    /**
     * Get all incident teams for the requesting user's organization. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident teams.
     * Get a list of all incident teams
     * @param param the request object
     */
    ObjectIncidentTeamsApi.prototype.listIncidentTeams = function (param, options) {
        return this.api.listIncidentTeams(param.include, param.pageSize, param.pageOffset, param.filter, options).toPromise();
    };
    /**
     * Updates an existing incident team. Only provide the attributes which should be updated as this request is a partial update.
     * Update an existing incident team
     * @param param the request object
     */
    ObjectIncidentTeamsApi.prototype.updateIncidentTeam = function (param, options) {
        return this.api.updateIncidentTeam(param.teamId, param.body, options).toPromise();
    };
    return ObjectIncidentTeamsApi;
}());
exports.ObjectIncidentTeamsApi = ObjectIncidentTeamsApi;
var ObservableAPI_4 = require("./ObservableAPI");
var ObjectIncidentsApi = /** @class */ (function () {
    function ObjectIncidentsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableIncidentsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Create an incident.
     * Create an incident
     * @param param the request object
     */
    ObjectIncidentsApi.prototype.createIncident = function (param, options) {
        return this.api.createIncident(param.body, options).toPromise();
    };
    /**
     * Deletes an existing incident from the users organization.
     * Delete an existing incident
     * @param param the request object
     */
    ObjectIncidentsApi.prototype.deleteIncident = function (param, options) {
        return this.api.deleteIncident(param.incidentId, options).toPromise();
    };
    /**
     * Get the details of an incident by `incident_id`.
     * Get the details of an incident
     * @param param the request object
     */
    ObjectIncidentsApi.prototype.getIncident = function (param, options) {
        return this.api.getIncident(param.incidentId, param.include, options).toPromise();
    };
    /**
     * Get all incidents for the user's organization.
     * Get a list of incidents
     * @param param the request object
     */
    ObjectIncidentsApi.prototype.listIncidents = function (param, options) {
        return this.api.listIncidents(param.include, param.pageSize, param.pageOffset, options).toPromise();
    };
    /**
     * Updates an incident. Provide only the attributes that should be updated as this request is a partial update.
     * Update an existing incident
     * @param param the request object
     */
    ObjectIncidentsApi.prototype.updateIncident = function (param, options) {
        return this.api.updateIncident(param.incidentId, param.body, options).toPromise();
    };
    return ObjectIncidentsApi;
}());
exports.ObjectIncidentsApi = ObjectIncidentsApi;
var ObservableAPI_5 = require("./ObservableAPI");
var ObjectKeyManagementApi = /** @class */ (function () {
    function ObjectKeyManagementApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableKeyManagementApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Create an API key.
     * Create an API key
     * @param param the request object
     */
    ObjectKeyManagementApi.prototype.createAPIKey = function (param, options) {
        return this.api.createAPIKey(param.body, options).toPromise();
    };
    /**
     * Create an application key for current user
     * Create an application key for current user
     * @param param the request object
     */
    ObjectKeyManagementApi.prototype.createCurrentUserApplicationKey = function (param, options) {
        return this.api.createCurrentUserApplicationKey(param.body, options).toPromise();
    };
    /**
     * Delete an API key.
     * Delete an API key
     * @param param the request object
     */
    ObjectKeyManagementApi.prototype.deleteAPIKey = function (param, options) {
        return this.api.deleteAPIKey(param.apiKeyId, options).toPromise();
    };
    /**
     * Delete an application key
     * Delete an application key
     * @param param the request object
     */
    ObjectKeyManagementApi.prototype.deleteApplicationKey = function (param, options) {
        return this.api.deleteApplicationKey(param.appKeyId, options).toPromise();
    };
    /**
     * Delete an application key owned by current user
     * Delete an application key owned by current user
     * @param param the request object
     */
    ObjectKeyManagementApi.prototype.deleteCurrentUserApplicationKey = function (param, options) {
        return this.api.deleteCurrentUserApplicationKey(param.appKeyId, options).toPromise();
    };
    /**
     * Get an API key.
     * Get API key
     * @param param the request object
     */
    ObjectKeyManagementApi.prototype.getAPIKey = function (param, options) {
        return this.api.getAPIKey(param.apiKeyId, param.include, options).toPromise();
    };
    /**
     * Get an application key owned by current user
     * Get one application key owned by current user
     * @param param the request object
     */
    ObjectKeyManagementApi.prototype.getCurrentUserApplicationKey = function (param, options) {
        return this.api.getCurrentUserApplicationKey(param.appKeyId, options).toPromise();
    };
    /**
     * List all API keys available for your account.
     * Get all API keys
     * @param param the request object
     */
    ObjectKeyManagementApi.prototype.listAPIKeys = function (param, options) {
        return this.api.listAPIKeys(param.pageSize, param.pageNumber, param.sort, param.filter, param.filterCreatedAtStart, param.filterCreatedAtEnd, param.filterModifiedAtStart, param.filterModifiedAtEnd, param.include, options).toPromise();
    };
    /**
     * List all application keys available for your org
     * Get all application keys
     * @param param the request object
     */
    ObjectKeyManagementApi.prototype.listApplicationKeys = function (param, options) {
        return this.api.listApplicationKeys(param.pageSize, param.pageNumber, param.sort, param.filter, param.filterCreatedAtStart, param.filterCreatedAtEnd, options).toPromise();
    };
    /**
     * List all application keys available for current user
     * Get all application keys owned by current user
     * @param param the request object
     */
    ObjectKeyManagementApi.prototype.listCurrentUserApplicationKeys = function (param, options) {
        return this.api.listCurrentUserApplicationKeys(param.pageSize, param.pageNumber, param.sort, param.filter, param.filterCreatedAtStart, param.filterCreatedAtEnd, options).toPromise();
    };
    /**
     * Update an API key.
     * Edit an API key
     * @param param the request object
     */
    ObjectKeyManagementApi.prototype.updateAPIKey = function (param, options) {
        return this.api.updateAPIKey(param.apiKeyId, param.body, options).toPromise();
    };
    /**
     * Edit an application key
     * Edit an application key
     * @param param the request object
     */
    ObjectKeyManagementApi.prototype.updateApplicationKey = function (param, options) {
        return this.api.updateApplicationKey(param.appKeyId, param.body, options).toPromise();
    };
    /**
     * Edit an application key owned by current user
     * Edit an application key owned by current user
     * @param param the request object
     */
    ObjectKeyManagementApi.prototype.updateCurrentUserApplicationKey = function (param, options) {
        return this.api.updateCurrentUserApplicationKey(param.appKeyId, param.body, options).toPromise();
    };
    return ObjectKeyManagementApi;
}());
exports.ObjectKeyManagementApi = ObjectKeyManagementApi;
var ObservableAPI_6 = require("./ObservableAPI");
var ObjectLogsApi = /** @class */ (function () {
    function ObjectLogsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableLogsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * The API endpoint to aggregate events into buckets and compute metrics and timeseries.
     * Aggregate events
     * @param param the request object
     */
    ObjectLogsApi.prototype.aggregateLogs = function (param, options) {
        return this.api.aggregateLogs(param.body, options).toPromise();
    };
    /**
     * List endpoint returns logs that match a log search query. [Results are paginated][1].  Use this endpoint to build complex logs filtering and search.  **If you are considering archiving logs for your organization, consider use of the Datadog archive capabilities instead of the log list API. See [Datadog Logs Archive documentation][2].**  [1]: /logs/guide/collect-multiple-logs-with-pagination [2]: https://docs.datadoghq.com/logs/archives
     * Search logs
     * @param param the request object
     */
    ObjectLogsApi.prototype.listLogs = function (param, options) {
        return this.api.listLogs(param.body, options).toPromise();
    };
    /**
     * List endpoint returns logs that match a log search query. [Results are paginated][1].  Use this endpoint to see your latest logs.  **If you are considering archiving logs for your organization, consider use of the Datadog archive capabilities instead of the log list API. See [Datadog Logs Archive documentation][2].**  [1]: /logs/guide/collect-multiple-logs-with-pagination [2]: https://docs.datadoghq.com/logs/archives
     * Get a list of logs
     * @param param the request object
     */
    ObjectLogsApi.prototype.listLogsGet = function (param, options) {
        return this.api.listLogsGet(param.filterQuery, param.filterIndex, param.filterFrom, param.filterTo, param.sort, param.pageCursor, param.pageLimit, options).toPromise();
    };
    return ObjectLogsApi;
}());
exports.ObjectLogsApi = ObjectLogsApi;
var ObservableAPI_7 = require("./ObservableAPI");
var ObjectLogsArchivesApi = /** @class */ (function () {
    function ObjectLogsArchivesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableLogsArchivesApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Adds a read role to an archive. ([Roles API](https://docs.datadoghq.com/api/v2/roles/))
     * Grant role to an archive
     * @param param the request object
     */
    ObjectLogsArchivesApi.prototype.addReadRoleToArchive = function (param, options) {
        return this.api.addReadRoleToArchive(param.archiveId, param.body, options).toPromise();
    };
    /**
     * Create an archive in your organization.
     * Create an archive
     * @param param the request object
     */
    ObjectLogsArchivesApi.prototype.createLogsArchive = function (param, options) {
        return this.api.createLogsArchive(param.body, options).toPromise();
    };
    /**
     * Delete a given archive from your organization.
     * Delete an archive
     * @param param the request object
     */
    ObjectLogsArchivesApi.prototype.deleteLogsArchive = function (param, options) {
        return this.api.deleteLogsArchive(param.archiveId, options).toPromise();
    };
    /**
     * Get a specific archive from your organization.
     * Get an archive
     * @param param the request object
     */
    ObjectLogsArchivesApi.prototype.getLogsArchive = function (param, options) {
        return this.api.getLogsArchive(param.archiveId, options).toPromise();
    };
    /**
     * Get the current order of your archives. This endpoint takes no JSON arguments.
     * Get archive order
     * @param param the request object
     */
    ObjectLogsArchivesApi.prototype.getLogsArchiveOrder = function (param, options) {
        return this.api.getLogsArchiveOrder(options).toPromise();
    };
    /**
     * Returns all read roles a given archive is restricted to.
     * List read roles for an archive
     * @param param the request object
     */
    ObjectLogsArchivesApi.prototype.listArchiveReadRoles = function (param, options) {
        return this.api.listArchiveReadRoles(param.archiveId, options).toPromise();
    };
    /**
     * Get the list of configured logs archives with their definitions.
     * Get all archives
     * @param param the request object
     */
    ObjectLogsArchivesApi.prototype.listLogsArchives = function (param, options) {
        return this.api.listLogsArchives(options).toPromise();
    };
    /**
     * Removes a role from an archive. ([Roles API](https://docs.datadoghq.com/api/v2/roles/))
     * Revoke role from an archive
     * @param param the request object
     */
    ObjectLogsArchivesApi.prototype.removeRoleFromArchive = function (param, options) {
        return this.api.removeRoleFromArchive(param.archiveId, param.body, options).toPromise();
    };
    /**
     * Update a given archive configuration.  **Note**: Using this method updates your archive configuration by **replacing** your current configuration with the new one sent to your Datadog organization.
     * Update an archive
     * @param param the request object
     */
    ObjectLogsArchivesApi.prototype.updateLogsArchive = function (param, options) {
        return this.api.updateLogsArchive(param.archiveId, param.body, options).toPromise();
    };
    /**
     * Update the order of your archives. Since logs are processed sequentially, reordering an archive may change the structure and content of the data processed by other archives.  **Note**: Using the `PUT` method updates your archive's order by replacing the current order with the new one.
     * Update archive order
     * @param param the request object
     */
    ObjectLogsArchivesApi.prototype.updateLogsArchiveOrder = function (param, options) {
        return this.api.updateLogsArchiveOrder(param.body, options).toPromise();
    };
    return ObjectLogsArchivesApi;
}());
exports.ObjectLogsArchivesApi = ObjectLogsArchivesApi;
var ObservableAPI_8 = require("./ObservableAPI");
var ObjectLogsMetricsApi = /** @class */ (function () {
    function ObjectLogsMetricsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableLogsMetricsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Create a metric based on your ingested logs in your organization. Returns the log-based metric object from the request body when the request is successful.
     * Create a log-based metric
     * @param param the request object
     */
    ObjectLogsMetricsApi.prototype.createLogsMetric = function (param, options) {
        return this.api.createLogsMetric(param.body, options).toPromise();
    };
    /**
     * Delete a specific log-based metric from your organization.
     * Delete a log-based metric
     * @param param the request object
     */
    ObjectLogsMetricsApi.prototype.deleteLogsMetric = function (param, options) {
        return this.api.deleteLogsMetric(param.metricId, options).toPromise();
    };
    /**
     * Get a specific log-based metric from your organization.
     * Get a log-based metric
     * @param param the request object
     */
    ObjectLogsMetricsApi.prototype.getLogsMetric = function (param, options) {
        return this.api.getLogsMetric(param.metricId, options).toPromise();
    };
    /**
     * Get the list of configured log-based metrics with their definitions.
     * Get all log-based metrics
     * @param param the request object
     */
    ObjectLogsMetricsApi.prototype.listLogsMetrics = function (param, options) {
        return this.api.listLogsMetrics(options).toPromise();
    };
    /**
     * Update a specific log-based metric from your organization. Returns the log-based metric object from the request body when the request is successful.
     * Update a log-based metric
     * @param param the request object
     */
    ObjectLogsMetricsApi.prototype.updateLogsMetric = function (param, options) {
        return this.api.updateLogsMetric(param.metricId, param.body, options).toPromise();
    };
    return ObjectLogsMetricsApi;
}());
exports.ObjectLogsMetricsApi = ObjectLogsMetricsApi;
var ObservableAPI_9 = require("./ObservableAPI");
var ObjectMetricsApi = /** @class */ (function () {
    function ObjectMetricsApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableMetricsApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Create and define a list of queryable tag keys for an existing count/gauge/rate/distribution metric. Optionally, include percentile aggregations on any distribution metric. Can only be used with application keys of users with the `Manage Tags for Metrics` permission.
     * Create a tag configuration
     * @param param the request object
     */
    ObjectMetricsApi.prototype.createTagConfiguration = function (param, options) {
        return this.api.createTagConfiguration(param.metricName, param.body, options).toPromise();
    };
    /**
     * Deletes a metric's tag configuration. Can only be used with application keys from users with the `Manage Tags for Metrics` permission.
     * Delete a tag configuration
     * @param param the request object
     */
    ObjectMetricsApi.prototype.deleteTagConfiguration = function (param, options) {
        return this.api.deleteTagConfiguration(param.metricName, options).toPromise();
    };
    /**
     * Returns the tag configuration for the given metric name.
     * List tag configuration by name
     * @param param the request object
     */
    ObjectMetricsApi.prototype.listTagConfigurationByName = function (param, options) {
        return this.api.listTagConfigurationByName(param.metricName, options).toPromise();
    };
    /**
     * Returns all configured count/gauge/rate/distribution metric names (with additional filters if specified).
     * List tag configurations
     * @param param the request object
     */
    ObjectMetricsApi.prototype.listTagConfigurations = function (param, options) {
        return this.api.listTagConfigurations(param.filterConfigured, param.filterTagsConfigured, param.filterMetricType, param.filterIncludePercentiles, param.filterTags, param.windowSeconds, options).toPromise();
    };
    /**
     * View indexed tag key-value pairs for a given metric name.
     * List tags by metric name
     * @param param the request object
     */
    ObjectMetricsApi.prototype.listTagsByMetricName = function (param, options) {
        return this.api.listTagsByMetricName(param.metricName, options).toPromise();
    };
    /**
     * View distinct metrics volumes for the given metric name.  Custom distribution metrics will return both ingested and indexed custom metric volumes. For Metrics without Limits&trade; beta customers, all metrics will return both ingested/indexed volumes. Custom metrics generated in-app from other products will return `null` for ingested volumes.
     * List distinct metric volumes by metric name
     * @param param the request object
     */
    ObjectMetricsApi.prototype.listVolumesByMetricName = function (param, options) {
        return this.api.listVolumesByMetricName(param.metricName, options).toPromise();
    };
    /**
     * Update the tag configuration of a metric or percentile aggregations of a distribution metric. Can only be used with application keys from users with the `Manage Tags for Metrics` permission.
     * Update a tag configuration
     * @param param the request object
     */
    ObjectMetricsApi.prototype.updateTagConfiguration = function (param, options) {
        return this.api.updateTagConfiguration(param.metricName, param.body, options).toPromise();
    };
    return ObjectMetricsApi;
}());
exports.ObjectMetricsApi = ObjectMetricsApi;
var ObservableAPI_10 = require("./ObservableAPI");
var ObjectProcessesApi = /** @class */ (function () {
    function ObjectProcessesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_10.ObservableProcessesApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Get all processes for your organization.
     * Get all processes
     * @param param the request object
     */
    ObjectProcessesApi.prototype.listProcesses = function (param, options) {
        return this.api.listProcesses(param.search, param.tags, param.from, param.to, param.pageLimit, param.pageCursor, options).toPromise();
    };
    return ObjectProcessesApi;
}());
exports.ObjectProcessesApi = ObjectProcessesApi;
var ObservableAPI_11 = require("./ObservableAPI");
var ObjectRolesApi = /** @class */ (function () {
    function ObjectRolesApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_11.ObservableRolesApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Adds a permission to a role.
     * Grant permission to a role
     * @param param the request object
     */
    ObjectRolesApi.prototype.addPermissionToRole = function (param, options) {
        return this.api.addPermissionToRole(param.roleId, param.body, options).toPromise();
    };
    /**
     * Adds a user to a role.
     * Add a user to a role
     * @param param the request object
     */
    ObjectRolesApi.prototype.addUserToRole = function (param, options) {
        return this.api.addUserToRole(param.roleId, param.body, options).toPromise();
    };
    /**
     * Create a new role for your organization.
     * Create role
     * @param param the request object
     */
    ObjectRolesApi.prototype.createRole = function (param, options) {
        return this.api.createRole(param.body, options).toPromise();
    };
    /**
     * Disables a role.
     * Delete role
     * @param param the request object
     */
    ObjectRolesApi.prototype.deleteRole = function (param, options) {
        return this.api.deleteRole(param.roleId, options).toPromise();
    };
    /**
     * Get a role in the organization specified by the role’s `role_id`.
     * Get a role
     * @param param the request object
     */
    ObjectRolesApi.prototype.getRole = function (param, options) {
        return this.api.getRole(param.roleId, options).toPromise();
    };
    /**
     * Returns a list of all permissions, including name, description, and ID.
     * List permissions
     * @param param the request object
     */
    ObjectRolesApi.prototype.listPermissions = function (param, options) {
        return this.api.listPermissions(options).toPromise();
    };
    /**
     * Returns a list of all permissions for a single role.
     * List permissions for a role
     * @param param the request object
     */
    ObjectRolesApi.prototype.listRolePermissions = function (param, options) {
        return this.api.listRolePermissions(param.roleId, options).toPromise();
    };
    /**
     * Gets all users of a role.
     * Get all users of a role
     * @param param the request object
     */
    ObjectRolesApi.prototype.listRoleUsers = function (param, options) {
        return this.api.listRoleUsers(param.roleId, param.pageSize, param.pageNumber, param.sort, param.filter, options).toPromise();
    };
    /**
     * Returns all roles, including their names and IDs.
     * List roles
     * @param param the request object
     */
    ObjectRolesApi.prototype.listRoles = function (param, options) {
        return this.api.listRoles(param.pageSize, param.pageNumber, param.sort, param.filter, options).toPromise();
    };
    /**
     * Removes a permission from a role.
     * Revoke permission
     * @param param the request object
     */
    ObjectRolesApi.prototype.removePermissionFromRole = function (param, options) {
        return this.api.removePermissionFromRole(param.roleId, param.body, options).toPromise();
    };
    /**
     * Removes a user from a role.
     * Remove a user from a role
     * @param param the request object
     */
    ObjectRolesApi.prototype.removeUserFromRole = function (param, options) {
        return this.api.removeUserFromRole(param.roleId, param.body, options).toPromise();
    };
    /**
     * Edit a role. Can only be used with application keys belonging to administrators.
     * Update a role
     * @param param the request object
     */
    ObjectRolesApi.prototype.updateRole = function (param, options) {
        return this.api.updateRole(param.roleId, param.body, options).toPromise();
    };
    return ObjectRolesApi;
}());
exports.ObjectRolesApi = ObjectRolesApi;
var ObservableAPI_12 = require("./ObservableAPI");
var ObjectSecurityMonitoringApi = /** @class */ (function () {
    function ObjectSecurityMonitoringApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_12.ObservableSecurityMonitoringApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Create a security filter.
     * Create a security filter
     * @param param the request object
     */
    ObjectSecurityMonitoringApi.prototype.createSecurityFilter = function (param, options) {
        return this.api.createSecurityFilter(param.body, options).toPromise();
    };
    /**
     * Create a detection rule.
     * Create a detection rule
     * @param param the request object
     */
    ObjectSecurityMonitoringApi.prototype.createSecurityMonitoringRule = function (param, options) {
        return this.api.createSecurityMonitoringRule(param.body, options).toPromise();
    };
    /**
     * Delete a specific security filter.
     * Delete a security filter
     * @param param the request object
     */
    ObjectSecurityMonitoringApi.prototype.deleteSecurityFilter = function (param, options) {
        return this.api.deleteSecurityFilter(param.securityFilterId, options).toPromise();
    };
    /**
     * Delete an existing rule. Default rules cannot be deleted.
     * Delete an existing rule
     * @param param the request object
     */
    ObjectSecurityMonitoringApi.prototype.deleteSecurityMonitoringRule = function (param, options) {
        return this.api.deleteSecurityMonitoringRule(param.ruleId, options).toPromise();
    };
    /**
     * Get the details of a specific security filter.
     * Get a security filter
     * @param param the request object
     */
    ObjectSecurityMonitoringApi.prototype.getSecurityFilter = function (param, options) {
        return this.api.getSecurityFilter(param.securityFilterId, options).toPromise();
    };
    /**
     * Get a rule's details.
     * Get a rule's details
     * @param param the request object
     */
    ObjectSecurityMonitoringApi.prototype.getSecurityMonitoringRule = function (param, options) {
        return this.api.getSecurityMonitoringRule(param.ruleId, options).toPromise();
    };
    /**
     * Get the list of configured security filters with their definitions.
     * Get all security filters
     * @param param the request object
     */
    ObjectSecurityMonitoringApi.prototype.listSecurityFilters = function (param, options) {
        return this.api.listSecurityFilters(options).toPromise();
    };
    /**
     * List rules.
     * List rules
     * @param param the request object
     */
    ObjectSecurityMonitoringApi.prototype.listSecurityMonitoringRules = function (param, options) {
        return this.api.listSecurityMonitoringRules(param.pageSize, param.pageNumber, options).toPromise();
    };
    /**
     * The list endpoint returns security signals that match a search query. Both this endpoint and the POST endpoint can be used interchangeably when listing security signals.
     * Get a quick list of security signals
     * @param param the request object
     */
    ObjectSecurityMonitoringApi.prototype.listSecurityMonitoringSignals = function (param, options) {
        return this.api.listSecurityMonitoringSignals(param.filterQuery, param.filterFrom, param.filterTo, param.sort, param.pageCursor, param.pageLimit, options).toPromise();
    };
    /**
     * Returns security signals that match a search query. Both this endpoint and the GET endpoint can be used interchangeably for listing security signals.
     * Get a list of security signals
     * @param param the request object
     */
    ObjectSecurityMonitoringApi.prototype.searchSecurityMonitoringSignals = function (param, options) {
        return this.api.searchSecurityMonitoringSignals(param.body, options).toPromise();
    };
    /**
     * Update a specific security filter. Returns the security filter object when the request is successful.
     * Update a security filter
     * @param param the request object
     */
    ObjectSecurityMonitoringApi.prototype.updateSecurityFilter = function (param, options) {
        return this.api.updateSecurityFilter(param.securityFilterId, param.body, options).toPromise();
    };
    /**
     * Update an existing rule. When updating `cases`, `queries` or `options`, the whole field must be included. For example, when modifying a query all queries must be included. Default rules can only be updated to be enabled and to change notifications.
     * Update an existing rule
     * @param param the request object
     */
    ObjectSecurityMonitoringApi.prototype.updateSecurityMonitoringRule = function (param, options) {
        return this.api.updateSecurityMonitoringRule(param.ruleId, param.body, options).toPromise();
    };
    return ObjectSecurityMonitoringApi;
}());
exports.ObjectSecurityMonitoringApi = ObjectSecurityMonitoringApi;
var ObservableAPI_13 = require("./ObservableAPI");
var ObjectUsersApi = /** @class */ (function () {
    function ObjectUsersApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_13.ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }
    /**
     * Create a user for your organization.
     * Create a user
     * @param param the request object
     */
    ObjectUsersApi.prototype.createUser = function (param, options) {
        return this.api.createUser(param.body, options).toPromise();
    };
    /**
     * Disable a user. Can only be used with an application key belonging to an administrator user.
     * Disable a user
     * @param param the request object
     */
    ObjectUsersApi.prototype.disableUser = function (param, options) {
        return this.api.disableUser(param.userId, options).toPromise();
    };
    /**
     * Returns a single user invitation by its UUID.
     * Get a user invitation
     * @param param the request object
     */
    ObjectUsersApi.prototype.getInvitation = function (param, options) {
        return this.api.getInvitation(param.userInvitationUuid, options).toPromise();
    };
    /**
     * Get a user in the organization specified by the user’s `user_id`.
     * Get user details
     * @param param the request object
     */
    ObjectUsersApi.prototype.getUser = function (param, options) {
        return this.api.getUser(param.userId, options).toPromise();
    };
    /**
     * Get a user organization. Returns the user information and all organizations joined by this user.
     * Get a user organization
     * @param param the request object
     */
    ObjectUsersApi.prototype.listUserOrganizations = function (param, options) {
        return this.api.listUserOrganizations(param.userId, options).toPromise();
    };
    /**
     * Get a user permission set. Returns a list of the user’s permissions granted by the associated user's roles.
     * Get a user permissions
     * @param param the request object
     */
    ObjectUsersApi.prototype.listUserPermissions = function (param, options) {
        return this.api.listUserPermissions(param.userId, options).toPromise();
    };
    /**
     * Get the list of all users in the organization. This list includes all users even if they are deactivated or unverified.
     * List all users
     * @param param the request object
     */
    ObjectUsersApi.prototype.listUsers = function (param, options) {
        return this.api.listUsers(param.pageSize, param.pageNumber, param.sort, param.sortDir, param.filter, param.filterStatus, options).toPromise();
    };
    /**
     * Sends emails to one or more users inviting them to join the organization.
     * Send invitation emails
     * @param param the request object
     */
    ObjectUsersApi.prototype.sendInvitations = function (param, options) {
        return this.api.sendInvitations(param.body, options).toPromise();
    };
    /**
     * Edit a user. Can only be used with an application key belonging to an administrator user.
     * Update a user
     * @param param the request object
     */
    ObjectUsersApi.prototype.updateUser = function (param, options) {
        return this.api.updateUser(param.userId, param.body, options).toPromise();
    };
    return ObjectUsersApi;
}());
exports.ObjectUsersApi = ObjectUsersApi;
//# sourceMappingURL=ObjectParamAPI.js.map