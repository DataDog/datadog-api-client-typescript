export const ScenariosModelMappings: {[key: string]: {[key: string]: {[key: string]: string}}} = {
    "v1.CreateAPIKey": {
            "body": {
                "type": "ApiKey",
                "format": "",
                },
    },
    "v1.DeleteAPIKey": {
            "key": {
                "type": "string",
                "format": "",
                },
    },
    "v1.GetAPIKey": {
            "key": {
                "type": "string",
                "format": "",
                },
    },
    "v1.UpdateAPIKey": {
            "key": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "ApiKey",
                "format": "",
                },
    },
    "v1.CreateApplicationKey": {
            "body": {
                "type": "ApplicationKey",
                "format": "",
                },
    },
    "v1.DeleteApplicationKey": {
            "key": {
                "type": "string",
                "format": "",
                },
    },
    "v1.GetApplicationKey": {
            "key": {
                "type": "string",
                "format": "",
                },
    },
    "v1.UpdateApplicationKey": {
            "key": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "ApplicationKey",
                "format": "",
                },
    },
    "v1.SubmitServiceCheck": {
            "body": {
                "type": "Array<ServiceCheck>",
                "format": "",
                },
    },
    "v1.GetDailyCustomReports": {
            "pageSize": {
                "type": "number",
                "format": "int64",
                },
            "pageNumber": {
                "type": "number",
                "format": "int64",
                },
            "sortDir": {
                "type": "UsageSortDirection",
                "format": "",
                },
            "sort": {
                "type": "UsageSort",
                "format": "",
                },
    },
    "v1.GetSpecifiedDailyCustomReports": {
            "reportId": {
                "type": "string",
                "format": "",
                },
    },
    "v1.GetMonthlyCustomReports": {
            "pageSize": {
                "type": "number",
                "format": "int64",
                },
            "pageNumber": {
                "type": "number",
                "format": "int64",
                },
            "sortDir": {
                "type": "UsageSortDirection",
                "format": "",
                },
            "sort": {
                "type": "UsageSort",
                "format": "",
                },
    },
    "v1.GetSpecifiedMonthlyCustomReports": {
            "reportId": {
                "type": "string",
                "format": "",
                },
    },
    "v1.GetUsageAnalyzedLogs": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v1.GetUsageAttribution": {
            "startMonth": {
                "type": "Date",
                "format": "date-time",
                },
            "fields": {
                "type": "UsageAttributionSupportedMetrics",
                "format": "",
                },
            "endMonth": {
                "type": "Date",
                "format": "date-time",
                },
            "sortDirection": {
                "type": "UsageSortDirection",
                "format": "",
                },
            "sortName": {
                "type": "UsageAttributionSort",
                "format": "",
                },
            "includeDescendants": {
                "type": "boolean",
                "format": "",
                },
            "offset": {
                "type": "number",
                "format": "int64",
                },
            "limit": {
                "type": "number",
                "format": "int64",
                },
    },
    "v1.GetUsageAuditLogs": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v1.GetUsageLambda": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v1.GetUsageBillableSummary": {
            "month": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v1.GetUsageCIApp": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v1.GetUsageCloudSecurityPostureManagement": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v1.GetUsageCWS": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v1.GetUsageDBM": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v1.GetUsageFargate": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v1.GetUsageHosts": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v1.GetHourlyUsageAttribution": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
            "usageType": {
                "type": "HourlyUsageAttributionUsageType",
                "format": "",
                },
            "nextRecordId": {
                "type": "string",
                "format": "",
                },
            "tagBreakdownKeys": {
                "type": "string",
                "format": "",
                },
            "includeDescendants": {
                "type": "boolean",
                "format": "",
                },
    },
    "v1.GetIncidentManagement": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v1.GetUsageIndexedSpans": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v1.GetIngestedSpans": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v1.GetUsageInternetOfThings": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v1.GetUsageLogs": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v1.GetUsageLogsByRetention": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v1.GetUsageLogsByIndex": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
            "indexName": {
                "type": "Array<string>",
                "format": "",
                },
    },
    "v1.GetMonthlyUsageAttribution": {
            "startMonth": {
                "type": "Date",
                "format": "date-time",
                },
            "endMonth": {
                "type": "Date",
                "format": "date-time",
                },
            "fields": {
                "type": "MonthlyUsageAttributionSupportedMetrics",
                "format": "",
                },
            "sortDirection": {
                "type": "UsageSortDirection",
                "format": "",
                },
            "sortName": {
                "type": "MonthlyUsageAttributionSupportedMetrics",
                "format": "",
                },
            "tagBreakdownKeys": {
                "type": "string",
                "format": "",
                },
            "nextRecordId": {
                "type": "string",
                "format": "",
                },
            "includeDescendants": {
                "type": "boolean",
                "format": "",
                },
    },
    "v1.GetUsageNetworkFlows": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v1.GetUsageNetworkHosts": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v1.GetUsageOnlineArchive": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v1.GetUsageProfiling": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v1.GetUsageRumUnits": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v1.GetUsageRumSessions": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
            "type": {
                "type": "string",
                "format": "",
                },
    },
    "v1.GetUsageSDS": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v1.GetUsageSNMP": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v1.GetUsageSummary": {
            "startMonth": {
                "type": "Date",
                "format": "date-time",
                },
            "endMonth": {
                "type": "Date",
                "format": "date-time",
                },
            "includeOrgDetails": {
                "type": "boolean",
                "format": "",
                },
    },
    "v1.GetUsageSynthetics": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v1.GetUsageSyntheticsAPI": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v1.GetUsageSyntheticsBrowser": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v1.GetUsageTimeseries": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v1.GetUsageTopAvgMetrics": {
            "month": {
                "type": "Date",
                "format": "date-time",
                },
            "day": {
                "type": "Date",
                "format": "date-time",
                },
            "names": {
                "type": "Array<string>",
                "format": "",
                },
            "limit": {
                "type": "number",
                "format": "int32",
                },
            "nextRecordId": {
                "type": "string",
                "format": "",
                },
    },
    "v1.DeleteDashboards": {
            "body": {
                "type": "DashboardBulkDeleteRequest",
                "format": "",
                },
    },
    "v1.ListDashboards": {
            "filterShared": {
                "type": "boolean",
                "format": "",
                },
            "filterDeleted": {
                "type": "boolean",
                "format": "",
                },
    },
    "v1.RestoreDashboards": {
            "body": {
                "type": "DashboardRestoreRequest",
                "format": "",
                },
    },
    "v1.CreateDashboard": {
            "body": {
                "type": "Dashboard",
                "format": "",
                },
    },
    "v1.DeleteDashboard": {
            "dashboardId": {
                "type": "string",
                "format": "",
                },
    },
    "v1.GetDashboard": {
            "dashboardId": {
                "type": "string",
                "format": "",
                },
    },
    "v1.UpdateDashboard": {
            "dashboardId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "Dashboard",
                "format": "",
                },
    },
    "v1.CreateDashboardList": {
            "body": {
                "type": "DashboardList",
                "format": "",
                },
    },
    "v1.DeleteDashboardList": {
            "listId": {
                "type": "number",
                "format": "int64",
                },
    },
    "v1.GetDashboardList": {
            "listId": {
                "type": "number",
                "format": "int64",
                },
    },
    "v1.UpdateDashboardList": {
            "listId": {
                "type": "number",
                "format": "int64",
                },
            "body": {
                "type": "DashboardList",
                "format": "",
                },
    },
    "v1.SubmitDistributionPoints": {
            "contentEncoding": {
                "type": "DistributionPointsContentEncoding",
                "format": "",
                },
            "body": {
                "type": "DistributionPointsPayload",
                "format": "",
                },
    },
    "v1.ListActiveMetrics": {
            "from": {
                "type": "number",
                "format": "int64",
                },
            "host": {
                "type": "string",
                "format": "",
                },
            "tagFilter": {
                "type": "string",
                "format": "",
                },
    },
    "v1.GetMetricMetadata": {
            "metricName": {
                "type": "string",
                "format": "",
                },
    },
    "v1.UpdateMetricMetadata": {
            "metricName": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "MetricMetadata",
                "format": "",
                },
    },
    "v1.QueryMetrics": {
            "from": {
                "type": "number",
                "format": "int64",
                },
            "to": {
                "type": "number",
                "format": "int64",
                },
            "query": {
                "type": "string",
                "format": "",
                },
    },
    "v1.ListMetrics": {
            "q": {
                "type": "string",
                "format": "",
                },
    },
    "v1.SubmitMetrics": {
            "contentEncoding": {
                "type": "MetricContentEncoding",
                "format": "",
                },
            "body": {
                "type": "MetricsPayload",
                "format": "",
                },
    },
    "v1.ListDowntimes": {
            "currentOnly": {
                "type": "boolean",
                "format": "",
                },
    },
    "v1.CreateDowntime": {
            "body": {
                "type": "Downtime",
                "format": "",
                },
    },
    "v1.CancelDowntimesByScope": {
            "body": {
                "type": "CancelDowntimesByScopeRequest",
                "format": "",
                },
    },
    "v1.CancelDowntime": {
            "downtimeId": {
                "type": "number",
                "format": "int64",
                },
    },
    "v1.GetDowntime": {
            "downtimeId": {
                "type": "number",
                "format": "int64",
                },
    },
    "v1.UpdateDowntime": {
            "downtimeId": {
                "type": "number",
                "format": "int64",
                },
            "body": {
                "type": "Downtime",
                "format": "",
                },
    },
    "v1.ListMonitorDowntimes": {
            "monitorId": {
                "type": "number",
                "format": "int64",
                },
    },
    "v1.ListEvents": {
            "start": {
                "type": "number",
                "format": "int64",
                },
            "end": {
                "type": "number",
                "format": "int64",
                },
            "priority": {
                "type": "EventPriority",
                "format": "",
                },
            "sources": {
                "type": "string",
                "format": "",
                },
            "tags": {
                "type": "string",
                "format": "",
                },
            "unaggregated": {
                "type": "boolean",
                "format": "",
                },
            "excludeAggregate": {
                "type": "boolean",
                "format": "",
                },
            "page": {
                "type": "number",
                "format": "int32",
                },
    },
    "v1.CreateEvent": {
            "body": {
                "type": "EventCreateRequest",
                "format": "",
                },
    },
    "v1.GetEvent": {
            "eventId": {
                "type": "number",
                "format": "int64",
                },
    },
    "v1.GetGraphSnapshot": {
            "metricQuery": {
                "type": "string",
                "format": "",
                },
            "start": {
                "type": "number",
                "format": "int64",
                },
            "end": {
                "type": "number",
                "format": "int64",
                },
            "eventQuery": {
                "type": "string",
                "format": "",
                },
            "graphDef": {
                "type": "string",
                "format": "",
                },
            "title": {
                "type": "string",
                "format": "",
                },
            "height": {
                "type": "number",
                "format": "int64",
                },
            "width": {
                "type": "number",
                "format": "int64",
                },
    },
    "v1.MuteHost": {
            "hostName": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "HostMuteSettings",
                "format": "",
                },
    },
    "v1.UnmuteHost": {
            "hostName": {
                "type": "string",
                "format": "",
                },
    },
    "v1.ListHosts": {
            "filter": {
                "type": "string",
                "format": "",
                },
            "sortField": {
                "type": "string",
                "format": "",
                },
            "sortDir": {
                "type": "string",
                "format": "",
                },
            "start": {
                "type": "number",
                "format": "int64",
                },
            "count": {
                "type": "number",
                "format": "int64",
                },
            "from": {
                "type": "number",
                "format": "int64",
                },
            "includeMutedHostsData": {
                "type": "boolean",
                "format": "",
                },
            "includeHostsMetadata": {
                "type": "boolean",
                "format": "",
                },
    },
    "v1.GetHostTotals": {
            "from": {
                "type": "number",
                "format": "int64",
                },
    },
    "v1.DeleteAWSAccount": {
            "body": {
                "type": "AWSAccountDeleteRequest",
                "format": "",
                },
    },
    "v1.ListAWSAccounts": {
            "accountId": {
                "type": "string",
                "format": "",
                },
            "roleName": {
                "type": "string",
                "format": "",
                },
            "accessKeyId": {
                "type": "string",
                "format": "",
                },
    },
    "v1.CreateAWSAccount": {
            "body": {
                "type": "AWSAccount",
                "format": "",
                },
    },
    "v1.UpdateAWSAccount": {
            "accountId": {
                "type": "string",
                "format": "",
                },
            "roleName": {
                "type": "string",
                "format": "",
                },
            "accessKeyId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "AWSAccount",
                "format": "",
                },
    },
    "v1.DeleteAWSTagFilter": {
            "body": {
                "type": "AWSTagFilterDeleteRequest",
                "format": "",
                },
    },
    "v1.ListAWSTagFilters": {
            "accountId": {
                "type": "string",
                "format": "",
                },
    },
    "v1.CreateAWSTagFilter": {
            "body": {
                "type": "AWSTagFilterCreateRequest",
                "format": "",
                },
    },
    "v1.CreateNewAWSExternalID": {
            "body": {
                "type": "AWSAccount",
                "format": "",
                },
    },
    "v1.DeleteAWSLambdaARN": {
            "body": {
                "type": "AWSAccountAndLambdaRequest",
                "format": "",
                },
    },
    "v1.CreateAWSLambdaARN": {
            "body": {
                "type": "AWSAccountAndLambdaRequest",
                "format": "",
                },
    },
    "v1.CheckAWSLogsLambdaAsync": {
            "body": {
                "type": "AWSAccountAndLambdaRequest",
                "format": "",
                },
    },
    "v1.EnableAWSLogServices": {
            "body": {
                "type": "AWSLogsServicesRequest",
                "format": "",
                },
    },
    "v1.CheckAWSLogsServicesAsync": {
            "body": {
                "type": "AWSLogsServicesRequest",
                "format": "",
                },
    },
    "v1.DeleteAzureIntegration": {
            "body": {
                "type": "AzureAccount",
                "format": "",
                },
    },
    "v1.CreateAzureIntegration": {
            "body": {
                "type": "AzureAccount",
                "format": "",
                },
    },
    "v1.UpdateAzureIntegration": {
            "body": {
                "type": "AzureAccount",
                "format": "",
                },
    },
    "v1.UpdateAzureHostFilters": {
            "body": {
                "type": "AzureAccount",
                "format": "",
                },
    },
    "v1.DeleteGCPIntegration": {
            "body": {
                "type": "GCPAccount",
                "format": "",
                },
    },
    "v1.CreateGCPIntegration": {
            "body": {
                "type": "GCPAccount",
                "format": "",
                },
    },
    "v1.UpdateGCPIntegration": {
            "body": {
                "type": "GCPAccount",
                "format": "",
                },
    },
    "v1.CreatePagerDutyIntegrationService": {
            "body": {
                "type": "PagerDutyService",
                "format": "",
                },
    },
    "v1.DeletePagerDutyIntegrationService": {
            "serviceName": {
                "type": "string",
                "format": "",
                },
    },
    "v1.GetPagerDutyIntegrationService": {
            "serviceName": {
                "type": "string",
                "format": "",
                },
    },
    "v1.UpdatePagerDutyIntegrationService": {
            "serviceName": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "PagerDutyServiceKey",
                "format": "",
                },
    },
    "v1.GetSlackIntegrationChannels": {
            "accountName": {
                "type": "string",
                "format": "",
                },
    },
    "v1.CreateSlackIntegrationChannel": {
            "accountName": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "SlackIntegrationChannel",
                "format": "",
                },
    },
    "v1.RemoveSlackIntegrationChannel": {
            "accountName": {
                "type": "string",
                "format": "",
                },
            "channelName": {
                "type": "string",
                "format": "",
                },
    },
    "v1.GetSlackIntegrationChannel": {
            "accountName": {
                "type": "string",
                "format": "",
                },
            "channelName": {
                "type": "string",
                "format": "",
                },
    },
    "v1.UpdateSlackIntegrationChannel": {
            "accountName": {
                "type": "string",
                "format": "",
                },
            "channelName": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "SlackIntegrationChannel",
                "format": "",
                },
    },
    "v1.CreateWebhooksIntegrationCustomVariable": {
            "body": {
                "type": "WebhooksIntegrationCustomVariable",
                "format": "",
                },
    },
    "v1.DeleteWebhooksIntegrationCustomVariable": {
            "customVariableName": {
                "type": "string",
                "format": "",
                },
    },
    "v1.GetWebhooksIntegrationCustomVariable": {
            "customVariableName": {
                "type": "string",
                "format": "",
                },
    },
    "v1.UpdateWebhooksIntegrationCustomVariable": {
            "customVariableName": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "WebhooksIntegrationCustomVariableUpdateRequest",
                "format": "",
                },
    },
    "v1.CreateWebhooksIntegration": {
            "body": {
                "type": "WebhooksIntegration",
                "format": "",
                },
    },
    "v1.DeleteWebhooksIntegration": {
            "webhookName": {
                "type": "string",
                "format": "",
                },
    },
    "v1.GetWebhooksIntegration": {
            "webhookName": {
                "type": "string",
                "format": "",
                },
    },
    "v1.UpdateWebhooksIntegration": {
            "webhookName": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "WebhooksIntegrationUpdateRequest",
                "format": "",
                },
    },
    "v1.ListLogs": {
            "body": {
                "type": "LogsListRequest",
                "format": "",
                },
    },
    "v1.SubmitLog": {
            "contentEncoding": {
                "type": "ContentEncoding",
                "format": "",
                },
            "ddtags": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "Array<HTTPLogItem>",
                "format": "",
                },
    },
    "v1.UpdateLogsIndexOrder": {
            "body": {
                "type": "LogsIndexesOrder",
                "format": "",
                },
    },
    "v1.CreateLogsIndex": {
            "body": {
                "type": "LogsIndex",
                "format": "",
                },
    },
    "v1.GetLogsIndex": {
            "name": {
                "type": "string",
                "format": "",
                },
    },
    "v1.UpdateLogsIndex": {
            "name": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "LogsIndexUpdateRequest",
                "format": "",
                },
    },
    "v1.UpdateLogsPipelineOrder": {
            "body": {
                "type": "LogsPipelinesOrder",
                "format": "",
                },
    },
    "v1.CreateLogsPipeline": {
            "body": {
                "type": "LogsPipeline",
                "format": "",
                },
    },
    "v1.DeleteLogsPipeline": {
            "pipelineId": {
                "type": "string",
                "format": "",
                },
    },
    "v1.GetLogsPipeline": {
            "pipelineId": {
                "type": "string",
                "format": "",
                },
    },
    "v1.UpdateLogsPipeline": {
            "pipelineId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "LogsPipeline",
                "format": "",
                },
    },
    "v1.ListMonitors": {
            "groupStates": {
                "type": "string",
                "format": "",
                },
            "name": {
                "type": "string",
                "format": "",
                },
            "tags": {
                "type": "string",
                "format": "",
                },
            "monitorTags": {
                "type": "string",
                "format": "",
                },
            "withDowntimes": {
                "type": "boolean",
                "format": "",
                },
            "idOffset": {
                "type": "number",
                "format": "int64",
                },
            "page": {
                "type": "number",
                "format": "int64",
                },
            "pageSize": {
                "type": "number",
                "format": "int32",
                },
    },
    "v1.CreateMonitor": {
            "body": {
                "type": "Monitor",
                "format": "",
                },
    },
    "v1.CheckCanDeleteMonitor": {
            "monitorIds": {
                "type": "Array<number>",
                "format": "int64",
                },
    },
    "v1.SearchMonitorGroups": {
            "query": {
                "type": "string",
                "format": "",
                },
            "page": {
                "type": "number",
                "format": "int64",
                },
            "perPage": {
                "type": "number",
                "format": "int64",
                },
            "sort": {
                "type": "string",
                "format": "",
                },
    },
    "v1.SearchMonitors": {
            "query": {
                "type": "string",
                "format": "",
                },
            "page": {
                "type": "number",
                "format": "int64",
                },
            "perPage": {
                "type": "number",
                "format": "int64",
                },
            "sort": {
                "type": "string",
                "format": "",
                },
    },
    "v1.ValidateMonitor": {
            "body": {
                "type": "Monitor",
                "format": "",
                },
    },
    "v1.DeleteMonitor": {
            "monitorId": {
                "type": "number",
                "format": "int64",
                },
            "force": {
                "type": "string",
                "format": "",
                },
    },
    "v1.GetMonitor": {
            "monitorId": {
                "type": "number",
                "format": "int64",
                },
            "groupStates": {
                "type": "string",
                "format": "",
                },
    },
    "v1.UpdateMonitor": {
            "monitorId": {
                "type": "number",
                "format": "int64",
                },
            "body": {
                "type": "MonitorUpdateRequest",
                "format": "",
                },
    },
    "v1.ValidateExistingMonitor": {
            "monitorId": {
                "type": "number",
                "format": "int64",
                },
            "body": {
                "type": "Monitor",
                "format": "",
                },
    },
    "v1.ListNotebooks": {
            "authorHandle": {
                "type": "string",
                "format": "",
                },
            "excludeAuthorHandle": {
                "type": "string",
                "format": "",
                },
            "start": {
                "type": "number",
                "format": "int64",
                },
            "count": {
                "type": "number",
                "format": "int64",
                },
            "sortField": {
                "type": "string",
                "format": "",
                },
            "sortDir": {
                "type": "string",
                "format": "",
                },
            "query": {
                "type": "string",
                "format": "",
                },
            "includeCells": {
                "type": "boolean",
                "format": "",
                },
            "isTemplate": {
                "type": "boolean",
                "format": "",
                },
            "type": {
                "type": "string",
                "format": "",
                },
    },
    "v1.CreateNotebook": {
            "body": {
                "type": "NotebookCreateRequest",
                "format": "",
                },
    },
    "v1.DeleteNotebook": {
            "notebookId": {
                "type": "number",
                "format": "int64",
                },
    },
    "v1.GetNotebook": {
            "notebookId": {
                "type": "number",
                "format": "int64",
                },
    },
    "v1.UpdateNotebook": {
            "notebookId": {
                "type": "number",
                "format": "int64",
                },
            "body": {
                "type": "NotebookUpdateRequest",
                "format": "",
                },
    },
    "v1.CreateChildOrg": {
            "body": {
                "type": "OrganizationCreateBody",
                "format": "",
                },
    },
    "v1.GetOrg": {
            "publicId": {
                "type": "string",
                "format": "",
                },
    },
    "v1.UpdateOrg": {
            "publicId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "Organization",
                "format": "",
                },
    },
    "v1.DowngradeOrg": {
            "publicId": {
                "type": "string",
                "format": "",
                },
    },
    "v1.UploadIdPForOrg": {
            "publicId": {
                "type": "string",
                "format": "",
                },
            "idpFile": {
                "type": "HttpFile",
                "format": "binary",
                },
    },
    "v1.AddSecurityMonitoringSignalToIncident": {
            "signalId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "AddSignalToIncidentRequest",
                "format": "",
                },
    },
    "v1.EditSecurityMonitoringSignalAssignee": {
            "signalId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "SignalAssigneeUpdateRequest",
                "format": "",
                },
    },
    "v1.EditSecurityMonitoringSignalState": {
            "signalId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "SignalStateUpdateRequest",
                "format": "",
                },
    },
    "v1.ListSLOs": {
            "ids": {
                "type": "string",
                "format": "",
                },
            "query": {
                "type": "string",
                "format": "",
                },
            "tagsQuery": {
                "type": "string",
                "format": "",
                },
            "metricsQuery": {
                "type": "string",
                "format": "",
                },
            "limit": {
                "type": "number",
                "format": "int64",
                },
            "offset": {
                "type": "number",
                "format": "int64",
                },
    },
    "v1.CreateSLO": {
            "body": {
                "type": "ServiceLevelObjectiveRequest",
                "format": "",
                },
    },
    "v1.DeleteSLOTimeframeInBulk": {
            "body": {
                "type": "{ [key: string]: Array<SLOTimeframe>; }",
                "format": "",
                },
    },
    "v1.CheckCanDeleteSLO": {
            "ids": {
                "type": "string",
                "format": "",
                },
    },
    "v1.SearchSLO": {
            "query": {
                "type": "string",
                "format": "",
                },
            "pageSize": {
                "type": "number",
                "format": "int64",
                },
            "pageNumber": {
                "type": "number",
                "format": "int64",
                },
            "includeFacets": {
                "type": "boolean",
                "format": "",
                },
    },
    "v1.DeleteSLO": {
            "sloId": {
                "type": "string",
                "format": "",
                },
            "force": {
                "type": "string",
                "format": "",
                },
    },
    "v1.GetSLO": {
            "sloId": {
                "type": "string",
                "format": "",
                },
            "withConfiguredAlertIds": {
                "type": "boolean",
                "format": "",
                },
    },
    "v1.UpdateSLO": {
            "sloId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "ServiceLevelObjective",
                "format": "",
                },
    },
    "v1.GetSLOCorrections": {
            "sloId": {
                "type": "string",
                "format": "",
                },
    },
    "v1.GetSLOHistory": {
            "sloId": {
                "type": "string",
                "format": "",
                },
            "fromTs": {
                "type": "number",
                "format": "int64",
                },
            "toTs": {
                "type": "number",
                "format": "int64",
                },
            "target": {
                "type": "number",
                "format": "double",
                },
            "applyCorrection": {
                "type": "boolean",
                "format": "",
                },
    },
    "v1.CreateSLOCorrection": {
            "body": {
                "type": "SLOCorrectionCreateRequest",
                "format": "",
                },
    },
    "v1.DeleteSLOCorrection": {
            "sloCorrectionId": {
                "type": "string",
                "format": "",
                },
    },
    "v1.GetSLOCorrection": {
            "sloCorrectionId": {
                "type": "string",
                "format": "",
                },
    },
    "v1.UpdateSLOCorrection": {
            "sloCorrectionId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "SLOCorrectionUpdateRequest",
                "format": "",
                },
    },
    "v1.GetSyntheticsCIBatch": {
            "batchId": {
                "type": "string",
                "format": "",
                },
    },
    "v1.CreatePrivateLocation": {
            "body": {
                "type": "SyntheticsPrivateLocation",
                "format": "",
                },
    },
    "v1.DeletePrivateLocation": {
            "locationId": {
                "type": "string",
                "format": "",
                },
    },
    "v1.GetPrivateLocation": {
            "locationId": {
                "type": "string",
                "format": "",
                },
    },
    "v1.UpdatePrivateLocation": {
            "locationId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "SyntheticsPrivateLocation",
                "format": "",
                },
    },
    "v1.CreateSyntheticsAPITest": {
            "body": {
                "type": "SyntheticsAPITest",
                "format": "",
                },
    },
    "v1.GetAPITest": {
            "publicId": {
                "type": "string",
                "format": "",
                },
    },
    "v1.UpdateAPITest": {
            "publicId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "SyntheticsAPITest",
                "format": "",
                },
    },
    "v1.CreateSyntheticsBrowserTest": {
            "body": {
                "type": "SyntheticsBrowserTest",
                "format": "",
                },
    },
    "v1.GetBrowserTest": {
            "publicId": {
                "type": "string",
                "format": "",
                },
    },
    "v1.UpdateBrowserTest": {
            "publicId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "SyntheticsBrowserTest",
                "format": "",
                },
    },
    "v1.GetBrowserTestLatestResults": {
            "publicId": {
                "type": "string",
                "format": "",
                },
            "fromTs": {
                "type": "number",
                "format": "int64",
                },
            "toTs": {
                "type": "number",
                "format": "int64",
                },
            "probeDc": {
                "type": "Array<string>",
                "format": "",
                },
    },
    "v1.GetBrowserTestResult": {
            "publicId": {
                "type": "string",
                "format": "",
                },
            "resultId": {
                "type": "string",
                "format": "",
                },
    },
    "v1.DeleteTests": {
            "body": {
                "type": "SyntheticsDeleteTestsPayload",
                "format": "",
                },
    },
    "v1.TriggerTests": {
            "body": {
                "type": "SyntheticsTriggerBody",
                "format": "",
                },
    },
    "v1.TriggerCITests": {
            "body": {
                "type": "SyntheticsCITestBody",
                "format": "",
                },
    },
    "v1.GetTest": {
            "publicId": {
                "type": "string",
                "format": "",
                },
    },
    "v1.GetAPITestLatestResults": {
            "publicId": {
                "type": "string",
                "format": "",
                },
            "fromTs": {
                "type": "number",
                "format": "int64",
                },
            "toTs": {
                "type": "number",
                "format": "int64",
                },
            "probeDc": {
                "type": "Array<string>",
                "format": "",
                },
    },
    "v1.GetAPITestResult": {
            "publicId": {
                "type": "string",
                "format": "",
                },
            "resultId": {
                "type": "string",
                "format": "",
                },
    },
    "v1.UpdateTestPauseStatus": {
            "publicId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "SyntheticsUpdateTestPauseStatusPayload",
                "format": "",
                },
    },
    "v1.CreateGlobalVariable": {
            "body": {
                "type": "SyntheticsGlobalVariable",
                "format": "",
                },
    },
    "v1.DeleteGlobalVariable": {
            "variableId": {
                "type": "string",
                "format": "",
                },
    },
    "v1.GetGlobalVariable": {
            "variableId": {
                "type": "string",
                "format": "",
                },
    },
    "v1.EditGlobalVariable": {
            "variableId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "SyntheticsGlobalVariable",
                "format": "",
                },
    },
    "v1.ListHostTags": {
            "source": {
                "type": "string",
                "format": "",
                },
    },
    "v1.DeleteHostTags": {
            "hostName": {
                "type": "string",
                "format": "",
                },
            "source": {
                "type": "string",
                "format": "",
                },
    },
    "v1.GetHostTags": {
            "hostName": {
                "type": "string",
                "format": "",
                },
            "source": {
                "type": "string",
                "format": "",
                },
    },
    "v1.CreateHostTags": {
            "hostName": {
                "type": "string",
                "format": "",
                },
            "source": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "HostTags",
                "format": "",
                },
    },
    "v1.UpdateHostTags": {
            "hostName": {
                "type": "string",
                "format": "",
                },
            "source": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "HostTags",
                "format": "",
                },
    },
    "v1.CreateUser": {
            "body": {
                "type": "User",
                "format": "",
                },
    },
    "v1.DisableUser": {
            "userHandle": {
                "type": "string",
                "format": "email",
                },
    },
    "v1.GetUser": {
            "userHandle": {
                "type": "string",
                "format": "email",
                },
    },
    "v1.UpdateUser": {
            "userHandle": {
                "type": "string",
                "format": "email",
                },
            "body": {
                "type": "User",
                "format": "",
                },
    },
    "v2.ListAPIKeys": {
            "pageSize": {
                "type": "number",
                "format": "int64",
                },
            "pageNumber": {
                "type": "number",
                "format": "int64",
                },
            "sort": {
                "type": "APIKeysSort",
                "format": "",
                },
            "filter": {
                "type": "string",
                "format": "",
                },
            "filterCreatedAtStart": {
                "type": "string",
                "format": "",
                },
            "filterCreatedAtEnd": {
                "type": "string",
                "format": "",
                },
            "filterModifiedAtStart": {
                "type": "string",
                "format": "",
                },
            "filterModifiedAtEnd": {
                "type": "string",
                "format": "",
                },
            "include": {
                "type": "string",
                "format": "",
                },
    },
    "v2.CreateAPIKey": {
            "body": {
                "type": "APIKeyCreateRequest",
                "format": "",
                },
    },
    "v2.DeleteAPIKey": {
            "apiKeyId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.GetAPIKey": {
            "apiKeyId": {
                "type": "string",
                "format": "",
                },
            "include": {
                "type": "string",
                "format": "",
                },
    },
    "v2.UpdateAPIKey": {
            "apiKeyId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "APIKeyUpdateRequest",
                "format": "",
                },
    },
    "v2.ListApplicationKeys": {
            "pageSize": {
                "type": "number",
                "format": "int64",
                },
            "pageNumber": {
                "type": "number",
                "format": "int64",
                },
            "sort": {
                "type": "ApplicationKeysSort",
                "format": "",
                },
            "filter": {
                "type": "string",
                "format": "",
                },
            "filterCreatedAtStart": {
                "type": "string",
                "format": "",
                },
            "filterCreatedAtEnd": {
                "type": "string",
                "format": "",
                },
    },
    "v2.DeleteApplicationKey": {
            "appKeyId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.GetApplicationKey": {
            "appKeyId": {
                "type": "string",
                "format": "",
                },
            "include": {
                "type": "string",
                "format": "",
                },
    },
    "v2.UpdateApplicationKey": {
            "appKeyId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "ApplicationKeyUpdateRequest",
                "format": "",
                },
    },
    "v2.ListCurrentUserApplicationKeys": {
            "pageSize": {
                "type": "number",
                "format": "int64",
                },
            "pageNumber": {
                "type": "number",
                "format": "int64",
                },
            "sort": {
                "type": "ApplicationKeysSort",
                "format": "",
                },
            "filter": {
                "type": "string",
                "format": "",
                },
            "filterCreatedAtStart": {
                "type": "string",
                "format": "",
                },
            "filterCreatedAtEnd": {
                "type": "string",
                "format": "",
                },
    },
    "v2.CreateCurrentUserApplicationKey": {
            "body": {
                "type": "ApplicationKeyCreateRequest",
                "format": "",
                },
    },
    "v2.DeleteCurrentUserApplicationKey": {
            "appKeyId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.GetCurrentUserApplicationKey": {
            "appKeyId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.UpdateCurrentUserApplicationKey": {
            "appKeyId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "ApplicationKeyUpdateRequest",
                "format": "",
                },
    },
    "v2.ListAuditLogs": {
            "filterQuery": {
                "type": "string",
                "format": "",
                },
            "filterFrom": {
                "type": "Date",
                "format": "date-time",
                },
            "filterTo": {
                "type": "Date",
                "format": "date-time",
                },
            "sort": {
                "type": "AuditLogsSort",
                "format": "",
                },
            "pageCursor": {
                "type": "string",
                "format": "",
                },
            "pageLimit": {
                "type": "number",
                "format": "int32",
                },
    },
    "v2.SearchAuditLogs": {
            "body": {
                "type": "AuditLogsSearchEventsRequest",
                "format": "",
                },
    },
    "v2.ListAuthNMappings": {
            "pageSize": {
                "type": "number",
                "format": "int64",
                },
            "pageNumber": {
                "type": "number",
                "format": "int64",
                },
            "sort": {
                "type": "AuthNMappingsSort",
                "format": "",
                },
            "filter": {
                "type": "string",
                "format": "",
                },
    },
    "v2.CreateAuthNMapping": {
            "body": {
                "type": "AuthNMappingCreateRequest",
                "format": "",
                },
    },
    "v2.DeleteAuthNMapping": {
            "authnMappingId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.GetAuthNMapping": {
            "authnMappingId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.UpdateAuthNMapping": {
            "authnMappingId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "AuthNMappingUpdateRequest",
                "format": "",
                },
    },
    "v2.DeleteDashboardListItems": {
            "dashboardListId": {
                "type": "number",
                "format": "int64",
                },
            "body": {
                "type": "DashboardListDeleteItemsRequest",
                "format": "",
                },
    },
    "v2.GetDashboardListItems": {
            "dashboardListId": {
                "type": "number",
                "format": "int64",
                },
    },
    "v2.CreateDashboardListItems": {
            "dashboardListId": {
                "type": "number",
                "format": "int64",
                },
            "body": {
                "type": "DashboardListAddItemsRequest",
                "format": "",
                },
    },
    "v2.UpdateDashboardListItems": {
            "dashboardListId": {
                "type": "number",
                "format": "int64",
                },
            "body": {
                "type": "DashboardListUpdateItemsRequest",
                "format": "",
                },
    },
    "v2.ListEvents": {
            "filterQuery": {
                "type": "string",
                "format": "",
                },
            "filterFrom": {
                "type": "string",
                "format": "",
                },
            "filterTo": {
                "type": "string",
                "format": "",
                },
            "sort": {
                "type": "EventsSort",
                "format": "",
                },
            "pageCursor": {
                "type": "string",
                "format": "",
                },
            "pageLimit": {
                "type": "number",
                "format": "int32",
                },
    },
    "v2.SearchEvents": {
            "body": {
                "type": "EventsListRequest",
                "format": "",
                },
    },
    "v2.ListIncidents": {
            "include": {
                "type": "Array<IncidentRelatedObject>",
                "format": "",
                },
            "pageSize": {
                "type": "number",
                "format": "int64",
                },
            "pageOffset": {
                "type": "number",
                "format": "int64",
                },
    },
    "v2.CreateIncident": {
            "body": {
                "type": "IncidentCreateRequest",
                "format": "",
                },
    },
    "v2.DeleteIncident": {
            "incidentId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.GetIncident": {
            "incidentId": {
                "type": "string",
                "format": "",
                },
            "include": {
                "type": "Array<IncidentRelatedObject>",
                "format": "",
                },
    },
    "v2.UpdateIncident": {
            "incidentId": {
                "type": "string",
                "format": "",
                },
            "include": {
                "type": "Array<IncidentRelatedObject>",
                "format": "",
                },
            "body": {
                "type": "IncidentUpdateRequest",
                "format": "",
                },
    },
    "v2.ListIncidentAttachments": {
            "incidentId": {
                "type": "string",
                "format": "",
                },
            "include": {
                "type": "Array<IncidentAttachmentRelatedObject>",
                "format": "",
                },
            "filterAttachmentType": {
                "type": "Array<IncidentAttachmentAttachmentType>",
                "format": "",
                },
    },
    "v2.UpdateIncidentAttachments": {
            "incidentId": {
                "type": "string",
                "format": "",
                },
            "include": {
                "type": "Array<IncidentAttachmentRelatedObject>",
                "format": "",
                },
            "body": {
                "type": "IncidentAttachmentUpdateRequest",
                "format": "",
                },
    },
    "v2.CreateOpsgenieService": {
            "body": {
                "type": "OpsgenieServiceCreateRequest",
                "format": "",
                },
    },
    "v2.DeleteOpsgenieService": {
            "integrationServiceId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.GetOpsgenieService": {
            "integrationServiceId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.UpdateOpsgenieService": {
            "integrationServiceId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "OpsgenieServiceUpdateRequest",
                "format": "",
                },
    },
    "v2.SubmitLog": {
            "contentEncoding": {
                "type": "ContentEncoding",
                "format": "",
                },
            "ddtags": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "Array<HTTPLogItem>",
                "format": "",
                },
    },
    "v2.AggregateLogs": {
            "body": {
                "type": "LogsAggregateRequest",
                "format": "",
                },
    },
    "v2.ListLogsGet": {
            "filterQuery": {
                "type": "string",
                "format": "",
                },
            "filterIndex": {
                "type": "string",
                "format": "",
                },
            "filterFrom": {
                "type": "Date",
                "format": "date-time",
                },
            "filterTo": {
                "type": "Date",
                "format": "date-time",
                },
            "sort": {
                "type": "LogsSort",
                "format": "",
                },
            "pageCursor": {
                "type": "string",
                "format": "",
                },
            "pageLimit": {
                "type": "number",
                "format": "int32",
                },
    },
    "v2.ListLogs": {
            "body": {
                "type": "LogsListRequest",
                "format": "",
                },
    },
    "v2.UpdateLogsArchiveOrder": {
            "body": {
                "type": "LogsArchiveOrder",
                "format": "",
                },
    },
    "v2.CreateLogsArchive": {
            "body": {
                "type": "LogsArchiveCreateRequest",
                "format": "",
                },
    },
    "v2.DeleteLogsArchive": {
            "archiveId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.GetLogsArchive": {
            "archiveId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.UpdateLogsArchive": {
            "archiveId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "LogsArchiveCreateRequest",
                "format": "",
                },
    },
    "v2.RemoveRoleFromArchive": {
            "archiveId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "RelationshipToRole",
                "format": "",
                },
    },
    "v2.ListArchiveReadRoles": {
            "archiveId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.AddReadRoleToArchive": {
            "archiveId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "RelationshipToRole",
                "format": "",
                },
    },
    "v2.CreateLogsMetric": {
            "body": {
                "type": "LogsMetricCreateRequest",
                "format": "",
                },
    },
    "v2.DeleteLogsMetric": {
            "metricId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.GetLogsMetric": {
            "metricId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.UpdateLogsMetric": {
            "metricId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "LogsMetricUpdateRequest",
                "format": "",
                },
    },
    "v2.ListTagConfigurations": {
            "filterConfigured": {
                "type": "boolean",
                "format": "",
                },
            "filterTagsConfigured": {
                "type": "string",
                "format": "",
                },
            "filterMetricType": {
                "type": "MetricTagConfigurationMetricTypes",
                "format": "",
                },
            "filterIncludePercentiles": {
                "type": "boolean",
                "format": "",
                },
            "filterQueried": {
                "type": "boolean",
                "format": "",
                },
            "filterTags": {
                "type": "string",
                "format": "",
                },
            "windowSeconds": {
                "type": "number",
                "format": "int64",
                },
    },
    "v2.DeleteBulkTagsMetricsConfiguration": {
            "body": {
                "type": "MetricBulkTagConfigDeleteRequest",
                "format": "",
                },
    },
    "v2.CreateBulkTagsMetricsConfiguration": {
            "body": {
                "type": "MetricBulkTagConfigCreateRequest",
                "format": "",
                },
    },
    "v2.ListActiveMetricConfigurations": {
            "metricName": {
                "type": "string",
                "format": "",
                },
            "windowSeconds": {
                "type": "number",
                "format": "int64",
                },
    },
    "v2.ListTagsByMetricName": {
            "metricName": {
                "type": "string",
                "format": "",
                },
    },
    "v2.EstimateMetricsOutputSeries": {
            "metricName": {
                "type": "string",
                "format": "",
                },
            "filterGroups": {
                "type": "string",
                "format": "",
                },
            "filterHoursAgo": {
                "type": "number",
                "format": "",
                },
            "filterNumAggregations": {
                "type": "number",
                "format": "",
                },
            "filterPct": {
                "type": "boolean",
                "format": "",
                },
            "filterTimespanH": {
                "type": "number",
                "format": "",
                },
    },
    "v2.DeleteTagConfiguration": {
            "metricName": {
                "type": "string",
                "format": "",
                },
    },
    "v2.ListTagConfigurationByName": {
            "metricName": {
                "type": "string",
                "format": "",
                },
    },
    "v2.UpdateTagConfiguration": {
            "metricName": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "MetricTagConfigurationUpdateRequest",
                "format": "",
                },
    },
    "v2.CreateTagConfiguration": {
            "metricName": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "MetricTagConfigurationCreateRequest",
                "format": "",
                },
    },
    "v2.ListVolumesByMetricName": {
            "metricName": {
                "type": "string",
                "format": "",
                },
    },
    "v2.SubmitMetrics": {
            "contentEncoding": {
                "type": "MetricContentEncoding",
                "format": "",
                },
            "body": {
                "type": "MetricPayload",
                "format": "",
                },
    },
    "v2.ListRoles": {
            "pageSize": {
                "type": "number",
                "format": "int64",
                },
            "pageNumber": {
                "type": "number",
                "format": "int64",
                },
            "sort": {
                "type": "RolesSort",
                "format": "",
                },
            "filter": {
                "type": "string",
                "format": "",
                },
    },
    "v2.CreateRole": {
            "body": {
                "type": "RoleCreateRequest",
                "format": "",
                },
    },
    "v2.DeleteRole": {
            "roleId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.GetRole": {
            "roleId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.UpdateRole": {
            "roleId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "RoleUpdateRequest",
                "format": "",
                },
    },
    "v2.CloneRole": {
            "roleId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "RoleCloneRequest",
                "format": "",
                },
    },
    "v2.RemovePermissionFromRole": {
            "roleId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "RelationshipToPermission",
                "format": "",
                },
    },
    "v2.ListRolePermissions": {
            "roleId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.AddPermissionToRole": {
            "roleId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "RelationshipToPermission",
                "format": "",
                },
    },
    "v2.RemoveUserFromRole": {
            "roleId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "RelationshipToUser",
                "format": "",
                },
    },
    "v2.ListRoleUsers": {
            "roleId": {
                "type": "string",
                "format": "",
                },
            "pageSize": {
                "type": "number",
                "format": "int64",
                },
            "pageNumber": {
                "type": "number",
                "format": "int64",
                },
            "sort": {
                "type": "string",
                "format": "",
                },
            "filter": {
                "type": "string",
                "format": "",
                },
    },
    "v2.AddUserToRole": {
            "roleId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "RelationshipToUser",
                "format": "",
                },
    },
    "v2.ListProcesses": {
            "search": {
                "type": "string",
                "format": "",
                },
            "tags": {
                "type": "string",
                "format": "",
                },
            "from": {
                "type": "number",
                "format": "int64",
                },
            "to": {
                "type": "number",
                "format": "int64",
                },
            "pageLimit": {
                "type": "number",
                "format": "int32",
                },
            "pageCursor": {
                "type": "string",
                "format": "",
                },
    },
    "v2.AggregateRUMEvents": {
            "body": {
                "type": "RUMAggregateRequest",
                "format": "",
                },
    },
    "v2.CreateRUMApplication": {
            "body": {
                "type": "RUMApplicationCreateRequest",
                "format": "",
                },
    },
    "v2.DeleteRUMApplication": {
            "id": {
                "type": "string",
                "format": "",
                },
    },
    "v2.GetRUMApplication": {
            "id": {
                "type": "string",
                "format": "",
                },
    },
    "v2.UpdateRUMApplication": {
            "id": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "RUMApplicationUpdateRequest",
                "format": "",
                },
    },
    "v2.ListRUMEvents": {
            "filterQuery": {
                "type": "string",
                "format": "",
                },
            "filterFrom": {
                "type": "Date",
                "format": "date-time",
                },
            "filterTo": {
                "type": "Date",
                "format": "date-time",
                },
            "sort": {
                "type": "RUMSort",
                "format": "",
                },
            "pageCursor": {
                "type": "string",
                "format": "",
                },
            "pageLimit": {
                "type": "number",
                "format": "int32",
                },
    },
    "v2.SearchRUMEvents": {
            "body": {
                "type": "RUMSearchEventsRequest",
                "format": "",
                },
    },
    "v2.UploadIdPMetadata": {
            "idpFile": {
                "type": "HttpFile",
                "format": "binary",
                },
    },
    "v2.CreateCloudWorkloadSecurityAgentRule": {
            "body": {
                "type": "CloudWorkloadSecurityAgentRuleCreateRequest",
                "format": "",
                },
    },
    "v2.DeleteCloudWorkloadSecurityAgentRule": {
            "agentRuleId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.GetCloudWorkloadSecurityAgentRule": {
            "agentRuleId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.UpdateCloudWorkloadSecurityAgentRule": {
            "agentRuleId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "CloudWorkloadSecurityAgentRuleUpdateRequest",
                "format": "",
                },
    },
    "v2.CreateSecurityFilter": {
            "body": {
                "type": "SecurityFilterCreateRequest",
                "format": "",
                },
    },
    "v2.DeleteSecurityFilter": {
            "securityFilterId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.GetSecurityFilter": {
            "securityFilterId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.UpdateSecurityFilter": {
            "securityFilterId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "SecurityFilterUpdateRequest",
                "format": "",
                },
    },
    "v2.ListSecurityMonitoringRules": {
            "pageSize": {
                "type": "number",
                "format": "int64",
                },
            "pageNumber": {
                "type": "number",
                "format": "int64",
                },
    },
    "v2.CreateSecurityMonitoringRule": {
            "body": {
                "type": "SecurityMonitoringRuleCreatePayload",
                "format": "",
                },
    },
    "v2.DeleteSecurityMonitoringRule": {
            "ruleId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.GetSecurityMonitoringRule": {
            "ruleId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.UpdateSecurityMonitoringRule": {
            "ruleId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "SecurityMonitoringRuleUpdatePayload",
                "format": "",
                },
    },
    "v2.ListSecurityMonitoringSignals": {
            "filterQuery": {
                "type": "string",
                "format": "",
                },
            "filterFrom": {
                "type": "Date",
                "format": "date-time",
                },
            "filterTo": {
                "type": "Date",
                "format": "date-time",
                },
            "sort": {
                "type": "SecurityMonitoringSignalsSort",
                "format": "",
                },
            "pageCursor": {
                "type": "string",
                "format": "",
                },
            "pageLimit": {
                "type": "number",
                "format": "int32",
                },
    },
    "v2.SearchSecurityMonitoringSignals": {
            "body": {
                "type": "SecurityMonitoringSignalListRequest",
                "format": "",
                },
    },
    "v2.GetSecurityMonitoringSignal": {
            "signalId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.EditSecurityMonitoringSignalAssignee": {
            "signalId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "SecurityMonitoringSignalAssigneeUpdateRequest",
                "format": "",
                },
    },
    "v2.EditSecurityMonitoringSignalIncidents": {
            "signalId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "SecurityMonitoringSignalIncidentsUpdateRequest",
                "format": "",
                },
    },
    "v2.EditSecurityMonitoringSignalState": {
            "signalId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "SecurityMonitoringSignalStateUpdateRequest",
                "format": "",
                },
    },
    "v2.CreateServiceAccount": {
            "body": {
                "type": "ServiceAccountCreateRequest",
                "format": "",
                },
    },
    "v2.SendInvitations": {
            "body": {
                "type": "UserInvitationsRequest",
                "format": "",
                },
    },
    "v2.GetInvitation": {
            "userInvitationUuid": {
                "type": "string",
                "format": "",
                },
    },
    "v2.ListUsers": {
            "pageSize": {
                "type": "number",
                "format": "int64",
                },
            "pageNumber": {
                "type": "number",
                "format": "int64",
                },
            "sort": {
                "type": "string",
                "format": "",
                },
            "sortDir": {
                "type": "QuerySortOrder",
                "format": "",
                },
            "filter": {
                "type": "string",
                "format": "",
                },
            "filterStatus": {
                "type": "string",
                "format": "",
                },
    },
    "v2.CreateUser": {
            "body": {
                "type": "UserCreateRequest",
                "format": "",
                },
    },
    "v2.DisableUser": {
            "userId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.GetUser": {
            "userId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.UpdateUser": {
            "userId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "UserUpdateRequest",
                "format": "",
                },
    },
    "v2.ListUserOrganizations": {
            "userId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.ListUserPermissions": {
            "userId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.ListServiceAccountApplicationKeys": {
            "serviceAccountId": {
                "type": "string",
                "format": "",
                },
            "pageSize": {
                "type": "number",
                "format": "int64",
                },
            "pageNumber": {
                "type": "number",
                "format": "int64",
                },
            "sort": {
                "type": "ApplicationKeysSort",
                "format": "",
                },
            "filter": {
                "type": "string",
                "format": "",
                },
            "filterCreatedAtStart": {
                "type": "string",
                "format": "",
                },
            "filterCreatedAtEnd": {
                "type": "string",
                "format": "",
                },
    },
    "v2.CreateServiceAccountApplicationKey": {
            "serviceAccountId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "ApplicationKeyCreateRequest",
                "format": "",
                },
    },
    "v2.DeleteServiceAccountApplicationKey": {
            "serviceAccountId": {
                "type": "string",
                "format": "",
                },
            "appKeyId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.GetServiceAccountApplicationKey": {
            "serviceAccountId": {
                "type": "string",
                "format": "",
                },
            "appKeyId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.UpdateServiceAccountApplicationKey": {
            "serviceAccountId": {
                "type": "string",
                "format": "",
                },
            "appKeyId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "ApplicationKeyUpdateRequest",
                "format": "",
                },
    },
    "v2.ListIncidentServices": {
            "include": {
                "type": "IncidentRelatedObject",
                "format": "",
                },
            "pageSize": {
                "type": "number",
                "format": "int64",
                },
            "pageOffset": {
                "type": "number",
                "format": "int64",
                },
            "filter": {
                "type": "string",
                "format": "",
                },
    },
    "v2.CreateIncidentService": {
            "body": {
                "type": "IncidentServiceCreateRequest",
                "format": "",
                },
    },
    "v2.DeleteIncidentService": {
            "serviceId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.GetIncidentService": {
            "serviceId": {
                "type": "string",
                "format": "",
                },
            "include": {
                "type": "IncidentRelatedObject",
                "format": "",
                },
    },
    "v2.UpdateIncidentService": {
            "serviceId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "IncidentServiceUpdateRequest",
                "format": "",
                },
    },
    "v2.ListIncidentTeams": {
            "include": {
                "type": "IncidentRelatedObject",
                "format": "",
                },
            "pageSize": {
                "type": "number",
                "format": "int64",
                },
            "pageOffset": {
                "type": "number",
                "format": "int64",
                },
            "filter": {
                "type": "string",
                "format": "",
                },
    },
    "v2.CreateIncidentTeam": {
            "body": {
                "type": "IncidentTeamCreateRequest",
                "format": "",
                },
    },
    "v2.DeleteIncidentTeam": {
            "teamId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.GetIncidentTeam": {
            "teamId": {
                "type": "string",
                "format": "",
                },
            "include": {
                "type": "IncidentRelatedObject",
                "format": "",
                },
    },
    "v2.UpdateIncidentTeam": {
            "teamId": {
                "type": "string",
                "format": "",
                },
            "body": {
                "type": "IncidentTeamUpdateRequest",
                "format": "",
                },
    },
    "v2.GetUsageApplicationSecurityMonitoring": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v2.GetCostByOrg": {
            "startMonth": {
                "type": "Date",
                "format": "date-time",
                },
            "endMonth": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v2.GetEstimatedCostByOrg": {
            "view": {
                "type": "string",
                "format": "",
                },
            "startMonth": {
                "type": "Date",
                "format": "date-time",
                },
            "endMonth": {
                "type": "Date",
                "format": "date-time",
                },
            "startDate": {
                "type": "Date",
                "format": "date-time",
                },
            "endDate": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v2.GetHistoricalCostByOrg": {
            "view": {
                "type": "string",
                "format": "",
                },
            "startMonth": {
                "type": "Date",
                "format": "date-time",
                },
            "endMonth": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v2.GetHourlyUsage": {
            "filterTimestampStart": {
                "type": "Date",
                "format": "date-time",
                },
            "filterTimestampEnd": {
                "type": "Date",
                "format": "date-time",
                },
            "filterProductFamilies": {
                "type": "string",
                "format": "",
                },
            "filterIncludeDescendants": {
                "type": "boolean",
                "format": "",
                },
            "filterVersions": {
                "type": "string",
                "format": "",
                },
            "pageLimit": {
                "type": "number",
                "format": "int32",
                },
            "pageNextRecordId": {
                "type": "string",
                "format": "",
                },
    },
    "v2.GetUsageLambdaTracedInvocations": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
    },
    "v2.GetUsageObservabilityPipelines": {
            "startHr": {
                "type": "Date",
                "format": "date-time",
                },
            "endHr": {
                "type": "Date",
                "format": "date-time",
                },
    },
}