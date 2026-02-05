export const ScenariosModelMappings: {[key: string]: {[key: string]: any}} = {
    "v1.GetIPRanges": {
        "operationResponseType": "IPRanges",
    },
    "v1.ListAPIKeys": {
        "operationResponseType": "ApiKeyListResponse",
    },
    "v1.CreateAPIKey": {
        "body": {
            "type": "ApiKey",
            "format": "",
            },
        "operationResponseType": "ApiKeyResponse",
    },
    "v1.GetAPIKey": {
        "key": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ApiKeyResponse",
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
        "operationResponseType": "ApiKeyResponse",
    },
    "v1.DeleteAPIKey": {
        "key": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ApiKeyResponse",
    },
    "v1.ListApplicationKeys": {
        "operationResponseType": "ApplicationKeyListResponse",
    },
    "v1.CreateApplicationKey": {
        "body": {
            "type": "ApplicationKey",
            "format": "",
            },
        "operationResponseType": "ApplicationKeyResponse",
    },
    "v1.GetApplicationKey": {
        "key": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ApplicationKeyResponse",
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
        "operationResponseType": "ApplicationKeyResponse",
    },
    "v1.DeleteApplicationKey": {
        "key": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ApplicationKeyResponse",
    },
    "v1.SubmitServiceCheck": {
        "body": {
            "type": "Array<ServiceCheck>",
            "format": "",
            },
        "operationResponseType": "IntakePayloadAccepted",
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
        "operationResponseType": "UsageCustomReportsResponse",
    },
    "v1.GetSpecifiedDailyCustomReports": {
        "reportId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "UsageSpecifiedCustomReportsResponse",
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
        "operationResponseType": "UsageCustomReportsResponse",
    },
    "v1.GetSpecifiedMonthlyCustomReports": {
        "reportId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "UsageSpecifiedCustomReportsResponse",
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
        "operationResponseType": "UsageAnalyzedLogsResponse",
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
        "operationResponseType": "UsageAuditLogsResponse",
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
        "operationResponseType": "UsageLambdaResponse",
    },
    "v1.GetUsageBillableSummary": {
        "month": {
            "type": "Date",
            "format": "date-time",
            },
        "includeConnectedAccounts": {
            "type": "boolean",
            "format": "",
            },
        "operationResponseType": "UsageBillableSummaryResponse",
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
        "operationResponseType": "UsageCIVisibilityResponse",
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
        "operationResponseType": "UsageCloudSecurityPostureManagementResponse",
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
        "operationResponseType": "UsageCWSResponse",
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
        "operationResponseType": "UsageDBMResponse",
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
        "operationResponseType": "UsageFargateResponse",
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
        "operationResponseType": "UsageHostsResponse",
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
        "operationResponseType": "HourlyUsageAttributionResponse",
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
        "operationResponseType": "UsageIncidentManagementResponse",
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
        "operationResponseType": "UsageIndexedSpansResponse",
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
        "operationResponseType": "UsageIngestedSpansResponse",
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
        "operationResponseType": "UsageIoTResponse",
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
        "operationResponseType": "UsageLogsResponse",
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
        "operationResponseType": "UsageLogsByRetentionResponse",
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
        "operationResponseType": "UsageLogsByIndexResponse",
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
        "operationResponseType": "MonthlyUsageAttributionResponse",
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
        "operationResponseType": "UsageNetworkFlowsResponse",
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
        "operationResponseType": "UsageNetworkHostsResponse",
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
        "operationResponseType": "UsageOnlineArchiveResponse",
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
        "operationResponseType": "UsageProfilingResponse",
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
        "operationResponseType": "UsageRumUnitsResponse",
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
        "operationResponseType": "UsageRumSessionsResponse",
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
        "operationResponseType": "UsageSDSResponse",
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
        "operationResponseType": "UsageSNMPResponse",
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
        "includeConnectedAccounts": {
            "type": "boolean",
            "format": "",
            },
        "operationResponseType": "UsageSummaryResponse",
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
        "operationResponseType": "UsageSyntheticsResponse",
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
        "operationResponseType": "UsageSyntheticsAPIResponse",
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
        "operationResponseType": "UsageSyntheticsBrowserResponse",
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
        "operationResponseType": "UsageTimeseriesResponse",
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
        "operationResponseType": "UsageTopAvgMetricsResponse",
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
        "count": {
            "type": "number",
            "format": "int64",
            },
        "start": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "DashboardSummary",
    },
    "v1.CreateDashboard": {
        "body": {
            "type": "Dashboard",
            "format": "",
            },
        "operationResponseType": "Dashboard",
    },
    "v1.DeleteDashboards": {
        "body": {
            "type": "DashboardBulkDeleteRequest",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v1.RestoreDashboards": {
        "body": {
            "type": "DashboardRestoreRequest",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v1.CreatePublicDashboard": {
        "body": {
            "type": "SharedDashboard",
            "format": "",
            },
        "operationResponseType": "SharedDashboard",
    },
    "v1.GetPublicDashboard": {
        "token": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SharedDashboard",
    },
    "v1.UpdatePublicDashboard": {
        "token": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "SharedDashboardUpdateRequest",
            "format": "",
            },
        "operationResponseType": "SharedDashboard",
    },
    "v1.DeletePublicDashboard": {
        "token": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "DeleteSharedDashboardResponse",
    },
    "v1.GetPublicDashboardInvitations": {
        "token": {
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
        "operationResponseType": "SharedDashboardInvites",
    },
    "v1.SendPublicDashboardInvitation": {
        "token": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "SharedDashboardInvites",
            "format": "",
            },
        "operationResponseType": "SharedDashboardInvites",
    },
    "v1.DeletePublicDashboardInvitation": {
        "token": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "SharedDashboardInvites",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v1.GetDashboard": {
        "dashboardId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "Dashboard",
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
        "operationResponseType": "Dashboard",
    },
    "v1.DeleteDashboard": {
        "dashboardId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "DashboardDeleteResponse",
    },
    "v1.ListDashboardLists": {
        "operationResponseType": "DashboardListListResponse",
    },
    "v1.CreateDashboardList": {
        "body": {
            "type": "DashboardList",
            "format": "",
            },
        "operationResponseType": "DashboardList",
    },
    "v1.GetDashboardList": {
        "listId": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "DashboardList",
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
        "operationResponseType": "DashboardList",
    },
    "v1.DeleteDashboardList": {
        "listId": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "DashboardListDeleteResponse",
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
        "operationResponseType": "IntakePayloadAccepted",
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
        "operationResponseType": "MetricsListResponse",
    },
    "v1.GetMetricMetadata": {
        "metricName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "MetricMetadata",
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
        "operationResponseType": "MetricMetadata",
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
        "operationResponseType": "MetricsQueryResponse",
    },
    "v1.ListMetrics": {
        "q": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "MetricSearchResponse",
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
        "operationResponseType": "IntakePayloadAccepted",
    },
    "v1.ListDowntimes": {
        "currentOnly": {
            "type": "boolean",
            "format": "",
            },
        "withCreator": {
            "type": "boolean",
            "format": "",
            },
        "operationResponseType": "Array<Downtime>",
    },
    "v1.CreateDowntime": {
        "body": {
            "type": "Downtime",
            "format": "",
            },
        "operationResponseType": "Downtime",
    },
    "v1.CancelDowntimesByScope": {
        "body": {
            "type": "CancelDowntimesByScopeRequest",
            "format": "",
            },
        "operationResponseType": "CanceledDowntimesIds",
    },
    "v1.GetDowntime": {
        "downtimeId": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "Downtime",
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
        "operationResponseType": "Downtime",
    },
    "v1.CancelDowntime": {
        "downtimeId": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "{}",
    },
    "v1.ListMonitorDowntimes": {
        "monitorId": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "Array<Downtime>",
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
        "operationResponseType": "EventListResponse",
    },
    "v1.CreateEvent": {
        "body": {
            "type": "EventCreateRequest",
            "format": "",
            },
        "operationResponseType": "EventCreateResponse",
    },
    "v1.GetEvent": {
        "eventId": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "EventResponse",
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
        "operationResponseType": "GraphSnapshot",
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
        "operationResponseType": "HostMuteResponse",
    },
    "v1.UnmuteHost": {
        "hostName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "HostMuteResponse",
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
        "operationResponseType": "HostListResponse",
    },
    "v1.GetHostTotals": {
        "from": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "HostTotals",
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
        "operationResponseType": "AWSAccountListResponse",
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
        "operationResponseType": "any",
    },
    "v1.CreateAWSAccount": {
        "body": {
            "type": "AWSAccount",
            "format": "",
            },
        "operationResponseType": "AWSAccountCreateResponse",
    },
    "v1.DeleteAWSAccount": {
        "body": {
            "type": "AWSAccountDeleteRequest",
            "format": "",
            },
        "operationResponseType": "any",
    },
    "v1.ListAvailableAWSNamespaces": {
        "operationResponseType": "Array<string>",
    },
    "v1.ListAWSEventBridgeSources": {
        "operationResponseType": "AWSEventBridgeListResponse",
    },
    "v1.CreateAWSEventBridgeSource": {
        "body": {
            "type": "AWSEventBridgeCreateRequest",
            "format": "",
            },
        "operationResponseType": "AWSEventBridgeCreateResponse",
    },
    "v1.DeleteAWSEventBridgeSource": {
        "body": {
            "type": "AWSEventBridgeDeleteRequest",
            "format": "",
            },
        "operationResponseType": "AWSEventBridgeDeleteResponse",
    },
    "v1.ListAWSTagFilters": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "AWSTagFilterListResponse",
    },
    "v1.CreateAWSTagFilter": {
        "body": {
            "type": "AWSTagFilterCreateRequest",
            "format": "",
            },
        "operationResponseType": "any",
    },
    "v1.DeleteAWSTagFilter": {
        "body": {
            "type": "AWSTagFilterDeleteRequest",
            "format": "",
            },
        "operationResponseType": "any",
    },
    "v1.CreateNewAWSExternalID": {
        "body": {
            "type": "AWSAccount",
            "format": "",
            },
        "operationResponseType": "AWSAccountCreateResponse",
    },
    "v1.ListAWSLogsIntegrations": {
        "operationResponseType": "Array<AWSLogsListResponse>",
    },
    "v1.CreateAWSLambdaARN": {
        "body": {
            "type": "AWSAccountAndLambdaRequest",
            "format": "",
            },
        "operationResponseType": "any",
    },
    "v1.DeleteAWSLambdaARN": {
        "body": {
            "type": "AWSAccountAndLambdaRequest",
            "format": "",
            },
        "operationResponseType": "any",
    },
    "v1.CheckAWSLogsLambdaAsync": {
        "body": {
            "type": "AWSAccountAndLambdaRequest",
            "format": "",
            },
        "operationResponseType": "AWSLogsAsyncResponse",
    },
    "v1.ListAWSLogsServices": {
        "operationResponseType": "Array<AWSLogsListServicesResponse>",
    },
    "v1.EnableAWSLogServices": {
        "body": {
            "type": "AWSLogsServicesRequest",
            "format": "",
            },
        "operationResponseType": "any",
    },
    "v1.CheckAWSLogsServicesAsync": {
        "body": {
            "type": "AWSLogsServicesRequest",
            "format": "",
            },
        "operationResponseType": "AWSLogsAsyncResponse",
    },
    "v1.ListAzureIntegration": {
        "operationResponseType": "Array<AzureAccount>",
    },
    "v1.UpdateAzureIntegration": {
        "body": {
            "type": "AzureAccount",
            "format": "",
            },
        "operationResponseType": "any",
    },
    "v1.CreateAzureIntegration": {
        "body": {
            "type": "AzureAccount",
            "format": "",
            },
        "operationResponseType": "any",
    },
    "v1.DeleteAzureIntegration": {
        "body": {
            "type": "AzureAccount",
            "format": "",
            },
        "operationResponseType": "any",
    },
    "v1.UpdateAzureHostFilters": {
        "body": {
            "type": "AzureAccount",
            "format": "",
            },
        "operationResponseType": "any",
    },
    "v1.ListGCPIntegration": {
        "operationResponseType": "Array<GCPAccount>",
    },
    "v1.UpdateGCPIntegration": {
        "body": {
            "type": "GCPAccount",
            "format": "",
            },
        "operationResponseType": "any",
    },
    "v1.CreateGCPIntegration": {
        "body": {
            "type": "GCPAccount",
            "format": "",
            },
        "operationResponseType": "any",
    },
    "v1.DeleteGCPIntegration": {
        "body": {
            "type": "GCPAccount",
            "format": "",
            },
        "operationResponseType": "any",
    },
    "v1.CreatePagerDutyIntegrationService": {
        "body": {
            "type": "PagerDutyService",
            "format": "",
            },
        "operationResponseType": "PagerDutyServiceName",
    },
    "v1.GetPagerDutyIntegrationService": {
        "serviceName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "PagerDutyServiceName",
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
        "operationResponseType": "{}",
    },
    "v1.DeletePagerDutyIntegrationService": {
        "serviceName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v1.GetSlackIntegrationChannels": {
        "accountName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "Array<SlackIntegrationChannel>",
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
        "operationResponseType": "SlackIntegrationChannel",
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
        "operationResponseType": "SlackIntegrationChannel",
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
        "operationResponseType": "{}",
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
        "operationResponseType": "SlackIntegrationChannel",
    },
    "v1.CreateWebhooksIntegrationCustomVariable": {
        "body": {
            "type": "WebhooksIntegrationCustomVariable",
            "format": "",
            },
        "operationResponseType": "WebhooksIntegrationCustomVariableResponse",
    },
    "v1.GetWebhooksIntegrationCustomVariable": {
        "customVariableName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "WebhooksIntegrationCustomVariableResponse",
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
        "operationResponseType": "WebhooksIntegrationCustomVariableResponse",
    },
    "v1.DeleteWebhooksIntegrationCustomVariable": {
        "customVariableName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v1.CreateWebhooksIntegration": {
        "body": {
            "type": "WebhooksIntegration",
            "format": "",
            },
        "operationResponseType": "WebhooksIntegration",
    },
    "v1.GetWebhooksIntegration": {
        "webhookName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "WebhooksIntegration",
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
        "operationResponseType": "WebhooksIntegration",
    },
    "v1.DeleteWebhooksIntegration": {
        "webhookName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v1.ListLogs": {
        "body": {
            "type": "LogsListRequest",
            "format": "",
            },
        "operationResponseType": "LogsListResponse",
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
        "operationResponseType": "any",
    },
    "v1.GetLogsIndexOrder": {
        "operationResponseType": "LogsIndexesOrder",
    },
    "v1.UpdateLogsIndexOrder": {
        "body": {
            "type": "LogsIndexesOrder",
            "format": "",
            },
        "operationResponseType": "LogsIndexesOrder",
    },
    "v1.ListLogIndexes": {
        "operationResponseType": "LogsIndexListResponse",
    },
    "v1.CreateLogsIndex": {
        "body": {
            "type": "LogsIndex",
            "format": "",
            },
        "operationResponseType": "LogsIndex",
    },
    "v1.GetLogsIndex": {
        "name": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "LogsIndex",
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
        "operationResponseType": "LogsIndex",
    },
    "v1.DeleteLogsIndex": {
        "name": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v1.GetLogsPipelineOrder": {
        "operationResponseType": "LogsPipelinesOrder",
    },
    "v1.UpdateLogsPipelineOrder": {
        "body": {
            "type": "LogsPipelinesOrder",
            "format": "",
            },
        "operationResponseType": "LogsPipelinesOrder",
    },
    "v1.ListLogsPipelines": {
        "operationResponseType": "Array<LogsPipeline>",
    },
    "v1.CreateLogsPipeline": {
        "body": {
            "type": "LogsPipeline",
            "format": "",
            },
        "operationResponseType": "LogsPipeline",
    },
    "v1.GetLogsPipeline": {
        "pipelineId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "LogsPipeline",
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
        "operationResponseType": "LogsPipeline",
    },
    "v1.DeleteLogsPipeline": {
        "pipelineId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
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
        "operationResponseType": "Array<Monitor>",
    },
    "v1.CreateMonitor": {
        "body": {
            "type": "Monitor",
            "format": "",
            },
        "operationResponseType": "Monitor",
    },
    "v1.CheckCanDeleteMonitor": {
        "monitorIds": {
            "type": "Array<number>",
            "format": "",
            },
        "operationResponseType": "CheckCanDeleteMonitorResponse",
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
        "operationResponseType": "MonitorGroupSearchResponse",
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
        "operationResponseType": "MonitorSearchResponse",
    },
    "v1.ValidateMonitor": {
        "body": {
            "type": "Monitor",
            "format": "",
            },
        "operationResponseType": "any",
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
        "withDowntimes": {
            "type": "boolean",
            "format": "",
            },
        "withAssets": {
            "type": "boolean",
            "format": "",
            },
        "operationResponseType": "Monitor",
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
        "operationResponseType": "Monitor",
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
        "operationResponseType": "DeletedMonitor",
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
        "operationResponseType": "any",
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
        "operationResponseType": "NotebooksResponse",
    },
    "v1.CreateNotebook": {
        "body": {
            "type": "NotebookCreateRequest",
            "format": "",
            },
        "operationResponseType": "NotebookResponse",
    },
    "v1.GetNotebook": {
        "notebookId": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "NotebookResponse",
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
        "operationResponseType": "NotebookResponse",
    },
    "v1.DeleteNotebook": {
        "notebookId": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "{}",
    },
    "v1.ListOrgs": {
        "operationResponseType": "OrganizationListResponse",
    },
    "v1.CreateChildOrg": {
        "body": {
            "type": "OrganizationCreateBody",
            "format": "",
            },
        "operationResponseType": "OrganizationCreateResponse",
    },
    "v1.GetOrg": {
        "publicId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "OrganizationResponse",
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
        "operationResponseType": "OrganizationResponse",
    },
    "v1.DowngradeOrg": {
        "publicId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "OrgDowngradedResponse",
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
        "operationResponseType": "IdpResponse",
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
        "operationResponseType": "SuccessfulSignalUpdateResponse",
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
        "operationResponseType": "SuccessfulSignalUpdateResponse",
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
        "operationResponseType": "SuccessfulSignalUpdateResponse",
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
        "operationResponseType": "SLOListResponse",
    },
    "v1.CreateSLO": {
        "body": {
            "type": "ServiceLevelObjectiveRequest",
            "format": "",
            },
        "operationResponseType": "SLOListResponse",
    },
    "v1.DeleteSLOTimeframeInBulk": {
        "body": {
            "type": "{ [key: string]: Array<SLOTimeframe>; }",
            "format": "",
            },
        "operationResponseType": "SLOBulkDeleteResponse",
    },
    "v1.CheckCanDeleteSLO": {
        "ids": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "CheckCanDeleteSLOResponse",
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
        "operationResponseType": "SearchSLOResponse",
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
        "operationResponseType": "SLOResponse",
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
        "operationResponseType": "SLOListResponse",
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
        "operationResponseType": "SLODeleteResponse",
    },
    "v1.GetSLOCorrections": {
        "sloId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SLOCorrectionListResponse",
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
        "operationResponseType": "SLOHistoryResponse",
    },
    "v1.ListSLOCorrection": {
        "offset": {
            "type": "number",
            "format": "int64",
            },
        "limit": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "SLOCorrectionListResponse",
    },
    "v1.CreateSLOCorrection": {
        "body": {
            "type": "SLOCorrectionCreateRequest",
            "format": "",
            },
        "operationResponseType": "SLOCorrectionResponse",
    },
    "v1.GetSLOCorrection": {
        "sloCorrectionId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SLOCorrectionResponse",
    },
    "v1.DeleteSLOCorrection": {
        "sloCorrectionId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
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
        "operationResponseType": "SLOCorrectionResponse",
    },
    "v1.GetSyntheticsCIBatch": {
        "batchId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SyntheticsBatchDetails",
    },
    "v1.ListLocations": {
        "operationResponseType": "SyntheticsLocations",
    },
    "v1.CreatePrivateLocation": {
        "body": {
            "type": "SyntheticsPrivateLocation",
            "format": "",
            },
        "operationResponseType": "SyntheticsPrivateLocationCreationResponse",
    },
    "v1.GetPrivateLocation": {
        "locationId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SyntheticsPrivateLocation",
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
        "operationResponseType": "SyntheticsPrivateLocation",
    },
    "v1.DeletePrivateLocation": {
        "locationId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v1.GetSyntheticsDefaultLocations": {
        "operationResponseType": "Array<string>",
    },
    "v1.ListTests": {
        "pageSize": {
            "type": "number",
            "format": "int64",
            },
        "pageNumber": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "SyntheticsListTestsResponse",
    },
    "v1.CreateSyntheticsAPITest": {
        "body": {
            "type": "SyntheticsAPITest",
            "format": "",
            },
        "operationResponseType": "SyntheticsAPITest",
    },
    "v1.GetAPITest": {
        "publicId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SyntheticsAPITest",
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
        "operationResponseType": "SyntheticsAPITest",
    },
    "v1.CreateSyntheticsBrowserTest": {
        "body": {
            "type": "SyntheticsBrowserTest",
            "format": "",
            },
        "operationResponseType": "SyntheticsBrowserTest",
    },
    "v1.GetBrowserTest": {
        "publicId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SyntheticsBrowserTest",
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
        "operationResponseType": "SyntheticsBrowserTest",
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
        "operationResponseType": "SyntheticsGetBrowserTestLatestResultsResponse",
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
        "operationResponseType": "SyntheticsBrowserTestResultFull",
    },
    "v1.DeleteTests": {
        "body": {
            "type": "SyntheticsDeleteTestsPayload",
            "format": "",
            },
        "operationResponseType": "SyntheticsDeleteTestsResponse",
    },
    "v1.CreateSyntheticsMobileTest": {
        "body": {
            "type": "SyntheticsMobileTest",
            "format": "",
            },
        "operationResponseType": "SyntheticsMobileTest",
    },
    "v1.GetMobileTest": {
        "publicId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SyntheticsMobileTest",
    },
    "v1.UpdateMobileTest": {
        "publicId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "SyntheticsMobileTest",
            "format": "",
            },
        "operationResponseType": "SyntheticsMobileTest",
    },
    "v1.SearchTests": {
        "text": {
            "type": "string",
            "format": "",
            },
        "includeFullConfig": {
            "type": "boolean",
            "format": "",
            },
        "facetsOnly": {
            "type": "boolean",
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
        "sort": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SyntheticsListTestsResponse",
    },
    "v1.TriggerTests": {
        "body": {
            "type": "SyntheticsTriggerBody",
            "format": "",
            },
        "operationResponseType": "SyntheticsTriggerCITestsResponse",
    },
    "v1.TriggerCITests": {
        "body": {
            "type": "SyntheticsCITestBody",
            "format": "",
            },
        "operationResponseType": "SyntheticsTriggerCITestsResponse",
    },
    "v1.FetchUptimes": {
        "body": {
            "type": "SyntheticsFetchUptimesPayload",
            "format": "",
            },
        "operationResponseType": "Array<SyntheticsTestUptime>",
    },
    "v1.GetTest": {
        "publicId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SyntheticsTestDetailsWithoutSteps",
    },
    "v1.PatchTest": {
        "publicId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "SyntheticsPatchTestBody",
            "format": "",
            },
        "operationResponseType": "SyntheticsTestDetails",
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
        "operationResponseType": "SyntheticsGetAPITestLatestResultsResponse",
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
        "operationResponseType": "SyntheticsAPITestResultFull",
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
        "operationResponseType": "boolean",
    },
    "v1.ListGlobalVariables": {
        "operationResponseType": "SyntheticsListGlobalVariablesResponse",
    },
    "v1.CreateGlobalVariable": {
        "body": {
            "type": "SyntheticsGlobalVariableRequest",
            "format": "",
            },
        "operationResponseType": "SyntheticsGlobalVariable",
    },
    "v1.GetGlobalVariable": {
        "variableId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SyntheticsGlobalVariable",
    },
    "v1.EditGlobalVariable": {
        "variableId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "SyntheticsGlobalVariableRequest",
            "format": "",
            },
        "operationResponseType": "SyntheticsGlobalVariable",
    },
    "v1.DeleteGlobalVariable": {
        "variableId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v1.ListHostTags": {
        "source": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "TagToHosts",
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
        "operationResponseType": "HostTags",
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
        "operationResponseType": "HostTags",
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
        "operationResponseType": "HostTags",
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
        "operationResponseType": "{}",
    },
    "v1.ListUsers": {
        "operationResponseType": "UserListResponse",
    },
    "v1.CreateUser": {
        "body": {
            "type": "User",
            "format": "",
            },
        "operationResponseType": "UserResponse",
    },
    "v1.GetUser": {
        "userHandle": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "UserResponse",
    },
    "v1.UpdateUser": {
        "userHandle": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "User",
            "format": "",
            },
        "operationResponseType": "UserResponse",
    },
    "v1.DisableUser": {
        "userHandle": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "UserDisableResponse",
    },
    "v1.Validate": {
        "operationResponseType": "AuthenticationValidationResponse",
    },
    "v2.ListFleetAgentVersions": {
        "operationResponseType": "FleetAgentVersionsResponse",
    },
    "v2.ListFleetAgents": {
        "pageNumber": {
            "type": "number",
            "format": "int64",
            },
        "pageSize": {
            "type": "number",
            "format": "int64",
            },
        "sortAttribute": {
            "type": "string",
            "format": "",
            },
        "sortDescending": {
            "type": "boolean",
            "format": "",
            },
        "tags": {
            "type": "string",
            "format": "",
            },
        "filter": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "FleetAgentsResponse",
    },
    "v2.GetFleetAgentInfo": {
        "agentKey": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "FleetAgentInfoResponse",
    },
    "v2.ListFleetDeployments": {
        "pageSize": {
            "type": "number",
            "format": "int64",
            },
        "pageOffset": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "FleetDeploymentsResponse",
    },
    "v2.CreateFleetDeploymentConfigure": {
        "body": {
            "type": "FleetDeploymentConfigureCreateRequest",
            "format": "",
            },
        "operationResponseType": "FleetDeploymentResponse",
    },
    "v2.CreateFleetDeploymentUpgrade": {
        "body": {
            "type": "FleetDeploymentPackageUpgradeCreateRequest",
            "format": "",
            },
        "operationResponseType": "FleetDeploymentResponse",
    },
    "v2.GetFleetDeployment": {
        "deploymentId": {
            "type": "string",
            "format": "",
            },
        "limit": {
            "type": "number",
            "format": "int64",
            },
        "page": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "FleetDeploymentResponse",
    },
    "v2.CancelFleetDeployment": {
        "deploymentId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.ListFleetSchedules": {
        "operationResponseType": "FleetSchedulesResponse",
    },
    "v2.CreateFleetSchedule": {
        "body": {
            "type": "FleetScheduleCreateRequest",
            "format": "",
            },
        "operationResponseType": "FleetScheduleResponse",
    },
    "v2.GetFleetSchedule": {
        "id": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "FleetScheduleResponse",
    },
    "v2.DeleteFleetSchedule": {
        "id": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateFleetSchedule": {
        "id": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "FleetSchedulePatchRequest",
            "format": "",
            },
        "operationResponseType": "FleetScheduleResponse",
    },
    "v2.TriggerFleetSchedule": {
        "id": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "FleetDeploymentResponse",
    },
    "v2.ListDatastores": {
        "operationResponseType": "DatastoreArray",
    },
    "v2.CreateDatastore": {
        "body": {
            "type": "CreateAppsDatastoreRequest",
            "format": "",
            },
        "operationResponseType": "CreateAppsDatastoreResponse",
    },
    "v2.GetDatastore": {
        "datastoreId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "Datastore",
    },
    "v2.DeleteDatastore": {
        "datastoreId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateDatastore": {
        "datastoreId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "UpdateAppsDatastoreRequest",
            "format": "",
            },
        "operationResponseType": "Datastore",
    },
    "v2.ListDatastoreItems": {
        "datastoreId": {
            "type": "string",
            "format": "",
            },
        "filter": {
            "type": "string",
            "format": "",
            },
        "itemKey": {
            "type": "string",
            "format": "",
            },
        "pageLimit": {
            "type": "number",
            "format": "int64",
            },
        "pageOffset": {
            "type": "number",
            "format": "int64",
            },
        "sort": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ItemApiPayloadArray",
    },
    "v2.DeleteDatastoreItem": {
        "datastoreId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "DeleteAppsDatastoreItemRequest",
            "format": "",
            },
        "operationResponseType": "DeleteAppsDatastoreItemResponse",
    },
    "v2.UpdateDatastoreItem": {
        "datastoreId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "UpdateAppsDatastoreItemRequest",
            "format": "",
            },
        "operationResponseType": "ItemApiPayload",
    },
    "v2.BulkWriteDatastoreItems": {
        "datastoreId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "BulkPutAppsDatastoreItemsRequest",
            "format": "",
            },
        "operationResponseType": "PutAppsDatastoreItemResponseArray",
    },
    "v2.BulkDeleteDatastoreItems": {
        "datastoreId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "BulkDeleteAppsDatastoreItemsRequest",
            "format": "",
            },
        "operationResponseType": "DeleteAppsDatastoreItemResponseArray",
    },
    "v2.ListAppKeyRegistrations": {
        "pageSize": {
            "type": "number",
            "format": "int64",
            },
        "pageNumber": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "ListAppKeyRegistrationsResponse",
    },
    "v2.GetAppKeyRegistration": {
        "appKeyId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "GetAppKeyRegistrationResponse",
    },
    "v2.RegisterAppKey": {
        "appKeyId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "RegisterAppKeyResponse",
    },
    "v2.UnregisterAppKey": {
        "appKeyId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.CreateActionConnection": {
        "body": {
            "type": "CreateActionConnectionRequest",
            "format": "",
            },
        "operationResponseType": "CreateActionConnectionResponse",
    },
    "v2.GetActionConnection": {
        "connectionId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "GetActionConnectionResponse",
    },
    "v2.DeleteActionConnection": {
        "connectionId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateActionConnection": {
        "connectionId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "UpdateActionConnectionRequest",
            "format": "",
            },
        "operationResponseType": "UpdateActionConnectionResponse",
    },
    "v2.ListAwsScanOptions": {
        "operationResponseType": "AwsScanOptionsListResponse",
    },
    "v2.CreateAwsScanOptions": {
        "body": {
            "type": "AwsScanOptionsCreateRequest",
            "format": "",
            },
        "operationResponseType": "AwsScanOptionsResponse",
    },
    "v2.GetAwsScanOptions": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "AwsScanOptionsResponse",
    },
    "v2.DeleteAwsScanOptions": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateAwsScanOptions": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "AwsScanOptionsUpdateRequest",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.ListAzureScanOptions": {
        "operationResponseType": "AzureScanOptionsArray",
    },
    "v2.CreateAzureScanOptions": {
        "body": {
            "type": "AzureScanOptions",
            "format": "",
            },
        "operationResponseType": "AzureScanOptions",
    },
    "v2.GetAzureScanOptions": {
        "subscriptionId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "AzureScanOptions",
    },
    "v2.DeleteAzureScanOptions": {
        "subscriptionId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateAzureScanOptions": {
        "subscriptionId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "AzureScanOptionsInputUpdate",
            "format": "",
            },
        "operationResponseType": "AzureScanOptions",
    },
    "v2.ListGcpScanOptions": {
        "operationResponseType": "GcpScanOptionsArray",
    },
    "v2.CreateGcpScanOptions": {
        "body": {
            "type": "GcpScanOptions",
            "format": "",
            },
        "operationResponseType": "GcpScanOptions",
    },
    "v2.GetGcpScanOptions": {
        "projectId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "GcpScanOptions",
    },
    "v2.DeleteGcpScanOptions": {
        "projectId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateGcpScanOptions": {
        "projectId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "GcpScanOptionsInputUpdate",
            "format": "",
            },
        "operationResponseType": "GcpScanOptions",
    },
    "v2.ListAwsOnDemandTasks": {
        "operationResponseType": "AwsOnDemandListResponse",
    },
    "v2.CreateAwsOnDemandTask": {
        "body": {
            "type": "AwsOnDemandCreateRequest",
            "format": "",
            },
        "operationResponseType": "AwsOnDemandResponse",
    },
    "v2.GetAwsOnDemandTask": {
        "taskId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "AwsOnDemandResponse",
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
        "filterRemoteConfigReadEnabled": {
            "type": "boolean",
            "format": "",
            },
        "filterCategory": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "APIKeysResponse",
    },
    "v2.CreateAPIKey": {
        "body": {
            "type": "APIKeyCreateRequest",
            "format": "",
            },
        "operationResponseType": "APIKeyResponse",
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
        "operationResponseType": "APIKeyResponse",
    },
    "v2.DeleteAPIKey": {
        "apiKeyId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
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
        "operationResponseType": "APIKeyResponse",
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
        "include": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ListApplicationKeysResponse",
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
        "operationResponseType": "ApplicationKeyResponse",
    },
    "v2.DeleteApplicationKey": {
        "appKeyId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
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
        "operationResponseType": "ApplicationKeyResponse",
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
        "include": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ListApplicationKeysResponse",
    },
    "v2.CreateCurrentUserApplicationKey": {
        "body": {
            "type": "ApplicationKeyCreateRequest",
            "format": "",
            },
        "operationResponseType": "ApplicationKeyResponse",
    },
    "v2.GetCurrentUserApplicationKey": {
        "appKeyId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ApplicationKeyResponse",
    },
    "v2.DeleteCurrentUserApplicationKey": {
        "appKeyId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
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
        "operationResponseType": "ApplicationKeyResponse",
    },
    "v2.ListAPIs": {
        "query": {
            "type": "string",
            "format": "",
            },
        "pageLimit": {
            "type": "number",
            "format": "int64",
            },
        "pageOffset": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "ListAPIsResponse",
    },
    "v2.DeleteOpenAPI": {
        "id": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.GetOpenAPI": {
        "id": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "HttpFile",
    },
    "v2.UpdateOpenAPI": {
        "id": {
            "type": "string",
            "format": "",
            },
        "openapiSpecFile": {
            "type": "HttpFile",
            "format": "binary",
            },
        "operationResponseType": "UpdateOpenAPIResponse",
    },
    "v2.CreateOpenAPI": {
        "openapiSpecFile": {
            "type": "HttpFile",
            "format": "binary",
            },
        "operationResponseType": "CreateOpenAPIResponse",
    },
    "v2.ListSpansMetrics": {
        "operationResponseType": "SpansMetricsResponse",
    },
    "v2.CreateSpansMetric": {
        "body": {
            "type": "SpansMetricCreateRequest",
            "format": "",
            },
        "operationResponseType": "SpansMetricResponse",
    },
    "v2.GetSpansMetric": {
        "metricId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SpansMetricResponse",
    },
    "v2.DeleteSpansMetric": {
        "metricId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateSpansMetric": {
        "metricId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "SpansMetricUpdateRequest",
            "format": "",
            },
        "operationResponseType": "SpansMetricResponse",
    },
    "v2.ListApmRetentionFilters": {
        "operationResponseType": "RetentionFiltersResponse",
    },
    "v2.CreateApmRetentionFilter": {
        "body": {
            "type": "RetentionFilterCreateRequest",
            "format": "",
            },
        "operationResponseType": "RetentionFilterCreateResponse",
    },
    "v2.ReorderApmRetentionFilters": {
        "body": {
            "type": "ReorderRetentionFiltersRequest",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.GetApmRetentionFilter": {
        "filterId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "RetentionFilterResponse",
    },
    "v2.UpdateApmRetentionFilter": {
        "filterId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "RetentionFilterUpdateRequest",
            "format": "",
            },
        "operationResponseType": "RetentionFilterResponse",
    },
    "v2.DeleteApmRetentionFilter": {
        "filterId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.GetServiceList": {
        "operationResponseType": "ServiceList",
    },
    "v2.ListApps": {
        "limit": {
            "type": "number",
            "format": "int64",
            },
        "page": {
            "type": "number",
            "format": "int64",
            },
        "filterUserName": {
            "type": "string",
            "format": "",
            },
        "filterUserUuid": {
            "type": "string",
            "format": "uuid",
            },
        "filterName": {
            "type": "string",
            "format": "",
            },
        "filterQuery": {
            "type": "string",
            "format": "",
            },
        "filterDeployed": {
            "type": "boolean",
            "format": "",
            },
        "filterTags": {
            "type": "string",
            "format": "",
            },
        "filterFavorite": {
            "type": "boolean",
            "format": "",
            },
        "filterSelfService": {
            "type": "boolean",
            "format": "",
            },
        "sort": {
            "type": "Array<AppsSortField>",
            "format": "",
            },
        "operationResponseType": "ListAppsResponse",
    },
    "v2.CreateApp": {
        "body": {
            "type": "CreateAppRequest",
            "format": "",
            },
        "operationResponseType": "CreateAppResponse",
    },
    "v2.DeleteApps": {
        "body": {
            "type": "DeleteAppsRequest",
            "format": "",
            },
        "operationResponseType": "DeleteAppsResponse",
    },
    "v2.GetApp": {
        "appId": {
            "type": "string",
            "format": "uuid",
            },
        "version": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "GetAppResponse",
    },
    "v2.DeleteApp": {
        "appId": {
            "type": "string",
            "format": "uuid",
            },
        "operationResponseType": "DeleteAppResponse",
    },
    "v2.UpdateApp": {
        "appId": {
            "type": "string",
            "format": "uuid",
            },
        "body": {
            "type": "UpdateAppRequest",
            "format": "",
            },
        "operationResponseType": "UpdateAppResponse",
    },
    "v2.PublishApp": {
        "appId": {
            "type": "string",
            "format": "uuid",
            },
        "operationResponseType": "PublishAppResponse",
    },
    "v2.UnpublishApp": {
        "appId": {
            "type": "string",
            "format": "uuid",
            },
        "operationResponseType": "UnpublishAppResponse",
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
        "operationResponseType": "AuditLogsEventsResponse",
    },
    "v2.SearchAuditLogs": {
        "body": {
            "type": "AuditLogsSearchEventsRequest",
            "format": "",
            },
        "operationResponseType": "AuditLogsEventsResponse",
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
        "resourceType": {
            "type": "AuthNMappingResourceType",
            "format": "",
            },
        "operationResponseType": "AuthNMappingsResponse",
    },
    "v2.CreateAuthNMapping": {
        "body": {
            "type": "AuthNMappingCreateRequest",
            "format": "",
            },
        "operationResponseType": "AuthNMappingResponse",
    },
    "v2.GetAuthNMapping": {
        "authnMappingId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "AuthNMappingResponse",
    },
    "v2.DeleteAuthNMapping": {
        "authnMappingId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
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
        "operationResponseType": "AuthNMappingResponse",
    },
    "v2.SearchCases": {
        "pageSize": {
            "type": "number",
            "format": "int64",
            },
        "pageNumber": {
            "type": "number",
            "format": "int64",
            },
        "sortField": {
            "type": "CaseSortableField",
            "format": "",
            },
        "filter": {
            "type": "string",
            "format": "",
            },
        "sortAsc": {
            "type": "boolean",
            "format": "",
            },
        "operationResponseType": "CasesResponse",
    },
    "v2.CreateCase": {
        "body": {
            "type": "CaseCreateRequest",
            "format": "",
            },
        "operationResponseType": "CaseResponse",
    },
    "v2.GetProjects": {
        "operationResponseType": "ProjectsResponse",
    },
    "v2.CreateProject": {
        "body": {
            "type": "ProjectCreateRequest",
            "format": "",
            },
        "operationResponseType": "ProjectResponse",
    },
    "v2.GetProject": {
        "projectId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ProjectResponse",
    },
    "v2.DeleteProject": {
        "projectId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateProject": {
        "projectId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "ProjectUpdateRequest",
            "format": "",
            },
        "operationResponseType": "ProjectResponse",
    },
    "v2.GetProjectNotificationRules": {
        "projectId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "CaseNotificationRulesResponse",
    },
    "v2.CreateProjectNotificationRule": {
        "projectId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CaseNotificationRuleCreateRequest",
            "format": "",
            },
        "operationResponseType": "CaseNotificationRuleResponse",
    },
    "v2.UpdateProjectNotificationRule": {
        "projectId": {
            "type": "string",
            "format": "",
            },
        "notificationRuleId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CaseNotificationRuleUpdateRequest",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.DeleteProjectNotificationRule": {
        "projectId": {
            "type": "string",
            "format": "",
            },
        "notificationRuleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.GetCase": {
        "caseId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "CaseResponse",
    },
    "v2.ArchiveCase": {
        "caseId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CaseEmptyRequest",
            "format": "",
            },
        "operationResponseType": "CaseResponse",
    },
    "v2.AssignCase": {
        "caseId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CaseAssignRequest",
            "format": "",
            },
        "operationResponseType": "CaseResponse",
    },
    "v2.UpdateAttributes": {
        "caseId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CaseUpdateAttributesRequest",
            "format": "",
            },
        "operationResponseType": "CaseResponse",
    },
    "v2.CommentCase": {
        "caseId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CaseCommentRequest",
            "format": "",
            },
        "operationResponseType": "TimelineResponse",
    },
    "v2.DeleteCaseComment": {
        "caseId": {
            "type": "string",
            "format": "",
            },
        "cellId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateCaseCustomAttribute": {
        "caseId": {
            "type": "string",
            "format": "",
            },
        "customAttributeKey": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CaseUpdateCustomAttributeRequest",
            "format": "",
            },
        "operationResponseType": "CaseResponse",
    },
    "v2.DeleteCaseCustomAttribute": {
        "caseId": {
            "type": "string",
            "format": "",
            },
        "customAttributeKey": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "CaseResponse",
    },
    "v2.UpdateCaseDescription": {
        "caseId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CaseUpdateDescriptionRequest",
            "format": "",
            },
        "operationResponseType": "CaseResponse",
    },
    "v2.UpdatePriority": {
        "caseId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CaseUpdatePriorityRequest",
            "format": "",
            },
        "operationResponseType": "CaseResponse",
    },
    "v2.UpdateStatus": {
        "caseId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CaseUpdateStatusRequest",
            "format": "",
            },
        "operationResponseType": "CaseResponse",
    },
    "v2.UpdateCaseTitle": {
        "caseId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CaseUpdateTitleRequest",
            "format": "",
            },
        "operationResponseType": "CaseResponse",
    },
    "v2.UnarchiveCase": {
        "caseId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CaseEmptyRequest",
            "format": "",
            },
        "operationResponseType": "CaseResponse",
    },
    "v2.UnassignCase": {
        "caseId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CaseEmptyRequest",
            "format": "",
            },
        "operationResponseType": "CaseResponse",
    },
    "v2.GetAllCaseTypes": {
        "operationResponseType": "CaseTypesResponse",
    },
    "v2.CreateCaseType": {
        "body": {
            "type": "CaseTypeCreateRequest",
            "format": "",
            },
        "operationResponseType": "CaseTypeResponse",
    },
    "v2.DeleteCaseType": {
        "caseTypeId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.GetAllCustomAttributes": {
        "operationResponseType": "CustomAttributeConfigsResponse",
    },
    "v2.GetAllCustomAttributeConfigsByCaseType": {
        "caseTypeId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "CustomAttributeConfigsResponse",
    },
    "v2.CreateCustomAttributeConfig": {
        "caseTypeId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CustomAttributeConfigCreateRequest",
            "format": "",
            },
        "operationResponseType": "CustomAttributeConfigResponse",
    },
    "v2.DeleteCustomAttributeConfig": {
        "caseTypeId": {
            "type": "string",
            "format": "",
            },
        "customAttributeId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.ListCatalogEntity": {
        "pageOffset": {
            "type": "number",
            "format": "int64",
            },
        "pageLimit": {
            "type": "number",
            "format": "int64",
            },
        "filterId": {
            "type": "string",
            "format": "",
            },
        "filterRef": {
            "type": "string",
            "format": "",
            },
        "filterName": {
            "type": "string",
            "format": "",
            },
        "filterKind": {
            "type": "string",
            "format": "",
            },
        "filterOwner": {
            "type": "string",
            "format": "",
            },
        "filterRelationType": {
            "type": "RelationType",
            "format": "",
            },
        "filterExcludeSnapshot": {
            "type": "string",
            "format": "",
            },
        "include": {
            "type": "IncludeType",
            "format": "",
            },
        "includeDiscovered": {
            "type": "boolean",
            "format": "",
            },
        "operationResponseType": "ListEntityCatalogResponse",
    },
    "v2.UpsertCatalogEntity": {
        "body": {
            "type": "UpsertCatalogEntityRequest",
            "format": "",
            },
        "operationResponseType": "UpsertCatalogEntityResponse",
    },
    "v2.PreviewCatalogEntities": {
        "operationResponseType": "EntityResponseArray",
    },
    "v2.DeleteCatalogEntity": {
        "entityId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.ListCatalogKind": {
        "pageOffset": {
            "type": "number",
            "format": "int64",
            },
        "pageLimit": {
            "type": "number",
            "format": "int64",
            },
        "filterId": {
            "type": "string",
            "format": "",
            },
        "filterName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ListKindCatalogResponse",
    },
    "v2.UpsertCatalogKind": {
        "body": {
            "type": "UpsertCatalogKindRequest",
            "format": "",
            },
        "operationResponseType": "UpsertCatalogKindResponse",
    },
    "v2.DeleteCatalogKind": {
        "kindId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.ListCatalogRelation": {
        "pageOffset": {
            "type": "number",
            "format": "int64",
            },
        "pageLimit": {
            "type": "number",
            "format": "int64",
            },
        "filterType": {
            "type": "RelationType",
            "format": "",
            },
        "filterFromRef": {
            "type": "string",
            "format": "",
            },
        "filterToRef": {
            "type": "string",
            "format": "",
            },
        "include": {
            "type": "RelationIncludeType",
            "format": "",
            },
        "includeDiscovered": {
            "type": "boolean",
            "format": "",
            },
        "operationResponseType": "ListRelationCatalogResponse",
    },
    "v2.CreateCIAppPipelineEvent": {
        "body": {
            "type": "CIAppCreatePipelineEventRequest",
            "format": "",
            },
        "operationResponseType": "any",
    },
    "v2.AggregateCIAppPipelineEvents": {
        "body": {
            "type": "CIAppPipelinesAggregateRequest",
            "format": "",
            },
        "operationResponseType": "CIAppPipelinesAnalyticsAggregateResponse",
    },
    "v2.ListCIAppPipelineEvents": {
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
            "type": "CIAppSort",
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
        "operationResponseType": "CIAppPipelineEventsResponse",
    },
    "v2.SearchCIAppPipelineEvents": {
        "body": {
            "type": "CIAppPipelineEventsRequest",
            "format": "",
            },
        "operationResponseType": "CIAppPipelineEventsResponse",
    },
    "v2.AggregateCIAppTestEvents": {
        "body": {
            "type": "CIAppTestsAggregateRequest",
            "format": "",
            },
        "operationResponseType": "CIAppTestsAnalyticsAggregateResponse",
    },
    "v2.ListCIAppTestEvents": {
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
            "type": "CIAppSort",
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
        "operationResponseType": "CIAppTestEventsResponse",
    },
    "v2.SearchCIAppTestEvents": {
        "body": {
            "type": "CIAppTestEventsRequest",
            "format": "",
            },
        "operationResponseType": "CIAppTestEventsResponse",
    },
    "v2.CreateCustomFramework": {
        "body": {
            "type": "CreateCustomFrameworkRequest",
            "format": "",
            },
        "operationResponseType": "CreateCustomFrameworkResponse",
    },
    "v2.GetCustomFramework": {
        "handle": {
            "type": "string",
            "format": "",
            },
        "version": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "GetCustomFrameworkResponse",
    },
    "v2.UpdateCustomFramework": {
        "handle": {
            "type": "string",
            "format": "",
            },
        "version": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "UpdateCustomFrameworkRequest",
            "format": "",
            },
        "operationResponseType": "UpdateCustomFrameworkResponse",
    },
    "v2.DeleteCustomFramework": {
        "handle": {
            "type": "string",
            "format": "",
            },
        "version": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "DeleteCustomFrameworkResponse",
    },
    "v2.GetResourceEvaluationFilters": {
        "cloudProvider": {
            "type": "string",
            "format": "",
            },
        "accountId": {
            "type": "string",
            "format": "",
            },
        "skipCache": {
            "type": "boolean",
            "format": "",
            },
        "operationResponseType": "GetResourceEvaluationFiltersResponse",
    },
    "v2.UpdateResourceEvaluationFilters": {
        "body": {
            "type": "UpdateResourceEvaluationFiltersRequest",
            "format": "",
            },
        "operationResponseType": "UpdateResourceEvaluationFiltersResponse",
    },
    "v2.ListFindings": {
        "pageLimit": {
            "type": "number",
            "format": "int64",
            },
        "snapshotTimestamp": {
            "type": "number",
            "format": "int64",
            },
        "pageCursor": {
            "type": "string",
            "format": "",
            },
        "filterTags": {
            "type": "string",
            "format": "",
            },
        "filterEvaluationChangedAt": {
            "type": "string",
            "format": "",
            },
        "filterMuted": {
            "type": "boolean",
            "format": "",
            },
        "filterRuleId": {
            "type": "string",
            "format": "",
            },
        "filterRuleName": {
            "type": "string",
            "format": "",
            },
        "filterResourceType": {
            "type": "string",
            "format": "",
            },
        "filterResourceId": {
            "type": "string",
            "format": "",
            },
        "filterDiscoveryTimestamp": {
            "type": "string",
            "format": "",
            },
        "filterEvaluation": {
            "type": "FindingEvaluation",
            "format": "",
            },
        "filterStatus": {
            "type": "FindingStatus",
            "format": "",
            },
        "filterVulnerabilityType": {
            "type": "Array<FindingVulnerabilityType>",
            "format": "",
            },
        "detailedFindings": {
            "type": "boolean",
            "format": "",
            },
        "operationResponseType": "ListFindingsResponse",
    },
    "v2.MuteFindings": {
        "body": {
            "type": "BulkMuteFindingsRequest",
            "format": "",
            },
        "operationResponseType": "BulkMuteFindingsResponse",
    },
    "v2.GetFinding": {
        "findingId": {
            "type": "string",
            "format": "",
            },
        "snapshotTimestamp": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "GetFindingResponse",
    },
    "v2.ListSecurityFindings": {
        "filterQuery": {
            "type": "string",
            "format": "",
            },
        "pageCursor": {
            "type": "string",
            "format": "",
            },
        "pageLimit": {
            "type": "number",
            "format": "int64",
            },
        "sort": {
            "type": "SecurityFindingsSort",
            "format": "",
            },
        "operationResponseType": "ListSecurityFindingsResponse",
    },
    "v2.CreateCases": {
        "body": {
            "type": "CreateCaseRequestArray",
            "format": "",
            },
        "operationResponseType": "FindingCaseResponseArray",
    },
    "v2.DetachCase": {
        "body": {
            "type": "DetachCaseRequest",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.AttachCase": {
        "caseId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "AttachCaseRequest",
            "format": "",
            },
        "operationResponseType": "FindingCaseResponse",
    },
    "v2.CreateJiraIssues": {
        "body": {
            "type": "CreateJiraIssueRequestArray",
            "format": "",
            },
        "operationResponseType": "FindingCaseResponseArray",
    },
    "v2.AttachJiraIssue": {
        "body": {
            "type": "AttachJiraIssueRequest",
            "format": "",
            },
        "operationResponseType": "FindingCaseResponse",
    },
    "v2.SearchSecurityFindings": {
        "body": {
            "type": "SecurityFindingsSearchRequest",
            "format": "",
            },
        "operationResponseType": "ListSecurityFindingsResponse",
    },
    "v2.ListAssetsSBOMs": {
        "pageToken": {
            "type": "string",
            "format": "",
            },
        "pageNumber": {
            "type": "number",
            "format": "int64",
            },
        "filterAssetType": {
            "type": "AssetType",
            "format": "",
            },
        "filterAssetName": {
            "type": "string",
            "format": "",
            },
        "filterPackageName": {
            "type": "string",
            "format": "",
            },
        "filterPackageVersion": {
            "type": "string",
            "format": "",
            },
        "filterLicenseName": {
            "type": "string",
            "format": "",
            },
        "filterLicenseType": {
            "type": "SBOMComponentLicenseType",
            "format": "",
            },
        "operationResponseType": "ListAssetsSBOMsResponse",
    },
    "v2.GetSBOM": {
        "assetType": {
            "type": "AssetType",
            "format": "",
            },
        "filterAssetName": {
            "type": "string",
            "format": "",
            },
        "filterRepoDigest": {
            "type": "string",
            "format": "",
            },
        "extFormat": {
            "type": "SBOMFormat",
            "format": "",
            },
        "operationResponseType": "GetSBOMResponse",
    },
    "v2.ListScannedAssetsMetadata": {
        "pageToken": {
            "type": "string",
            "format": "",
            },
        "pageNumber": {
            "type": "number",
            "format": "int64",
            },
        "filterAssetType": {
            "type": "CloudAssetType",
            "format": "",
            },
        "filterAssetName": {
            "type": "string",
            "format": "",
            },
        "filterLastSuccessOrigin": {
            "type": "string",
            "format": "",
            },
        "filterLastSuccessEnv": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ScannedAssetsMetadata",
    },
    "v2.GetSignalNotificationRules": {
        "operationResponseType": "NotificationRulesList",
    },
    "v2.CreateSignalNotificationRule": {
        "body": {
            "type": "CreateNotificationRuleParameters",
            "format": "",
            },
        "operationResponseType": "NotificationRuleResponse",
    },
    "v2.GetSignalNotificationRule": {
        "id": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "NotificationRuleResponse",
    },
    "v2.DeleteSignalNotificationRule": {
        "id": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.PatchSignalNotificationRule": {
        "id": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "PatchNotificationRuleParameters",
            "format": "",
            },
        "operationResponseType": "NotificationRuleResponse",
    },
    "v2.ListVulnerabilities": {
        "pageToken": {
            "type": "string",
            "format": "",
            },
        "pageNumber": {
            "type": "number",
            "format": "int64",
            },
        "filterType": {
            "type": "VulnerabilityType",
            "format": "",
            },
        "filterCvssBaseScoreOp": {
            "type": "number",
            "format": "double",
            },
        "filterCvssBaseSeverity": {
            "type": "VulnerabilitySeverity",
            "format": "",
            },
        "filterCvssBaseVector": {
            "type": "string",
            "format": "",
            },
        "filterCvssDatadogScoreOp": {
            "type": "number",
            "format": "double",
            },
        "filterCvssDatadogSeverity": {
            "type": "VulnerabilitySeverity",
            "format": "",
            },
        "filterCvssDatadogVector": {
            "type": "string",
            "format": "",
            },
        "filterStatus": {
            "type": "VulnerabilityStatus",
            "format": "",
            },
        "filterTool": {
            "type": "VulnerabilityTool",
            "format": "",
            },
        "filterLibraryName": {
            "type": "string",
            "format": "",
            },
        "filterLibraryVersion": {
            "type": "string",
            "format": "",
            },
        "filterAdvisoryId": {
            "type": "string",
            "format": "",
            },
        "filterRisksExploitationProbability": {
            "type": "boolean",
            "format": "",
            },
        "filterRisksPocExploitAvailable": {
            "type": "boolean",
            "format": "",
            },
        "filterRisksExploitAvailable": {
            "type": "boolean",
            "format": "",
            },
        "filterRisksEpssScoreOp": {
            "type": "number",
            "format": "double",
            },
        "filterRisksEpssSeverity": {
            "type": "VulnerabilitySeverity",
            "format": "",
            },
        "filterLanguage": {
            "type": "string",
            "format": "",
            },
        "filterEcosystem": {
            "type": "VulnerabilityEcosystem",
            "format": "",
            },
        "filterCodeLocationLocation": {
            "type": "string",
            "format": "",
            },
        "filterCodeLocationFilePath": {
            "type": "string",
            "format": "",
            },
        "filterCodeLocationMethod": {
            "type": "string",
            "format": "",
            },
        "filterFixAvailable": {
            "type": "boolean",
            "format": "",
            },
        "filterRepoDigests": {
            "type": "string",
            "format": "",
            },
        "filterOrigin": {
            "type": "string",
            "format": "",
            },
        "filterRunningKernel": {
            "type": "boolean",
            "format": "",
            },
        "filterAssetName": {
            "type": "string",
            "format": "",
            },
        "filterAssetType": {
            "type": "AssetType",
            "format": "",
            },
        "filterAssetVersionFirst": {
            "type": "string",
            "format": "",
            },
        "filterAssetVersionLast": {
            "type": "string",
            "format": "",
            },
        "filterAssetRepositoryUrl": {
            "type": "string",
            "format": "",
            },
        "filterAssetRisksInProduction": {
            "type": "boolean",
            "format": "",
            },
        "filterAssetRisksUnderAttack": {
            "type": "boolean",
            "format": "",
            },
        "filterAssetRisksIsPubliclyAccessible": {
            "type": "boolean",
            "format": "",
            },
        "filterAssetRisksHasPrivilegedAccess": {
            "type": "boolean",
            "format": "",
            },
        "filterAssetRisksHasAccessToSensitiveData": {
            "type": "boolean",
            "format": "",
            },
        "filterAssetEnvironments": {
            "type": "string",
            "format": "",
            },
        "filterAssetTeams": {
            "type": "string",
            "format": "",
            },
        "filterAssetArch": {
            "type": "string",
            "format": "",
            },
        "filterAssetOperatingSystemName": {
            "type": "string",
            "format": "",
            },
        "filterAssetOperatingSystemVersion": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ListVulnerabilitiesResponse",
    },
    "v2.GetVulnerabilityNotificationRules": {
        "operationResponseType": "NotificationRulesList",
    },
    "v2.CreateVulnerabilityNotificationRule": {
        "body": {
            "type": "CreateNotificationRuleParameters",
            "format": "",
            },
        "operationResponseType": "NotificationRuleResponse",
    },
    "v2.GetVulnerabilityNotificationRule": {
        "id": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "NotificationRuleResponse",
    },
    "v2.DeleteVulnerabilityNotificationRule": {
        "id": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.PatchVulnerabilityNotificationRule": {
        "id": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "PatchNotificationRuleParameters",
            "format": "",
            },
        "operationResponseType": "NotificationRuleResponse",
    },
    "v2.ListVulnerableAssets": {
        "pageToken": {
            "type": "string",
            "format": "",
            },
        "pageNumber": {
            "type": "number",
            "format": "int64",
            },
        "filterName": {
            "type": "string",
            "format": "",
            },
        "filterType": {
            "type": "AssetType",
            "format": "",
            },
        "filterVersionFirst": {
            "type": "string",
            "format": "",
            },
        "filterVersionLast": {
            "type": "string",
            "format": "",
            },
        "filterRepositoryUrl": {
            "type": "string",
            "format": "",
            },
        "filterRisksInProduction": {
            "type": "boolean",
            "format": "",
            },
        "filterRisksUnderAttack": {
            "type": "boolean",
            "format": "",
            },
        "filterRisksIsPubliclyAccessible": {
            "type": "boolean",
            "format": "",
            },
        "filterRisksHasPrivilegedAccess": {
            "type": "boolean",
            "format": "",
            },
        "filterRisksHasAccessToSensitiveData": {
            "type": "boolean",
            "format": "",
            },
        "filterEnvironments": {
            "type": "string",
            "format": "",
            },
        "filterTeams": {
            "type": "string",
            "format": "",
            },
        "filterArch": {
            "type": "string",
            "format": "",
            },
        "filterOperatingSystemName": {
            "type": "string",
            "format": "",
            },
        "filterOperatingSystemVersion": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ListVulnerableAssetsResponse",
    },
    "v2.ListSecurityMonitoringCriticalAssets": {
        "query": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SecurityMonitoringCriticalAssetsResponse",
    },
    "v2.CreateSecurityMonitoringCriticalAsset": {
        "body": {
            "type": "SecurityMonitoringCriticalAssetCreateRequest",
            "format": "",
            },
        "operationResponseType": "SecurityMonitoringCriticalAssetResponse",
    },
    "v2.GetCriticalAssetsAffectingRule": {
        "ruleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SecurityMonitoringCriticalAssetsResponse",
    },
    "v2.GetSecurityMonitoringCriticalAsset": {
        "criticalAssetId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SecurityMonitoringCriticalAssetResponse",
    },
    "v2.DeleteSecurityMonitoringCriticalAsset": {
        "criticalAssetId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateSecurityMonitoringCriticalAsset": {
        "criticalAssetId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "SecurityMonitoringCriticalAssetUpdateRequest",
            "format": "",
            },
        "operationResponseType": "SecurityMonitoringCriticalAssetResponse",
    },
    "v2.ListSecurityFilters": {
        "operationResponseType": "SecurityFiltersResponse",
    },
    "v2.CreateSecurityFilter": {
        "body": {
            "type": "SecurityFilterCreateRequest",
            "format": "",
            },
        "operationResponseType": "SecurityFilterResponse",
    },
    "v2.GetSecurityFilter": {
        "securityFilterId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SecurityFilterResponse",
    },
    "v2.DeleteSecurityFilter": {
        "securityFilterId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
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
        "operationResponseType": "SecurityFilterResponse",
    },
    "v2.ListSecurityMonitoringSuppressions": {
        "query": {
            "type": "string",
            "format": "",
            },
        "sort": {
            "type": "SecurityMonitoringSuppressionSort",
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
        "operationResponseType": "SecurityMonitoringPaginatedSuppressionsResponse",
    },
    "v2.CreateSecurityMonitoringSuppression": {
        "body": {
            "type": "SecurityMonitoringSuppressionCreateRequest",
            "format": "",
            },
        "operationResponseType": "SecurityMonitoringSuppressionResponse",
    },
    "v2.GetSuppressionsAffectingFutureRule": {
        "body": {
            "type": "SecurityMonitoringRuleCreatePayload",
            "format": "",
            },
        "operationResponseType": "SecurityMonitoringSuppressionsResponse",
    },
    "v2.GetSuppressionsAffectingRule": {
        "ruleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SecurityMonitoringSuppressionsResponse",
    },
    "v2.ValidateSecurityMonitoringSuppression": {
        "body": {
            "type": "SecurityMonitoringSuppressionCreateRequest",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.GetSecurityMonitoringSuppression": {
        "suppressionId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SecurityMonitoringSuppressionResponse",
    },
    "v2.DeleteSecurityMonitoringSuppression": {
        "suppressionId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateSecurityMonitoringSuppression": {
        "suppressionId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "SecurityMonitoringSuppressionUpdateRequest",
            "format": "",
            },
        "operationResponseType": "SecurityMonitoringSuppressionResponse",
    },
    "v2.GetSuppressionVersionHistory": {
        "suppressionId": {
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
        "operationResponseType": "GetSuppressionVersionHistoryResponse",
    },
    "v2.GetContentPacksStates": {
        "operationResponseType": "SecurityMonitoringContentPackStatesResponse",
    },
    "v2.ActivateContentPack": {
        "contentPackId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.DeactivateContentPack": {
        "contentPackId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
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
        "query": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SecurityMonitoringListRulesResponse",
    },
    "v2.CreateSecurityMonitoringRule": {
        "body": {
            "type": "SecurityMonitoringRuleCreatePayload",
            "format": "",
            },
        "operationResponseType": "SecurityMonitoringRuleResponse",
    },
    "v2.BulkExportSecurityMonitoringRules": {
        "body": {
            "type": "SecurityMonitoringRuleBulkExportPayload",
            "format": "",
            },
        "operationResponseType": "HttpFile",
    },
    "v2.ConvertSecurityMonitoringRuleFromJSONToTerraform": {
        "body": {
            "type": "SecurityMonitoringRuleConvertPayload",
            "format": "",
            },
        "operationResponseType": "SecurityMonitoringRuleConvertResponse",
    },
    "v2.TestSecurityMonitoringRule": {
        "body": {
            "type": "SecurityMonitoringRuleTestRequest",
            "format": "",
            },
        "operationResponseType": "SecurityMonitoringRuleTestResponse",
    },
    "v2.ValidateSecurityMonitoringRule": {
        "body": {
            "type": "SecurityMonitoringRuleValidatePayload",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.GetSecurityMonitoringRule": {
        "ruleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SecurityMonitoringRuleResponse",
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
        "operationResponseType": "SecurityMonitoringRuleResponse",
    },
    "v2.DeleteSecurityMonitoringRule": {
        "ruleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.ConvertExistingSecurityMonitoringRule": {
        "ruleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SecurityMonitoringRuleConvertResponse",
    },
    "v2.TestExistingSecurityMonitoringRule": {
        "ruleId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "SecurityMonitoringRuleTestRequest",
            "format": "",
            },
        "operationResponseType": "SecurityMonitoringRuleTestResponse",
    },
    "v2.GetRuleVersionHistory": {
        "ruleId": {
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
        "operationResponseType": "GetRuleVersionHistoryResponse",
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
        "operationResponseType": "SecurityMonitoringSignalsListResponse",
    },
    "v2.SearchSecurityMonitoringSignals": {
        "body": {
            "type": "SecurityMonitoringSignalListRequest",
            "format": "",
            },
        "operationResponseType": "SecurityMonitoringSignalsListResponse",
    },
    "v2.GetSecurityMonitoringSignal": {
        "signalId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SecurityMonitoringSignalResponse",
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
        "operationResponseType": "SecurityMonitoringSignalTriageUpdateResponse",
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
        "operationResponseType": "SecurityMonitoringSignalTriageUpdateResponse",
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
        "operationResponseType": "SecurityMonitoringSignalTriageUpdateResponse",
    },
    "v2.ListSecurityMonitoringHistsignals": {
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
        "operationResponseType": "SecurityMonitoringSignalsListResponse",
    },
    "v2.SearchSecurityMonitoringHistsignals": {
        "body": {
            "type": "SecurityMonitoringSignalListRequest",
            "format": "",
            },
        "operationResponseType": "SecurityMonitoringSignalsListResponse",
    },
    "v2.GetSecurityMonitoringHistsignal": {
        "histsignalId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SecurityMonitoringSignalResponse",
    },
    "v2.ListThreatHuntingJobs": {
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
        "filterQuery": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ListThreatHuntingJobsResponse",
    },
    "v2.RunThreatHuntingJob": {
        "body": {
            "type": "RunThreatHuntingJobRequest",
            "format": "",
            },
        "operationResponseType": "JobCreateResponse",
    },
    "v2.ConvertJobResultToSignal": {
        "body": {
            "type": "ConvertJobResultsToSignalsRequest",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.GetThreatHuntingJob": {
        "jobId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ThreatHuntingJobResponse",
    },
    "v2.DeleteThreatHuntingJob": {
        "jobId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.CancelThreatHuntingJob": {
        "jobId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.GetSecurityMonitoringHistsignalsByJobId": {
        "jobId": {
            "type": "string",
            "format": "",
            },
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
        "operationResponseType": "SecurityMonitoringSignalsListResponse",
    },
    "v2.ListMultipleRulesets": {
        "body": {
            "type": "GetMultipleRulesetsRequest",
            "format": "",
            },
        "operationResponseType": "GetMultipleRulesetsResponse",
    },
    "v2.GetSecretsRules": {
        "operationResponseType": "SecretRuleArray",
    },
    "v2.ListContainerImages": {
        "filterTags": {
            "type": "string",
            "format": "",
            },
        "groupBy": {
            "type": "string",
            "format": "",
            },
        "sort": {
            "type": "string",
            "format": "",
            },
        "pageSize": {
            "type": "number",
            "format": "int32",
            },
        "pageCursor": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ContainerImagesResponse",
    },
    "v2.ListContainers": {
        "filterTags": {
            "type": "string",
            "format": "",
            },
        "groupBy": {
            "type": "string",
            "format": "",
            },
        "sort": {
            "type": "string",
            "format": "",
            },
        "pageSize": {
            "type": "number",
            "format": "int32",
            },
        "pageCursor": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ContainersResponse",
    },
    "v2.ListCustomAllocationRules": {
        "operationResponseType": "ArbitraryRuleResponseArray",
    },
    "v2.CreateCustomAllocationRule": {
        "body": {
            "type": "ArbitraryCostUpsertRequest",
            "format": "",
            },
        "operationResponseType": "ArbitraryRuleResponse",
    },
    "v2.ReorderCustomAllocationRules": {
        "body": {
            "type": "ReorderRuleResourceArray",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.GetCustomAllocationRule": {
        "ruleId": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "ArbitraryRuleResponse",
    },
    "v2.DeleteCustomAllocationRule": {
        "ruleId": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateCustomAllocationRule": {
        "ruleId": {
            "type": "number",
            "format": "int64",
            },
        "body": {
            "type": "ArbitraryCostUpsertRequest",
            "format": "",
            },
        "operationResponseType": "ArbitraryRuleResponse",
    },
    "v2.ListCostAWSCURConfigs": {
        "operationResponseType": "AwsCURConfigsResponse",
    },
    "v2.CreateCostAWSCURConfig": {
        "body": {
            "type": "AwsCURConfigPostRequest",
            "format": "",
            },
        "operationResponseType": "AwsCurConfigResponse",
    },
    "v2.GetCostAWSCURConfig": {
        "cloudAccountId": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "AwsCurConfigResponse",
    },
    "v2.DeleteCostAWSCURConfig": {
        "cloudAccountId": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateCostAWSCURConfig": {
        "cloudAccountId": {
            "type": "number",
            "format": "int64",
            },
        "body": {
            "type": "AwsCURConfigPatchRequest",
            "format": "",
            },
        "operationResponseType": "AwsCURConfigsResponse",
    },
    "v2.ListCostAzureUCConfigs": {
        "operationResponseType": "AzureUCConfigsResponse",
    },
    "v2.CreateCostAzureUCConfigs": {
        "body": {
            "type": "AzureUCConfigPostRequest",
            "format": "",
            },
        "operationResponseType": "AzureUCConfigPairsResponse",
    },
    "v2.GetCostAzureUCConfig": {
        "cloudAccountId": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "UCConfigPair",
    },
    "v2.DeleteCostAzureUCConfig": {
        "cloudAccountId": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateCostAzureUCConfigs": {
        "cloudAccountId": {
            "type": "number",
            "format": "int64",
            },
        "body": {
            "type": "AzureUCConfigPatchRequest",
            "format": "",
            },
        "operationResponseType": "AzureUCConfigPairsResponse",
    },
    "v2.UpsertBudget": {
        "body": {
            "type": "BudgetWithEntries",
            "format": "",
            },
        "operationResponseType": "BudgetWithEntries",
    },
    "v2.ValidateCsvBudget": {
        "operationResponseType": "ValidationResponse",
    },
    "v2.ValidateBudget": {
        "body": {
            "type": "BudgetValidationRequest",
            "format": "",
            },
        "operationResponseType": "BudgetValidationResponse",
    },
    "v2.GetBudget": {
        "budgetId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "BudgetWithEntries",
    },
    "v2.DeleteBudget": {
        "budgetId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.ListBudgets": {
        "operationResponseType": "BudgetArray",
    },
    "v2.ListCustomCostsFiles": {
        "pageNumber": {
            "type": "number",
            "format": "int64",
            },
        "pageSize": {
            "type": "number",
            "format": "int64",
            },
        "filterStatus": {
            "type": "string",
            "format": "",
            },
        "sort": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "CustomCostsFileListResponse",
    },
    "v2.UploadCustomCostsFile": {
        "body": {
            "type": "Array<CustomCostsFileLineItem>",
            "format": "",
            },
        "operationResponseType": "CustomCostsFileUploadResponse",
    },
    "v2.GetCustomCostsFile": {
        "fileId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "CustomCostsFileGetResponse",
    },
    "v2.DeleteCustomCostsFile": {
        "fileId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.ListCostGCPUsageCostConfigs": {
        "operationResponseType": "GCPUsageCostConfigsResponse",
    },
    "v2.CreateCostGCPUsageCostConfig": {
        "body": {
            "type": "GCPUsageCostConfigPostRequest",
            "format": "",
            },
        "operationResponseType": "GCPUsageCostConfigResponse",
    },
    "v2.GetCostGCPUsageCostConfig": {
        "cloudAccountId": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "GcpUcConfigResponse",
    },
    "v2.DeleteCostGCPUsageCostConfig": {
        "cloudAccountId": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateCostGCPUsageCostConfig": {
        "cloudAccountId": {
            "type": "number",
            "format": "int64",
            },
        "body": {
            "type": "GCPUsageCostConfigPatchRequest",
            "format": "",
            },
        "operationResponseType": "GCPUsageCostConfigResponse",
    },
    "v2.ListTagPipelinesRulesets": {
        "operationResponseType": "RulesetRespArray",
    },
    "v2.CreateTagPipelinesRuleset": {
        "body": {
            "type": "CreateRulesetRequest",
            "format": "",
            },
        "operationResponseType": "RulesetResp",
    },
    "v2.ReorderTagPipelinesRulesets": {
        "body": {
            "type": "ReorderRulesetResourceArray",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.ValidateQuery": {
        "body": {
            "type": "RulesValidateQueryRequest",
            "format": "",
            },
        "operationResponseType": "RulesValidateQueryResponse",
    },
    "v2.GetTagPipelinesRuleset": {
        "rulesetId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "RulesetResp",
    },
    "v2.DeleteTagPipelinesRuleset": {
        "rulesetId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateTagPipelinesRuleset": {
        "rulesetId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "UpdateRulesetRequest",
            "format": "",
            },
        "operationResponseType": "RulesetResp",
    },
    "v2.GetActiveBillingDimensions": {
        "operationResponseType": "ActiveBillingDimensionsResponse",
    },
    "v2.GetMonthlyCostAttribution": {
        "startMonth": {
            "type": "Date",
            "format": "date-time",
            },
        "endMonth": {
            "type": "Date",
            "format": "date-time",
            },
        "fields": {
            "type": "string",
            "format": "",
            },
        "sortDirection": {
            "type": "SortDirection",
            "format": "",
            },
        "sortName": {
            "type": "string",
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
        "operationResponseType": "MonthlyCostAttributionResponse",
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
        "operationResponseType": "UsageApplicationSecurityMonitoringResponse",
    },
    "v2.GetBillingDimensionMapping": {
        "filterMonth": {
            "type": "Date",
            "format": "date-time",
            },
        "filterView": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "BillingDimensionsMappingResponse",
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
        "operationResponseType": "CostByOrgResponse",
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
        "includeConnectedAccounts": {
            "type": "boolean",
            "format": "",
            },
        "operationResponseType": "CostByOrgResponse",
    },
    "v2.GetHistoricalCostByOrg": {
        "startMonth": {
            "type": "Date",
            "format": "date-time",
            },
        "view": {
            "type": "string",
            "format": "",
            },
        "endMonth": {
            "type": "Date",
            "format": "date-time",
            },
        "includeConnectedAccounts": {
            "type": "boolean",
            "format": "",
            },
        "operationResponseType": "CostByOrgResponse",
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
        "filterIncludeConnectedAccounts": {
            "type": "boolean",
            "format": "",
            },
        "filterIncludeBreakdown": {
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
        "operationResponseType": "HourlyUsageResponse",
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
        "operationResponseType": "UsageLambdaTracedInvocationsResponse",
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
        "operationResponseType": "UsageObservabilityPipelinesResponse",
    },
    "v2.GetProjectedCost": {
        "view": {
            "type": "string",
            "format": "",
            },
        "includeConnectedAccounts": {
            "type": "boolean",
            "format": "",
            },
        "operationResponseType": "ProjectedCostResponse",
    },
    "v2.ListAllCSMAgents": {
        "page": {
            "type": "number",
            "format": "int32",
            },
        "size": {
            "type": "number",
            "format": "int32",
            },
        "query": {
            "type": "string",
            "format": "",
            },
        "orderDirection": {
            "type": "OrderDirection",
            "format": "",
            },
        "operationResponseType": "CsmAgentsResponse",
    },
    "v2.ListAllCSMServerlessAgents": {
        "page": {
            "type": "number",
            "format": "int32",
            },
        "size": {
            "type": "number",
            "format": "int32",
            },
        "query": {
            "type": "string",
            "format": "",
            },
        "orderDirection": {
            "type": "OrderDirection",
            "format": "",
            },
        "operationResponseType": "CsmAgentsResponse",
    },
    "v2.GetCSMCloudAccountsCoverageAnalysis": {
        "operationResponseType": "CsmCloudAccountsCoverageAnalysisResponse",
    },
    "v2.GetCSMHostsAndContainersCoverageAnalysis": {
        "operationResponseType": "CsmHostsAndContainersCoverageAnalysisResponse",
    },
    "v2.GetCSMServerlessCoverageAnalysis": {
        "operationResponseType": "CsmServerlessCoverageAnalysisResponse",
    },
    "v2.GetDashboardListItems": {
        "dashboardListId": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "DashboardListItems",
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
        "operationResponseType": "DashboardListUpdateItemsResponse",
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
        "operationResponseType": "DashboardListAddItemsResponse",
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
        "operationResponseType": "DashboardListDeleteItemsResponse",
    },
    "v2.GetAllDatasets": {
        "operationResponseType": "DatasetResponseMulti",
    },
    "v2.CreateDataset": {
        "body": {
            "type": "DatasetCreateRequest",
            "format": "",
            },
        "operationResponseType": "DatasetResponseSingle",
    },
    "v2.GetDataset": {
        "datasetId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "DatasetResponseSingle",
    },
    "v2.UpdateDataset": {
        "datasetId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "DatasetUpdateRequest",
            "format": "",
            },
        "operationResponseType": "DatasetResponseSingle",
    },
    "v2.DeleteDataset": {
        "datasetId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.CreateDataDeletionRequest": {
        "product": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CreateDataDeletionRequestBody",
            "format": "",
            },
        "operationResponseType": "CreateDataDeletionResponseBody",
    },
    "v2.GetDataDeletionRequests": {
        "nextPage": {
            "type": "string",
            "format": "",
            },
        "product": {
            "type": "string",
            "format": "",
            },
        "query": {
            "type": "string",
            "format": "",
            },
        "status": {
            "type": "string",
            "format": "",
            },
        "pageSize": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "GetDataDeletionsResponseBody",
    },
    "v2.CancelDataDeletionRequest": {
        "id": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "CancelDataDeletionResponseBody",
    },
    "v2.CreateDeploymentGate": {
        "body": {
            "type": "CreateDeploymentGateParams",
            "format": "",
            },
        "operationResponseType": "DeploymentGateResponse",
    },
    "v2.GetDeploymentGateRules": {
        "gateId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "DeploymentGateRulesResponse",
    },
    "v2.CreateDeploymentRule": {
        "gateId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CreateDeploymentRuleParams",
            "format": "",
            },
        "operationResponseType": "DeploymentRuleResponse",
    },
    "v2.GetDeploymentRule": {
        "gateId": {
            "type": "string",
            "format": "",
            },
        "id": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "DeploymentRuleResponse",
    },
    "v2.UpdateDeploymentRule": {
        "gateId": {
            "type": "string",
            "format": "",
            },
        "id": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "UpdateDeploymentRuleParams",
            "format": "",
            },
        "operationResponseType": "DeploymentRuleResponse",
    },
    "v2.DeleteDeploymentRule": {
        "gateId": {
            "type": "string",
            "format": "",
            },
        "id": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.GetDeploymentGate": {
        "id": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "DeploymentGateResponse",
    },
    "v2.UpdateDeploymentGate": {
        "id": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "UpdateDeploymentGateParams",
            "format": "",
            },
        "operationResponseType": "DeploymentGateResponse",
    },
    "v2.DeleteDeploymentGate": {
        "id": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.GetDomainAllowlist": {
        "operationResponseType": "DomainAllowlistResponse",
    },
    "v2.PatchDomainAllowlist": {
        "body": {
            "type": "DomainAllowlistRequest",
            "format": "",
            },
        "operationResponseType": "DomainAllowlistResponse",
    },
    "v2.CreateDORADeployment": {
        "body": {
            "type": "DORADeploymentRequest",
            "format": "",
            },
        "operationResponseType": "DORADeploymentResponse",
    },
    "v2.DeleteDORADeployment": {
        "deploymentId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.ListDORADeployments": {
        "body": {
            "type": "DORAListDeploymentsRequest",
            "format": "",
            },
        "operationResponseType": "DORADeploymentsListResponse",
    },
    "v2.GetDORADeployment": {
        "deploymentId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "DORADeploymentFetchResponse",
    },
    "v2.PatchDORADeployment": {
        "deploymentId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "DORADeploymentPatchRequest",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.CreateDORAFailure": {
        "body": {
            "type": "DORAFailureRequest",
            "format": "",
            },
        "operationResponseType": "DORAFailureResponse",
    },
    "v2.DeleteDORAFailure": {
        "failureId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.ListDORAFailures": {
        "body": {
            "type": "DORAListFailuresRequest",
            "format": "",
            },
        "operationResponseType": "DORAFailuresListResponse",
    },
    "v2.GetDORAFailure": {
        "failureId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "DORAFailureFetchResponse",
    },
    "v2.CreateDORAIncident": {
        "body": {
            "type": "DORAFailureRequest",
            "format": "",
            },
        "operationResponseType": "DORAFailureResponse",
    },
    "v2.ListDowntimes": {
        "currentOnly": {
            "type": "boolean",
            "format": "",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "pageOffset": {
            "type": "number",
            "format": "int64",
            },
        "pageLimit": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "ListDowntimesResponse",
    },
    "v2.CreateDowntime": {
        "body": {
            "type": "DowntimeCreateRequest",
            "format": "",
            },
        "operationResponseType": "DowntimeResponse",
    },
    "v2.GetDowntime": {
        "downtimeId": {
            "type": "string",
            "format": "",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "DowntimeResponse",
    },
    "v2.CancelDowntime": {
        "downtimeId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateDowntime": {
        "downtimeId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "DowntimeUpdateRequest",
            "format": "",
            },
        "operationResponseType": "DowntimeResponse",
    },
    "v2.ListMonitorDowntimes": {
        "monitorId": {
            "type": "number",
            "format": "int64",
            },
        "pageOffset": {
            "type": "number",
            "format": "int64",
            },
        "pageLimit": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "MonitorDowntimeMatchResponse",
    },
    "v2.SearchIssues": {
        "include": {
            "type": "Array<SearchIssuesIncludeQueryParameterItem>",
            "format": "",
            },
        "body": {
            "type": "IssuesSearchRequest",
            "format": "",
            },
        "operationResponseType": "IssuesSearchResponse",
    },
    "v2.GetIssue": {
        "issueId": {
            "type": "string",
            "format": "",
            },
        "include": {
            "type": "Array<GetIssueIncludeQueryParameterItem>",
            "format": "",
            },
        "operationResponseType": "IssueResponse",
    },
    "v2.UpdateIssueAssignee": {
        "issueId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "IssueUpdateAssigneeRequest",
            "format": "",
            },
        "operationResponseType": "IssueResponse",
    },
    "v2.DeleteIssueAssignee": {
        "issueId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateIssueState": {
        "issueId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "IssueUpdateStateRequest",
            "format": "",
            },
        "operationResponseType": "IssueResponse",
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
        "operationResponseType": "EventsListResponse",
    },
    "v2.CreateEvent": {
        "body": {
            "type": "EventCreateRequestPayload",
            "format": "",
            },
        "operationResponseType": "EventCreateResponsePayload",
    },
    "v2.SearchEvents": {
        "body": {
            "type": "EventsListRequest",
            "format": "",
            },
        "operationResponseType": "EventsListResponse",
    },
    "v2.GetEvent": {
        "eventId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "V2EventResponse",
    },
    "v2.GetHamrOrgConnection": {
        "operationResponseType": "HamrOrgConnectionResponse",
    },
    "v2.CreateHamrOrgConnection": {
        "body": {
            "type": "HamrOrgConnectionRequest",
            "format": "",
            },
        "operationResponseType": "HamrOrgConnectionResponse",
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
        "operationResponseType": "IncidentsResponse",
    },
    "v2.CreateIncident": {
        "body": {
            "type": "IncidentCreateRequest",
            "format": "",
            },
        "operationResponseType": "IncidentResponse",
    },
    "v2.ListGlobalIncidentHandles": {
        "include": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "IncidentHandlesResponse",
    },
    "v2.UpdateGlobalIncidentHandle": {
        "include": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "IncidentHandleRequest",
            "format": "",
            },
        "operationResponseType": "IncidentHandleResponse",
    },
    "v2.CreateGlobalIncidentHandle": {
        "include": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "IncidentHandleRequest",
            "format": "",
            },
        "operationResponseType": "IncidentHandleResponse",
    },
    "v2.DeleteGlobalIncidentHandle": {
        "operationResponseType": "{}",
    },
    "v2.GetGlobalIncidentSettings": {
        "operationResponseType": "GlobalIncidentSettingsResponse",
    },
    "v2.UpdateGlobalIncidentSettings": {
        "body": {
            "type": "GlobalIncidentSettingsRequest",
            "format": "",
            },
        "operationResponseType": "GlobalIncidentSettingsResponse",
    },
    "v2.ListIncidentNotificationRules": {
        "include": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "IncidentNotificationRuleArray",
    },
    "v2.CreateIncidentNotificationRule": {
        "body": {
            "type": "CreateIncidentNotificationRuleRequest",
            "format": "",
            },
        "operationResponseType": "IncidentNotificationRule",
    },
    "v2.GetIncidentNotificationRule": {
        "id": {
            "type": "string",
            "format": "uuid",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "IncidentNotificationRule",
    },
    "v2.UpdateIncidentNotificationRule": {
        "id": {
            "type": "string",
            "format": "uuid",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "PutIncidentNotificationRuleRequest",
            "format": "",
            },
        "operationResponseType": "IncidentNotificationRule",
    },
    "v2.DeleteIncidentNotificationRule": {
        "id": {
            "type": "string",
            "format": "uuid",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.ListIncidentNotificationTemplates": {
        "filterIncidentType": {
            "type": "string",
            "format": "uuid",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "IncidentNotificationTemplateArray",
    },
    "v2.CreateIncidentNotificationTemplate": {
        "body": {
            "type": "CreateIncidentNotificationTemplateRequest",
            "format": "",
            },
        "operationResponseType": "IncidentNotificationTemplate",
    },
    "v2.GetIncidentNotificationTemplate": {
        "id": {
            "type": "string",
            "format": "uuid",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "IncidentNotificationTemplate",
    },
    "v2.DeleteIncidentNotificationTemplate": {
        "id": {
            "type": "string",
            "format": "uuid",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateIncidentNotificationTemplate": {
        "id": {
            "type": "string",
            "format": "uuid",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "PatchIncidentNotificationTemplateRequest",
            "format": "",
            },
        "operationResponseType": "IncidentNotificationTemplate",
    },
    "v2.ListIncidentConfigRules": {
        "operationResponseType": "IncidentRulesResponse",
    },
    "v2.CreateIncidentConfigRule": {
        "body": {
            "type": "IncidentRuleRequest",
            "format": "",
            },
        "operationResponseType": "IncidentRuleResponse",
    },
    "v2.GetIncidentConfigRule": {
        "ruleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "IncidentRuleResponse",
    },
    "v2.DeleteIncidentConfigRule": {
        "ruleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateIncidentConfigRule": {
        "ruleId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "IncidentRuleRequest",
            "format": "",
            },
        "operationResponseType": "IncidentRuleResponse",
    },
    "v2.ListIncidentTypes": {
        "includeDeleted": {
            "type": "boolean",
            "format": "",
            },
        "operationResponseType": "IncidentTypeListResponse",
    },
    "v2.CreateIncidentType": {
        "body": {
            "type": "IncidentTypeCreateRequest",
            "format": "",
            },
        "operationResponseType": "IncidentTypeResponse",
    },
    "v2.GetIncidentType": {
        "incidentTypeId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "IncidentTypeResponse",
    },
    "v2.DeleteIncidentType": {
        "incidentTypeId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateIncidentType": {
        "incidentTypeId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "IncidentTypePatchRequest",
            "format": "",
            },
        "operationResponseType": "IncidentTypeResponse",
    },
    "v2.SearchIncidents": {
        "include": {
            "type": "IncidentRelatedObject",
            "format": "",
            },
        "query": {
            "type": "string",
            "format": "",
            },
        "sort": {
            "type": "IncidentSearchSortOrder",
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
        "operationResponseType": "IncidentSearchResponse",
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
        "operationResponseType": "IncidentResponse",
    },
    "v2.DeleteIncident": {
        "incidentId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
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
        "operationResponseType": "IncidentResponse",
    },
    "v2.ListIncidentAttachments": {
        "incidentId": {
            "type": "string",
            "format": "",
            },
        "filterAttachmentType": {
            "type": "string",
            "format": "",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "AttachmentArray",
    },
    "v2.CreateIncidentAttachment": {
        "incidentId": {
            "type": "string",
            "format": "",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CreateAttachmentRequest",
            "format": "",
            },
        "operationResponseType": "Attachment",
    },
    "v2.CreateIncidentPostmortemAttachment": {
        "incidentId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "PostmortemAttachmentRequest",
            "format": "",
            },
        "operationResponseType": "Attachment",
    },
    "v2.DeleteIncidentAttachment": {
        "incidentId": {
            "type": "string",
            "format": "",
            },
        "attachmentId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateIncidentAttachment": {
        "incidentId": {
            "type": "string",
            "format": "",
            },
        "attachmentId": {
            "type": "string",
            "format": "",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "PatchAttachmentRequest",
            "format": "",
            },
        "operationResponseType": "Attachment",
    },
    "v2.ListIncidentImpacts": {
        "incidentId": {
            "type": "string",
            "format": "",
            },
        "include": {
            "type": "Array<IncidentImpactRelatedObject>",
            "format": "",
            },
        "operationResponseType": "IncidentImpactsResponse",
    },
    "v2.CreateIncidentImpact": {
        "incidentId": {
            "type": "string",
            "format": "",
            },
        "include": {
            "type": "Array<IncidentImpactRelatedObject>",
            "format": "",
            },
        "body": {
            "type": "IncidentImpactCreateRequest",
            "format": "",
            },
        "operationResponseType": "IncidentImpactResponse",
    },
    "v2.DeleteIncidentImpact": {
        "incidentId": {
            "type": "string",
            "format": "",
            },
        "impactId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.ListIncidentIntegrations": {
        "incidentId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "IncidentIntegrationMetadataListResponse",
    },
    "v2.CreateIncidentIntegration": {
        "incidentId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "IncidentIntegrationMetadataCreateRequest",
            "format": "",
            },
        "operationResponseType": "IncidentIntegrationMetadataResponse",
    },
    "v2.GetIncidentIntegration": {
        "incidentId": {
            "type": "string",
            "format": "",
            },
        "integrationMetadataId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "IncidentIntegrationMetadataResponse",
    },
    "v2.DeleteIncidentIntegration": {
        "incidentId": {
            "type": "string",
            "format": "",
            },
        "integrationMetadataId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateIncidentIntegration": {
        "incidentId": {
            "type": "string",
            "format": "",
            },
        "integrationMetadataId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "IncidentIntegrationMetadataPatchRequest",
            "format": "",
            },
        "operationResponseType": "IncidentIntegrationMetadataResponse",
    },
    "v2.ListIncidentTodos": {
        "incidentId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "IncidentTodoListResponse",
    },
    "v2.CreateIncidentTodo": {
        "incidentId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "IncidentTodoCreateRequest",
            "format": "",
            },
        "operationResponseType": "IncidentTodoResponse",
    },
    "v2.GetIncidentTodo": {
        "incidentId": {
            "type": "string",
            "format": "",
            },
        "todoId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "IncidentTodoResponse",
    },
    "v2.DeleteIncidentTodo": {
        "incidentId": {
            "type": "string",
            "format": "",
            },
        "todoId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateIncidentTodo": {
        "incidentId": {
            "type": "string",
            "format": "",
            },
        "todoId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "IncidentTodoPatchRequest",
            "format": "",
            },
        "operationResponseType": "IncidentTodoResponse",
    },
    "v2.ListAWSAccounts": {
        "awsAccountId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "AWSAccountsResponse",
    },
    "v2.CreateAWSAccount": {
        "body": {
            "type": "AWSAccountCreateRequest",
            "format": "",
            },
        "operationResponseType": "AWSAccountResponse",
    },
    "v2.GetAWSAccount": {
        "awsAccountConfigId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "AWSAccountResponse",
    },
    "v2.DeleteAWSAccount": {
        "awsAccountConfigId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateAWSAccount": {
        "awsAccountConfigId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "AWSAccountUpdateRequest",
            "format": "",
            },
        "operationResponseType": "AWSAccountResponse",
    },
    "v2.ListAWSNamespaces": {
        "operationResponseType": "AWSNamespacesResponse",
    },
    "v2.ListAWSEventBridgeSources": {
        "operationResponseType": "AWSEventBridgeListResponse",
    },
    "v2.CreateAWSEventBridgeSource": {
        "body": {
            "type": "AWSEventBridgeCreateRequest",
            "format": "",
            },
        "operationResponseType": "AWSEventBridgeCreateResponse",
    },
    "v2.DeleteAWSEventBridgeSource": {
        "body": {
            "type": "AWSEventBridgeDeleteRequest",
            "format": "",
            },
        "operationResponseType": "AWSEventBridgeDeleteResponse",
    },
    "v2.CreateNewAWSExternalID": {
        "operationResponseType": "AWSNewExternalIDResponse",
    },
    "v2.GetAWSIntegrationIAMPermissions": {
        "operationResponseType": "AWSIntegrationIamPermissionsResponse",
    },
    "v2.GetAWSIntegrationIAMPermissionsResourceCollection": {
        "operationResponseType": "AWSIntegrationIamPermissionsResponse",
    },
    "v2.GetAWSIntegrationIAMPermissionsStandard": {
        "operationResponseType": "AWSIntegrationIamPermissionsResponse",
    },
    "v2.ListAWSLogsServices": {
        "operationResponseType": "AWSLogsServicesResponse",
    },
    "v2.ListGCPSTSAccounts": {
        "operationResponseType": "GCPSTSServiceAccountsResponse",
    },
    "v2.CreateGCPSTSAccount": {
        "body": {
            "type": "GCPSTSServiceAccountCreateRequest",
            "format": "",
            },
        "operationResponseType": "GCPSTSServiceAccountResponse",
    },
    "v2.DeleteGCPSTSAccount": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateGCPSTSAccount": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "GCPSTSServiceAccountUpdateRequest",
            "format": "",
            },
        "operationResponseType": "GCPSTSServiceAccountResponse",
    },
    "v2.GetGCPSTSDelegate": {
        "operationResponseType": "GCPSTSDelegateAccountResponse",
    },
    "v2.MakeGCPSTSDelegate": {
        "body": {
            "type": "any",
            "format": "",
            },
        "operationResponseType": "GCPSTSDelegateAccountResponse",
    },
    "v2.ListJiraAccounts": {
        "operationResponseType": "JiraAccountsResponse",
    },
    "v2.DeleteJiraAccount": {
        "accountId": {
            "type": "string",
            "format": "uuid",
            },
        "operationResponseType": "{}",
    },
    "v2.ListJiraIssueTemplates": {
        "operationResponseType": "JiraIssueTemplatesResponse",
    },
    "v2.CreateJiraIssueTemplate": {
        "body": {
            "type": "JiraIssueTemplateCreateRequest",
            "format": "",
            },
        "operationResponseType": "JiraIssueTemplateResponse",
    },
    "v2.GetJiraIssueTemplate": {
        "issueTemplateId": {
            "type": "string",
            "format": "uuid",
            },
        "operationResponseType": "JiraIssueTemplateResponse",
    },
    "v2.DeleteJiraIssueTemplate": {
        "issueTemplateId": {
            "type": "string",
            "format": "uuid",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateJiraIssueTemplate": {
        "issueTemplateId": {
            "type": "string",
            "format": "uuid",
            },
        "body": {
            "type": "JiraIssueTemplateUpdateRequest",
            "format": "",
            },
        "operationResponseType": "JiraIssueTemplateResponse",
    },
    "v2.GetChannelByName": {
        "tenantName": {
            "type": "string",
            "format": "",
            },
        "teamName": {
            "type": "string",
            "format": "",
            },
        "channelName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "MicrosoftTeamsGetChannelByNameResponse",
    },
    "v2.ListTenantBasedHandles": {
        "tenantId": {
            "type": "string",
            "format": "",
            },
        "name": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "MicrosoftTeamsTenantBasedHandlesResponse",
    },
    "v2.CreateTenantBasedHandle": {
        "body": {
            "type": "MicrosoftTeamsCreateTenantBasedHandleRequest",
            "format": "",
            },
        "operationResponseType": "MicrosoftTeamsTenantBasedHandleResponse",
    },
    "v2.GetTenantBasedHandle": {
        "handleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "MicrosoftTeamsTenantBasedHandleResponse",
    },
    "v2.DeleteTenantBasedHandle": {
        "handleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateTenantBasedHandle": {
        "handleId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "MicrosoftTeamsUpdateTenantBasedHandleRequest",
            "format": "",
            },
        "operationResponseType": "MicrosoftTeamsTenantBasedHandleResponse",
    },
    "v2.ListWorkflowsWebhookHandles": {
        "name": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "MicrosoftTeamsWorkflowsWebhookHandlesResponse",
    },
    "v2.CreateWorkflowsWebhookHandle": {
        "body": {
            "type": "MicrosoftTeamsCreateWorkflowsWebhookHandleRequest",
            "format": "",
            },
        "operationResponseType": "MicrosoftTeamsWorkflowsWebhookHandleResponse",
    },
    "v2.GetWorkflowsWebhookHandle": {
        "handleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "MicrosoftTeamsWorkflowsWebhookHandleResponse",
    },
    "v2.DeleteWorkflowsWebhookHandle": {
        "handleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateWorkflowsWebhookHandle": {
        "handleId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest",
            "format": "",
            },
        "operationResponseType": "MicrosoftTeamsWorkflowsWebhookHandleResponse",
    },
    "v2.ListTenancyProducts": {
        "productKeys": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "TenancyProductsList",
    },
    "v2.GetTenancyConfigs": {
        "operationResponseType": "TenancyConfigList",
    },
    "v2.CreateTenancyConfig": {
        "body": {
            "type": "CreateTenancyConfigRequest",
            "format": "",
            },
        "operationResponseType": "TenancyConfig",
    },
    "v2.GetTenancyConfig": {
        "tenancyOcid": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "TenancyConfig",
    },
    "v2.DeleteTenancyConfig": {
        "tenancyOcid": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateTenancyConfig": {
        "tenancyOcid": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "UpdateTenancyConfigRequest",
            "format": "",
            },
        "operationResponseType": "TenancyConfig",
    },
    "v2.ListOpsgenieServices": {
        "operationResponseType": "OpsgenieServicesResponse",
    },
    "v2.CreateOpsgenieService": {
        "body": {
            "type": "OpsgenieServiceCreateRequest",
            "format": "",
            },
        "operationResponseType": "OpsgenieServiceResponse",
    },
    "v2.GetOpsgenieService": {
        "integrationServiceId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "OpsgenieServiceResponse",
    },
    "v2.DeleteOpsgenieService": {
        "integrationServiceId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
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
        "operationResponseType": "OpsgenieServiceResponse",
    },
    "v2.ListServiceNowAssignmentGroups": {
        "instanceId": {
            "type": "string",
            "format": "uuid",
            },
        "operationResponseType": "ServiceNowAssignmentGroupsResponse",
    },
    "v2.ListServiceNowBusinessServices": {
        "instanceId": {
            "type": "string",
            "format": "uuid",
            },
        "operationResponseType": "ServiceNowBusinessServicesResponse",
    },
    "v2.ListServiceNowTemplates": {
        "operationResponseType": "ServiceNowTemplatesResponse",
    },
    "v2.CreateServiceNowTemplate": {
        "body": {
            "type": "ServiceNowTemplateCreateRequest",
            "format": "",
            },
        "operationResponseType": "ServiceNowTemplateResponse",
    },
    "v2.GetServiceNowTemplate": {
        "templateId": {
            "type": "string",
            "format": "uuid",
            },
        "operationResponseType": "ServiceNowTemplateResponse",
    },
    "v2.UpdateServiceNowTemplate": {
        "templateId": {
            "type": "string",
            "format": "uuid",
            },
        "body": {
            "type": "ServiceNowTemplateUpdateRequest",
            "format": "",
            },
        "operationResponseType": "ServiceNowTemplateResponse",
    },
    "v2.DeleteServiceNowTemplate": {
        "templateId": {
            "type": "string",
            "format": "uuid",
            },
        "operationResponseType": "{}",
    },
    "v2.ListServiceNowInstances": {
        "operationResponseType": "ServiceNowInstancesResponse",
    },
    "v2.ListServiceNowUsers": {
        "instanceId": {
            "type": "string",
            "format": "uuid",
            },
        "operationResponseType": "ServiceNowUsersResponse",
    },
    "v2.ListCloudflareAccounts": {
        "operationResponseType": "CloudflareAccountsResponse",
    },
    "v2.CreateCloudflareAccount": {
        "body": {
            "type": "CloudflareAccountCreateRequest",
            "format": "",
            },
        "operationResponseType": "CloudflareAccountResponse",
    },
    "v2.GetCloudflareAccount": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "CloudflareAccountResponse",
    },
    "v2.DeleteCloudflareAccount": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateCloudflareAccount": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CloudflareAccountUpdateRequest",
            "format": "",
            },
        "operationResponseType": "CloudflareAccountResponse",
    },
    "v2.ListConfluentAccount": {
        "operationResponseType": "ConfluentAccountsResponse",
    },
    "v2.CreateConfluentAccount": {
        "body": {
            "type": "ConfluentAccountCreateRequest",
            "format": "",
            },
        "operationResponseType": "ConfluentAccountResponse",
    },
    "v2.GetConfluentAccount": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ConfluentAccountResponse",
    },
    "v2.DeleteConfluentAccount": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateConfluentAccount": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "ConfluentAccountUpdateRequest",
            "format": "",
            },
        "operationResponseType": "ConfluentAccountResponse",
    },
    "v2.ListConfluentResource": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ConfluentResourcesResponse",
    },
    "v2.CreateConfluentResource": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "ConfluentResourceRequest",
            "format": "",
            },
        "operationResponseType": "ConfluentResourceResponse",
    },
    "v2.GetConfluentResource": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "resourceId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ConfluentResourceResponse",
    },
    "v2.DeleteConfluentResource": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "resourceId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateConfluentResource": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "resourceId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "ConfluentResourceRequest",
            "format": "",
            },
        "operationResponseType": "ConfluentResourceResponse",
    },
    "v2.ListFastlyAccounts": {
        "operationResponseType": "FastlyAccountsResponse",
    },
    "v2.CreateFastlyAccount": {
        "body": {
            "type": "FastlyAccountCreateRequest",
            "format": "",
            },
        "operationResponseType": "FastlyAccountResponse",
    },
    "v2.GetFastlyAccount": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "FastlyAccountResponse",
    },
    "v2.DeleteFastlyAccount": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateFastlyAccount": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "FastlyAccountUpdateRequest",
            "format": "",
            },
        "operationResponseType": "FastlyAccountResponse",
    },
    "v2.ListFastlyServices": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "FastlyServicesResponse",
    },
    "v2.CreateFastlyService": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "FastlyServiceRequest",
            "format": "",
            },
        "operationResponseType": "FastlyServiceResponse",
    },
    "v2.GetFastlyService": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "serviceId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "FastlyServiceResponse",
    },
    "v2.DeleteFastlyService": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "serviceId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateFastlyService": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "serviceId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "FastlyServiceRequest",
            "format": "",
            },
        "operationResponseType": "FastlyServiceResponse",
    },
    "v2.ListOktaAccounts": {
        "operationResponseType": "OktaAccountsResponse",
    },
    "v2.CreateOktaAccount": {
        "body": {
            "type": "OktaAccountRequest",
            "format": "",
            },
        "operationResponseType": "OktaAccountResponse",
    },
    "v2.GetOktaAccount": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "OktaAccountResponse",
    },
    "v2.DeleteOktaAccount": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateOktaAccount": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "OktaAccountUpdateRequest",
            "format": "",
            },
        "operationResponseType": "OktaAccountResponse",
    },
    "v2.GetIPAllowlist": {
        "operationResponseType": "IPAllowlistResponse",
    },
    "v2.UpdateIPAllowlist": {
        "body": {
            "type": "IPAllowlistUpdateRequest",
            "format": "",
            },
        "operationResponseType": "IPAllowlistResponse",
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
        "operationResponseType": "any",
    },
    "v2.AggregateLogs": {
        "body": {
            "type": "LogsAggregateRequest",
            "format": "",
            },
        "operationResponseType": "LogsAggregateResponse",
    },
    "v2.ListLogsGet": {
        "filterQuery": {
            "type": "string",
            "format": "",
            },
        "filterIndexes": {
            "type": "Array<string>",
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
        "filterStorageTier": {
            "type": "LogsStorageTier",
            "format": "",
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
        "operationResponseType": "LogsListResponse",
    },
    "v2.ListLogs": {
        "body": {
            "type": "LogsListRequest",
            "format": "",
            },
        "operationResponseType": "LogsListResponse",
    },
    "v2.GetLogsArchiveOrder": {
        "operationResponseType": "LogsArchiveOrder",
    },
    "v2.UpdateLogsArchiveOrder": {
        "body": {
            "type": "LogsArchiveOrder",
            "format": "",
            },
        "operationResponseType": "LogsArchiveOrder",
    },
    "v2.ListLogsArchives": {
        "operationResponseType": "LogsArchives",
    },
    "v2.CreateLogsArchive": {
        "body": {
            "type": "LogsArchiveCreateRequest",
            "format": "",
            },
        "operationResponseType": "LogsArchive",
    },
    "v2.GetLogsArchive": {
        "archiveId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "LogsArchive",
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
        "operationResponseType": "LogsArchive",
    },
    "v2.DeleteLogsArchive": {
        "archiveId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.ListArchiveReadRoles": {
        "archiveId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "RolesResponse",
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
        "operationResponseType": "{}",
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
        "operationResponseType": "{}",
    },
    "v2.ListLogsCustomDestinations": {
        "operationResponseType": "CustomDestinationsResponse",
    },
    "v2.CreateLogsCustomDestination": {
        "body": {
            "type": "CustomDestinationCreateRequest",
            "format": "",
            },
        "operationResponseType": "CustomDestinationResponse",
    },
    "v2.GetLogsCustomDestination": {
        "customDestinationId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "CustomDestinationResponse",
    },
    "v2.DeleteLogsCustomDestination": {
        "customDestinationId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateLogsCustomDestination": {
        "customDestinationId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CustomDestinationUpdateRequest",
            "format": "",
            },
        "operationResponseType": "CustomDestinationResponse",
    },
    "v2.ListLogsMetrics": {
        "operationResponseType": "LogsMetricsResponse",
    },
    "v2.CreateLogsMetric": {
        "body": {
            "type": "LogsMetricCreateRequest",
            "format": "",
            },
        "operationResponseType": "LogsMetricResponse",
    },
    "v2.GetLogsMetric": {
        "metricId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "LogsMetricResponse",
    },
    "v2.DeleteLogsMetric": {
        "metricId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
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
        "operationResponseType": "LogsMetricResponse",
    },
    "v2.ListRestrictionQueries": {
        "pageSize": {
            "type": "number",
            "format": "int64",
            },
        "pageNumber": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "RestrictionQueryListResponse",
    },
    "v2.CreateRestrictionQuery": {
        "body": {
            "type": "RestrictionQueryCreatePayload",
            "format": "",
            },
        "operationResponseType": "RestrictionQueryWithoutRelationshipsResponse",
    },
    "v2.GetRoleRestrictionQuery": {
        "roleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "RestrictionQueryListResponse",
    },
    "v2.ListUserRestrictionQueries": {
        "userId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "RestrictionQueryListResponse",
    },
    "v2.GetRestrictionQuery": {
        "restrictionQueryId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "RestrictionQueryWithRelationshipsResponse",
    },
    "v2.ReplaceRestrictionQuery": {
        "restrictionQueryId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "RestrictionQueryUpdatePayload",
            "format": "",
            },
        "operationResponseType": "RestrictionQueryWithoutRelationshipsResponse",
    },
    "v2.DeleteRestrictionQuery": {
        "restrictionQueryId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateRestrictionQuery": {
        "restrictionQueryId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "RestrictionQueryUpdatePayload",
            "format": "",
            },
        "operationResponseType": "RestrictionQueryWithoutRelationshipsResponse",
    },
    "v2.ListRestrictionQueryRoles": {
        "restrictionQueryId": {
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
        "operationResponseType": "RestrictionQueryRolesResponse",
    },
    "v2.AddRoleToRestrictionQuery": {
        "restrictionQueryId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "RelationshipToRole",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.RemoveRoleFromRestrictionQuery": {
        "restrictionQueryId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "RelationshipToRole",
            "format": "",
            },
        "operationResponseType": "{}",
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
            "type": "MetricTagConfigurationMetricTypeCategory",
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
        "filterRelatedAssets": {
            "type": "boolean",
            "format": "",
            },
        "windowSeconds": {
            "type": "number",
            "format": "int64",
            },
        "pageSize": {
            "type": "number",
            "format": "int32",
            },
        "pageCursor": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "MetricsAndMetricTagConfigurationsResponse",
    },
    "v2.CreateBulkTagsMetricsConfiguration": {
        "body": {
            "type": "MetricBulkTagConfigCreateRequest",
            "format": "",
            },
        "operationResponseType": "MetricBulkTagConfigResponse",
    },
    "v2.DeleteBulkTagsMetricsConfiguration": {
        "body": {
            "type": "MetricBulkTagConfigDeleteRequest",
            "format": "",
            },
        "operationResponseType": "MetricBulkTagConfigResponse",
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
        "operationResponseType": "MetricSuggestedTagsAndAggregationsResponse",
    },
    "v2.ListTagsByMetricName": {
        "metricName": {
            "type": "string",
            "format": "",
            },
        "windowSeconds": {
            "type": "number",
            "format": "int64",
            },
        "filterTags": {
            "type": "string",
            "format": "",
            },
        "filterMatch": {
            "type": "string",
            "format": "",
            },
        "filterIncludeTagValues": {
            "type": "boolean",
            "format": "",
            },
        "filterAllowPartial": {
            "type": "boolean",
            "format": "",
            },
        "pageLimit": {
            "type": "number",
            "format": "int32",
            },
        "operationResponseType": "MetricAllTagsResponse",
    },
    "v2.ListMetricAssets": {
        "metricName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "MetricAssetsResponse",
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
            "format": "int32",
            },
        "filterNumAggregations": {
            "type": "number",
            "format": "int32",
            },
        "filterPct": {
            "type": "boolean",
            "format": "",
            },
        "filterTimespanH": {
            "type": "number",
            "format": "int32",
            },
        "operationResponseType": "MetricEstimateResponse",
    },
    "v2.GetMetricTagCardinalityDetails": {
        "metricName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "MetricTagCardinalitiesResponse",
    },
    "v2.ListTagConfigurationByName": {
        "metricName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "MetricTagConfigurationResponse",
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
        "operationResponseType": "MetricTagConfigurationResponse",
    },
    "v2.DeleteTagConfiguration": {
        "metricName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
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
        "operationResponseType": "MetricTagConfigurationResponse",
    },
    "v2.ListVolumesByMetricName": {
        "metricName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "MetricVolumesResponse",
    },
    "v2.QueryScalarData": {
        "body": {
            "type": "ScalarFormulaQueryRequest",
            "format": "",
            },
        "operationResponseType": "ScalarFormulaQueryResponse",
    },
    "v2.QueryTimeseriesData": {
        "body": {
            "type": "TimeseriesFormulaQueryRequest",
            "format": "",
            },
        "operationResponseType": "TimeseriesFormulaQueryResponse",
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
        "operationResponseType": "IntakePayloadAccepted",
    },
    "v2.GetMonitorNotificationRules": {
        "page": {
            "type": "number",
            "format": "int32",
            },
        "perPage": {
            "type": "number",
            "format": "int32",
            },
        "sort": {
            "type": "string",
            "format": "",
            },
        "filters": {
            "type": "string",
            "format": "",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "MonitorNotificationRuleListResponse",
    },
    "v2.CreateMonitorNotificationRule": {
        "body": {
            "type": "MonitorNotificationRuleCreateRequest",
            "format": "",
            },
        "operationResponseType": "MonitorNotificationRuleResponse",
    },
    "v2.GetMonitorNotificationRule": {
        "ruleId": {
            "type": "string",
            "format": "",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "MonitorNotificationRuleResponse",
    },
    "v2.DeleteMonitorNotificationRule": {
        "ruleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateMonitorNotificationRule": {
        "ruleId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "MonitorNotificationRuleUpdateRequest",
            "format": "",
            },
        "operationResponseType": "MonitorNotificationRuleResponse",
    },
    "v2.ListMonitorConfigPolicies": {
        "operationResponseType": "MonitorConfigPolicyListResponse",
    },
    "v2.CreateMonitorConfigPolicy": {
        "body": {
            "type": "MonitorConfigPolicyCreateRequest",
            "format": "",
            },
        "operationResponseType": "MonitorConfigPolicyResponse",
    },
    "v2.GetMonitorConfigPolicy": {
        "policyId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "MonitorConfigPolicyResponse",
    },
    "v2.DeleteMonitorConfigPolicy": {
        "policyId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateMonitorConfigPolicy": {
        "policyId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "MonitorConfigPolicyEditRequest",
            "format": "",
            },
        "operationResponseType": "MonitorConfigPolicyResponse",
    },
    "v2.ListMonitorUserTemplates": {
        "operationResponseType": "MonitorUserTemplateListResponse",
    },
    "v2.CreateMonitorUserTemplate": {
        "body": {
            "type": "MonitorUserTemplateCreateRequest",
            "format": "",
            },
        "operationResponseType": "MonitorUserTemplateCreateResponse",
    },
    "v2.ValidateMonitorUserTemplate": {
        "body": {
            "type": "MonitorUserTemplateCreateRequest",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.GetMonitorUserTemplate": {
        "templateId": {
            "type": "string",
            "format": "",
            },
        "withAllVersions": {
            "type": "boolean",
            "format": "",
            },
        "operationResponseType": "MonitorUserTemplateResponse",
    },
    "v2.UpdateMonitorUserTemplate": {
        "templateId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "MonitorUserTemplateUpdateRequest",
            "format": "",
            },
        "operationResponseType": "MonitorUserTemplateResponse",
    },
    "v2.DeleteMonitorUserTemplate": {
        "templateId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.ValidateExistingMonitorUserTemplate": {
        "templateId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "MonitorUserTemplateUpdateRequest",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.ListDevices": {
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
        "filterTag": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ListDevicesResponse",
    },
    "v2.GetDevice": {
        "deviceId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "GetDeviceResponse",
    },
    "v2.GetInterfaces": {
        "deviceId": {
            "type": "string",
            "format": "",
            },
        "getIpAddresses": {
            "type": "boolean",
            "format": "",
            },
        "operationResponseType": "GetInterfacesResponse",
    },
    "v2.ListDeviceUserTags": {
        "deviceId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ListTagsResponse",
    },
    "v2.UpdateDeviceUserTags": {
        "deviceId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "ListTagsResponse",
            "format": "",
            },
        "operationResponseType": "ListTagsResponse",
    },
    "v2.GetAggregatedConnections": {
        "from": {
            "type": "number",
            "format": "int64",
            },
        "to": {
            "type": "number",
            "format": "int64",
            },
        "groupBy": {
            "type": "string",
            "format": "",
            },
        "tags": {
            "type": "string",
            "format": "",
            },
        "limit": {
            "type": "number",
            "format": "int32",
            },
        "operationResponseType": "SingleAggregatedConnectionResponseArray",
    },
    "v2.GetAggregatedDns": {
        "from": {
            "type": "number",
            "format": "int64",
            },
        "to": {
            "type": "number",
            "format": "int64",
            },
        "groupBy": {
            "type": "string",
            "format": "",
            },
        "tags": {
            "type": "string",
            "format": "",
            },
        "limit": {
            "type": "number",
            "format": "int32",
            },
        "operationResponseType": "SingleAggregatedDnsResponseArray",
    },
    "v2.ListPipelines": {
        "pageSize": {
            "type": "number",
            "format": "int64",
            },
        "pageNumber": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "ListPipelinesResponse",
    },
    "v2.CreatePipeline": {
        "body": {
            "type": "ObservabilityPipelineSpec",
            "format": "",
            },
        "operationResponseType": "ObservabilityPipeline",
    },
    "v2.ValidatePipeline": {
        "body": {
            "type": "ObservabilityPipelineSpec",
            "format": "",
            },
        "operationResponseType": "ValidationResponse",
    },
    "v2.GetPipeline": {
        "pipelineId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ObservabilityPipeline",
    },
    "v2.UpdatePipeline": {
        "pipelineId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "ObservabilityPipeline",
            "format": "",
            },
        "operationResponseType": "ObservabilityPipeline",
    },
    "v2.DeletePipeline": {
        "pipelineId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.CreateOnCallEscalationPolicy": {
        "include": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "EscalationPolicyCreateRequest",
            "format": "",
            },
        "operationResponseType": "EscalationPolicy",
    },
    "v2.GetOnCallEscalationPolicy": {
        "policyId": {
            "type": "string",
            "format": "",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "EscalationPolicy",
    },
    "v2.UpdateOnCallEscalationPolicy": {
        "policyId": {
            "type": "string",
            "format": "",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "EscalationPolicyUpdateRequest",
            "format": "",
            },
        "operationResponseType": "EscalationPolicy",
    },
    "v2.DeleteOnCallEscalationPolicy": {
        "policyId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.CreateOnCallSchedule": {
        "include": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "ScheduleCreateRequest",
            "format": "",
            },
        "operationResponseType": "Schedule",
    },
    "v2.GetOnCallSchedule": {
        "include": {
            "type": "string",
            "format": "",
            },
        "scheduleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "Schedule",
    },
    "v2.UpdateOnCallSchedule": {
        "include": {
            "type": "string",
            "format": "",
            },
        "scheduleId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "ScheduleUpdateRequest",
            "format": "",
            },
        "operationResponseType": "Schedule",
    },
    "v2.DeleteOnCallSchedule": {
        "scheduleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.GetScheduleOnCallUser": {
        "include": {
            "type": "string",
            "format": "",
            },
        "scheduleId": {
            "type": "string",
            "format": "",
            },
        "filterAtTs": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "Shift",
    },
    "v2.GetTeamOnCallUsers": {
        "include": {
            "type": "string",
            "format": "",
            },
        "teamId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "TeamOnCallResponders",
    },
    "v2.GetOnCallTeamRoutingRules": {
        "teamId": {
            "type": "string",
            "format": "",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "TeamRoutingRules",
    },
    "v2.SetOnCallTeamRoutingRules": {
        "teamId": {
            "type": "string",
            "format": "",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "TeamRoutingRulesRequest",
            "format": "",
            },
        "operationResponseType": "TeamRoutingRules",
    },
    "v2.ListUserNotificationChannels": {
        "userId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ListNotificationChannelsResponse",
    },
    "v2.CreateUserNotificationChannel": {
        "userId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CreateUserNotificationChannelRequest",
            "format": "",
            },
        "operationResponseType": "NotificationChannel",
    },
    "v2.GetUserNotificationChannel": {
        "userId": {
            "type": "string",
            "format": "",
            },
        "channelId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "NotificationChannel",
    },
    "v2.DeleteUserNotificationChannel": {
        "userId": {
            "type": "string",
            "format": "",
            },
        "channelId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.ListUserNotificationRules": {
        "include": {
            "type": "string",
            "format": "",
            },
        "userId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ListOnCallNotificationRulesResponse",
    },
    "v2.CreateUserNotificationRule": {
        "userId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CreateOnCallNotificationRuleRequest",
            "format": "",
            },
        "operationResponseType": "OnCallNotificationRule",
    },
    "v2.GetUserNotificationRule": {
        "userId": {
            "type": "string",
            "format": "",
            },
        "ruleId": {
            "type": "string",
            "format": "",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "OnCallNotificationRule",
    },
    "v2.UpdateUserNotificationRule": {
        "userId": {
            "type": "string",
            "format": "",
            },
        "ruleId": {
            "type": "string",
            "format": "",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "UpdateOnCallNotificationRuleRequest",
            "format": "",
            },
        "operationResponseType": "OnCallNotificationRule",
    },
    "v2.DeleteUserNotificationRule": {
        "userId": {
            "type": "string",
            "format": "",
            },
        "ruleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.CreateOnCallPage": {
        "body": {
            "type": "CreatePageRequest",
            "format": "",
            },
        "operationResponseType": "CreatePageResponse",
    },
    "v2.AcknowledgeOnCallPage": {
        "pageId": {
            "type": "string",
            "format": "uuid",
            },
        "operationResponseType": "{}",
    },
    "v2.EscalateOnCallPage": {
        "pageId": {
            "type": "string",
            "format": "uuid",
            },
        "operationResponseType": "{}",
    },
    "v2.ResolveOnCallPage": {
        "pageId": {
            "type": "string",
            "format": "uuid",
            },
        "operationResponseType": "{}",
    },
    "v2.ListOrgConfigs": {
        "operationResponseType": "OrgConfigListResponse",
    },
    "v2.GetOrgConfig": {
        "orgConfigName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "OrgConfigGetResponse",
    },
    "v2.UpdateOrgConfig": {
        "orgConfigName": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "OrgConfigWriteRequest",
            "format": "",
            },
        "operationResponseType": "OrgConfigGetResponse",
    },
    "v2.UploadIdPMetadata": {
        "idpFile": {
            "type": "HttpFile",
            "format": "binary",
            },
        "operationResponseType": "{}",
    },
    "v2.ListOrgConnections": {
        "sinkOrgId": {
            "type": "string",
            "format": "",
            },
        "sourceOrgId": {
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
        "operationResponseType": "OrgConnectionListResponse",
    },
    "v2.CreateOrgConnections": {
        "body": {
            "type": "OrgConnectionCreateRequest",
            "format": "",
            },
        "operationResponseType": "OrgConnectionResponse",
    },
    "v2.DeleteOrgConnections": {
        "connectionId": {
            "type": "string",
            "format": "uuid",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateOrgConnections": {
        "connectionId": {
            "type": "string",
            "format": "uuid",
            },
        "body": {
            "type": "OrgConnectionUpdateRequest",
            "format": "",
            },
        "operationResponseType": "OrgConnectionResponse",
    },
    "v2.ListPermissions": {
        "operationResponseType": "PermissionsResponse",
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
        "filterId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "RolesResponse",
    },
    "v2.CreateRole": {
        "body": {
            "type": "RoleCreateRequest",
            "format": "",
            },
        "operationResponseType": "RoleCreateResponse",
    },
    "v2.ListRoleTemplates": {
        "operationResponseType": "RoleTemplateArray",
    },
    "v2.GetRole": {
        "roleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "RoleResponse",
    },
    "v2.DeleteRole": {
        "roleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
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
        "operationResponseType": "RoleUpdateResponse",
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
        "operationResponseType": "RoleResponse",
    },
    "v2.ListRolePermissions": {
        "roleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "PermissionsResponse",
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
        "operationResponseType": "PermissionsResponse",
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
        "operationResponseType": "PermissionsResponse",
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
        "operationResponseType": "UsersResponse",
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
        "operationResponseType": "UsersResponse",
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
        "operationResponseType": "UsersResponse",
    },
    "v2.ListPowerpacks": {
        "pageLimit": {
            "type": "number",
            "format": "int64",
            },
        "pageOffset": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "ListPowerpacksResponse",
    },
    "v2.CreatePowerpack": {
        "body": {
            "type": "Powerpack",
            "format": "",
            },
        "operationResponseType": "PowerpackResponse",
    },
    "v2.GetPowerpack": {
        "powerpackId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "PowerpackResponse",
    },
    "v2.DeletePowerpack": {
        "powerpackId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdatePowerpack": {
        "powerpackId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "Powerpack",
            "format": "",
            },
        "operationResponseType": "PowerpackResponse",
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
        "operationResponseType": "ProcessSummariesResponse",
    },
    "v2.SubmitProductAnalyticsEvent": {
        "body": {
            "type": "ProductAnalyticsServerSideEventItem",
            "format": "",
            },
        "operationResponseType": "any",
    },
    "v2.GetAccountFacetInfo": {
        "body": {
            "type": "FacetInfoRequest",
            "format": "",
            },
        "operationResponseType": "FacetInfoResponse",
    },
    "v2.QueryAccounts": {
        "body": {
            "type": "QueryAccountRequest",
            "format": "",
            },
        "operationResponseType": "QueryResponse",
    },
    "v2.QueryEventFilteredUsers": {
        "body": {
            "type": "QueryEventFilteredUsersRequest",
            "format": "",
            },
        "operationResponseType": "QueryResponse",
    },
    "v2.GetUserFacetInfo": {
        "body": {
            "type": "FacetInfoRequest",
            "format": "",
            },
        "operationResponseType": "FacetInfoResponse",
    },
    "v2.QueryUsers": {
        "body": {
            "type": "QueryUsersRequest",
            "format": "",
            },
        "operationResponseType": "QueryResponse",
    },
    "v2.GetMapping": {
        "entity": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "GetMappingResponse",
    },
    "v2.UpdateConnection": {
        "entity": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "UpdateConnectionRequest",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.CreateConnection": {
        "entity": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CreateConnectionRequest",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.DeleteConnection": {
        "id": {
            "type": "string",
            "format": "",
            },
        "entity": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.ListConnections": {
        "entity": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ListConnectionsResponse",
    },
    "v2.ListTables": {
        "pageLimit": {
            "type": "number",
            "format": "int64",
            },
        "pageOffset": {
            "type": "number",
            "format": "int64",
            },
        "sort": {
            "type": "ReferenceTableSortType",
            "format": "",
            },
        "filterStatus": {
            "type": "string",
            "format": "",
            },
        "filterTableNameExact": {
            "type": "string",
            "format": "",
            },
        "filterTableNameContains": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "TableResultV2Array",
    },
    "v2.CreateReferenceTable": {
        "body": {
            "type": "CreateTableRequest",
            "format": "",
            },
        "operationResponseType": "TableResultV2",
    },
    "v2.GetTable": {
        "id": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "TableResultV2",
    },
    "v2.DeleteTable": {
        "id": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateReferenceTable": {
        "id": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "PatchTableRequest",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.GetRowsByID": {
        "id": {
            "type": "string",
            "format": "",
            },
        "rowId": {
            "type": "Array<string>",
            "format": "",
            },
        "operationResponseType": "TableRowResourceArray",
    },
    "v2.UpsertRows": {
        "id": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "BatchUpsertRowsRequestArray",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.DeleteRows": {
        "id": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "BatchDeleteRowsRequestArray",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.CreateReferenceTableUpload": {
        "body": {
            "type": "CreateUploadRequest",
            "format": "",
            },
        "operationResponseType": "CreateUploadResponse",
    },
    "v2.ListApplicationSecurityWAFCustomRules": {
        "operationResponseType": "ApplicationSecurityWafCustomRuleListResponse",
    },
    "v2.CreateApplicationSecurityWafCustomRule": {
        "body": {
            "type": "ApplicationSecurityWafCustomRuleCreateRequest",
            "format": "",
            },
        "operationResponseType": "ApplicationSecurityWafCustomRuleResponse",
    },
    "v2.GetApplicationSecurityWafCustomRule": {
        "customRuleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ApplicationSecurityWafCustomRuleResponse",
    },
    "v2.UpdateApplicationSecurityWafCustomRule": {
        "customRuleId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "ApplicationSecurityWafCustomRuleUpdateRequest",
            "format": "",
            },
        "operationResponseType": "ApplicationSecurityWafCustomRuleResponse",
    },
    "v2.DeleteApplicationSecurityWafCustomRule": {
        "customRuleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.ListApplicationSecurityWafExclusionFilters": {
        "operationResponseType": "ApplicationSecurityWafExclusionFiltersResponse",
    },
    "v2.CreateApplicationSecurityWafExclusionFilter": {
        "body": {
            "type": "ApplicationSecurityWafExclusionFilterCreateRequest",
            "format": "",
            },
        "operationResponseType": "ApplicationSecurityWafExclusionFilterResponse",
    },
    "v2.GetApplicationSecurityWafExclusionFilter": {
        "exclusionFilterId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ApplicationSecurityWafExclusionFilterResponse",
    },
    "v2.UpdateApplicationSecurityWafExclusionFilter": {
        "exclusionFilterId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "ApplicationSecurityWafExclusionFilterUpdateRequest",
            "format": "",
            },
        "operationResponseType": "ApplicationSecurityWafExclusionFilterResponse",
    },
    "v2.DeleteApplicationSecurityWafExclusionFilter": {
        "exclusionFilterId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.ListCSMThreatsAgentRules": {
        "policyId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "CloudWorkloadSecurityAgentRulesListResponse",
    },
    "v2.CreateCSMThreatsAgentRule": {
        "body": {
            "type": "CloudWorkloadSecurityAgentRuleCreateRequest",
            "format": "",
            },
        "operationResponseType": "CloudWorkloadSecurityAgentRuleResponse",
    },
    "v2.GetCSMThreatsAgentRule": {
        "agentRuleId": {
            "type": "string",
            "format": "",
            },
        "policyId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "CloudWorkloadSecurityAgentRuleResponse",
    },
    "v2.DeleteCSMThreatsAgentRule": {
        "agentRuleId": {
            "type": "string",
            "format": "",
            },
        "policyId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateCSMThreatsAgentRule": {
        "agentRuleId": {
            "type": "string",
            "format": "",
            },
        "policyId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CloudWorkloadSecurityAgentRuleUpdateRequest",
            "format": "",
            },
        "operationResponseType": "CloudWorkloadSecurityAgentRuleResponse",
    },
    "v2.ListCSMThreatsAgentPolicies": {
        "operationResponseType": "CloudWorkloadSecurityAgentPoliciesListResponse",
    },
    "v2.CreateCSMThreatsAgentPolicy": {
        "body": {
            "type": "CloudWorkloadSecurityAgentPolicyCreateRequest",
            "format": "",
            },
        "operationResponseType": "CloudWorkloadSecurityAgentPolicyResponse",
    },
    "v2.DownloadCSMThreatsPolicy": {
        "operationResponseType": "HttpFile",
    },
    "v2.GetCSMThreatsAgentPolicy": {
        "policyId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "CloudWorkloadSecurityAgentPolicyResponse",
    },
    "v2.DeleteCSMThreatsAgentPolicy": {
        "policyId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateCSMThreatsAgentPolicy": {
        "policyId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CloudWorkloadSecurityAgentPolicyUpdateRequest",
            "format": "",
            },
        "operationResponseType": "CloudWorkloadSecurityAgentPolicyResponse",
    },
    "v2.DownloadCloudWorkloadPolicyFile": {
        "operationResponseType": "HttpFile",
    },
    "v2.ListCloudWorkloadSecurityAgentRules": {
        "operationResponseType": "CloudWorkloadSecurityAgentRulesListResponse",
    },
    "v2.CreateCloudWorkloadSecurityAgentRule": {
        "body": {
            "type": "CloudWorkloadSecurityAgentRuleCreateRequest",
            "format": "",
            },
        "operationResponseType": "CloudWorkloadSecurityAgentRuleResponse",
    },
    "v2.GetCloudWorkloadSecurityAgentRule": {
        "agentRuleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "CloudWorkloadSecurityAgentRuleResponse",
    },
    "v2.DeleteCloudWorkloadSecurityAgentRule": {
        "agentRuleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
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
        "operationResponseType": "CloudWorkloadSecurityAgentRuleResponse",
    },
    "v2.ListReplayHeatmapSnapshots": {
        "filterDeviceType": {
            "type": "string",
            "format": "",
            },
        "filterViewName": {
            "type": "string",
            "format": "",
            },
        "pageLimit": {
            "type": "number",
            "format": "",
            },
        "filterApplicationId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SnapshotArray",
    },
    "v2.CreateReplayHeatmapSnapshot": {
        "body": {
            "type": "SnapshotCreateRequest",
            "format": "",
            },
        "operationResponseType": "Snapshot",
    },
    "v2.DeleteReplayHeatmapSnapshot": {
        "snapshotId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateReplayHeatmapSnapshot": {
        "snapshotId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "SnapshotUpdateRequest",
            "format": "",
            },
        "operationResponseType": "Snapshot",
    },
    "v2.GetRestrictionPolicy": {
        "resourceId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "RestrictionPolicyResponse",
    },
    "v2.UpdateRestrictionPolicy": {
        "resourceId": {
            "type": "string",
            "format": "",
            },
        "allowSelfLockout": {
            "type": "boolean",
            "format": "",
            },
        "body": {
            "type": "RestrictionPolicyUpdateRequest",
            "format": "",
            },
        "operationResponseType": "RestrictionPolicyResponse",
    },
    "v2.DeleteRestrictionPolicy": {
        "resourceId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.AggregateRUMEvents": {
        "body": {
            "type": "RUMAggregateRequest",
            "format": "",
            },
        "operationResponseType": "RUMAnalyticsAggregateResponse",
    },
    "v2.GetRUMApplications": {
        "operationResponseType": "RUMApplicationsResponse",
    },
    "v2.CreateRUMApplication": {
        "body": {
            "type": "RUMApplicationCreateRequest",
            "format": "",
            },
        "operationResponseType": "RUMApplicationResponse",
    },
    "v2.GetRUMApplication": {
        "id": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "RUMApplicationResponse",
    },
    "v2.DeleteRUMApplication": {
        "id": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
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
        "operationResponseType": "RUMApplicationResponse",
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
        "operationResponseType": "RUMEventsResponse",
    },
    "v2.SearchRUMEvents": {
        "body": {
            "type": "RUMSearchEventsRequest",
            "format": "",
            },
        "operationResponseType": "RUMEventsResponse",
    },
    "v2.OrderRetentionFilters": {
        "appId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "RumRetentionFiltersOrderRequest",
            "format": "",
            },
        "operationResponseType": "RumRetentionFiltersOrderResponse",
    },
    "v2.ListRetentionFilters": {
        "appId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "RumRetentionFiltersResponse",
    },
    "v2.CreateRetentionFilter": {
        "appId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "RumRetentionFilterCreateRequest",
            "format": "",
            },
        "operationResponseType": "RumRetentionFilterResponse",
    },
    "v2.GetRetentionFilter": {
        "appId": {
            "type": "string",
            "format": "",
            },
        "rfId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "RumRetentionFilterResponse",
    },
    "v2.DeleteRetentionFilter": {
        "appId": {
            "type": "string",
            "format": "",
            },
        "rfId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateRetentionFilter": {
        "appId": {
            "type": "string",
            "format": "",
            },
        "rfId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "RumRetentionFilterUpdateRequest",
            "format": "",
            },
        "operationResponseType": "RumRetentionFilterResponse",
    },
    "v2.ListRumMetrics": {
        "operationResponseType": "RumMetricsResponse",
    },
    "v2.CreateRumMetric": {
        "body": {
            "type": "RumMetricCreateRequest",
            "format": "",
            },
        "operationResponseType": "RumMetricResponse",
    },
    "v2.GetRumMetric": {
        "metricId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "RumMetricResponse",
    },
    "v2.DeleteRumMetric": {
        "metricId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateRumMetric": {
        "metricId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "RumMetricUpdateRequest",
            "format": "",
            },
        "operationResponseType": "RumMetricResponse",
    },
    "v2.ListRumReplayPlaylists": {
        "filterCreatedByUuid": {
            "type": "string",
            "format": "",
            },
        "filterQuery": {
            "type": "string",
            "format": "",
            },
        "pageNumber": {
            "type": "number",
            "format": "",
            },
        "pageSize": {
            "type": "number",
            "format": "",
            },
        "operationResponseType": "PlaylistArray",
    },
    "v2.CreateRumReplayPlaylist": {
        "body": {
            "type": "Playlist",
            "format": "",
            },
        "operationResponseType": "Playlist",
    },
    "v2.GetRumReplayPlaylist": {
        "playlistId": {
            "type": "number",
            "format": "",
            },
        "operationResponseType": "Playlist",
    },
    "v2.UpdateRumReplayPlaylist": {
        "playlistId": {
            "type": "number",
            "format": "",
            },
        "body": {
            "type": "Playlist",
            "format": "",
            },
        "operationResponseType": "Playlist",
    },
    "v2.DeleteRumReplayPlaylist": {
        "playlistId": {
            "type": "number",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.ListRumReplayPlaylistSessions": {
        "playlistId": {
            "type": "number",
            "format": "",
            },
        "pageNumber": {
            "type": "number",
            "format": "",
            },
        "pageSize": {
            "type": "number",
            "format": "",
            },
        "operationResponseType": "PlaylistsSessionArray",
    },
    "v2.BulkRemoveRumReplayPlaylistSessions": {
        "playlistId": {
            "type": "number",
            "format": "",
            },
        "body": {
            "type": "SessionIdArray",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.AddRumReplaySessionToPlaylist": {
        "dataSource": {
            "type": "string",
            "format": "",
            },
        "ts": {
            "type": "number",
            "format": "int64",
            },
        "playlistId": {
            "type": "number",
            "format": "",
            },
        "sessionId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "PlaylistsSession",
    },
    "v2.RemoveRumReplaySessionFromPlaylist": {
        "playlistId": {
            "type": "number",
            "format": "",
            },
        "sessionId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.GetSegments": {
        "viewId": {
            "type": "string",
            "format": "",
            },
        "source": {
            "type": "string",
            "format": "",
            },
        "sessionId": {
            "type": "string",
            "format": "",
            },
        "ts": {
            "type": "number",
            "format": "int64",
            },
        "maxListSize": {
            "type": "number",
            "format": "",
            },
        "paging": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.ListRumReplaySessionWatchers": {
        "pageSize": {
            "type": "number",
            "format": "",
            },
        "pageNumber": {
            "type": "number",
            "format": "",
            },
        "sessionId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "WatcherArray",
    },
    "v2.CreateRumReplaySessionWatch": {
        "sessionId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "Watch",
            "format": "",
            },
        "operationResponseType": "Watch",
    },
    "v2.DeleteRumReplaySessionWatch": {
        "sessionId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.ListRumReplayViewershipHistorySessions": {
        "filterWatchedAtStart": {
            "type": "number",
            "format": "int64",
            },
        "pageNumber": {
            "type": "number",
            "format": "",
            },
        "filterCreatedBy": {
            "type": "string",
            "format": "",
            },
        "filterWatchedAtEnd": {
            "type": "number",
            "format": "int64",
            },
        "filterSessionIds": {
            "type": "string",
            "format": "",
            },
        "pageSize": {
            "type": "number",
            "format": "",
            },
        "filterApplicationId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ViewershipHistorySessionArray",
    },
    "v2.ListScorecardOutcomes": {
        "pageSize": {
            "type": "number",
            "format": "int64",
            },
        "pageOffset": {
            "type": "number",
            "format": "int64",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "fieldsOutcome": {
            "type": "string",
            "format": "",
            },
        "fieldsRule": {
            "type": "string",
            "format": "",
            },
        "filterOutcomeServiceName": {
            "type": "string",
            "format": "",
            },
        "filterOutcomeState": {
            "type": "string",
            "format": "",
            },
        "filterRuleEnabled": {
            "type": "boolean",
            "format": "",
            },
        "filterRuleId": {
            "type": "string",
            "format": "",
            },
        "filterRuleName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "OutcomesResponse",
    },
    "v2.UpdateScorecardOutcomesAsync": {
        "body": {
            "type": "UpdateOutcomesAsyncRequest",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.CreateScorecardOutcomesBatch": {
        "body": {
            "type": "OutcomesBatchRequest",
            "format": "",
            },
        "operationResponseType": "OutcomesBatchResponse",
    },
    "v2.ListScorecardRules": {
        "pageSize": {
            "type": "number",
            "format": "int64",
            },
        "pageOffset": {
            "type": "number",
            "format": "int64",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "filterRuleId": {
            "type": "string",
            "format": "",
            },
        "filterRuleEnabled": {
            "type": "boolean",
            "format": "",
            },
        "filterRuleCustom": {
            "type": "boolean",
            "format": "",
            },
        "filterRuleName": {
            "type": "string",
            "format": "",
            },
        "filterRuleDescription": {
            "type": "string",
            "format": "",
            },
        "fieldsRule": {
            "type": "string",
            "format": "",
            },
        "fieldsScorecard": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ListRulesResponse",
    },
    "v2.CreateScorecardRule": {
        "body": {
            "type": "CreateRuleRequest",
            "format": "",
            },
        "operationResponseType": "CreateRuleResponse",
    },
    "v2.UpdateScorecardRule": {
        "ruleId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "UpdateRuleRequest",
            "format": "",
            },
        "operationResponseType": "UpdateRuleResponse",
    },
    "v2.DeleteScorecardRule": {
        "ruleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.ListEntityRiskScores": {
        "from": {
            "type": "number",
            "format": "int64",
            },
        "to": {
            "type": "number",
            "format": "int64",
            },
        "pageSize": {
            "type": "number",
            "format": "",
            },
        "pageNumber": {
            "type": "number",
            "format": "",
            },
        "pageQueryId": {
            "type": "string",
            "format": "",
            },
        "filterSort": {
            "type": "string",
            "format": "",
            },
        "filterQuery": {
            "type": "string",
            "format": "",
            },
        "entityType": {
            "type": "Array<string>",
            "format": "",
            },
        "operationResponseType": "SecurityEntityRiskScoresResponse",
    },
    "v2.ListScanningGroups": {
        "operationResponseType": "SensitiveDataScannerGetConfigResponse",
    },
    "v2.ReorderScanningGroups": {
        "body": {
            "type": "SensitiveDataScannerConfigRequest",
            "format": "",
            },
        "operationResponseType": "SensitiveDataScannerReorderGroupsResponse",
    },
    "v2.CreateScanningGroup": {
        "body": {
            "type": "SensitiveDataScannerGroupCreateRequest",
            "format": "",
            },
        "operationResponseType": "SensitiveDataScannerCreateGroupResponse",
    },
    "v2.DeleteScanningGroup": {
        "groupId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "SensitiveDataScannerGroupDeleteRequest",
            "format": "",
            },
        "operationResponseType": "SensitiveDataScannerGroupDeleteResponse",
    },
    "v2.UpdateScanningGroup": {
        "groupId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "SensitiveDataScannerGroupUpdateRequest",
            "format": "",
            },
        "operationResponseType": "SensitiveDataScannerGroupUpdateResponse",
    },
    "v2.CreateScanningRule": {
        "body": {
            "type": "SensitiveDataScannerRuleCreateRequest",
            "format": "",
            },
        "operationResponseType": "SensitiveDataScannerCreateRuleResponse",
    },
    "v2.DeleteScanningRule": {
        "ruleId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "SensitiveDataScannerRuleDeleteRequest",
            "format": "",
            },
        "operationResponseType": "SensitiveDataScannerRuleDeleteResponse",
    },
    "v2.UpdateScanningRule": {
        "ruleId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "SensitiveDataScannerRuleUpdateRequest",
            "format": "",
            },
        "operationResponseType": "SensitiveDataScannerRuleUpdateResponse",
    },
    "v2.ListStandardPatterns": {
        "operationResponseType": "SensitiveDataScannerStandardPatternsResponseData",
    },
    "v2.CreateServiceAccount": {
        "body": {
            "type": "ServiceAccountCreateRequest",
            "format": "",
            },
        "operationResponseType": "UserResponse",
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
        "operationResponseType": "ListApplicationKeysResponse",
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
        "operationResponseType": "ApplicationKeyResponse",
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
        "operationResponseType": "PartialApplicationKeyResponse",
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
        "operationResponseType": "{}",
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
        "operationResponseType": "PartialApplicationKeyResponse",
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
        "operationResponseType": "IncidentServicesResponse",
    },
    "v2.CreateIncidentService": {
        "body": {
            "type": "IncidentServiceCreateRequest",
            "format": "",
            },
        "operationResponseType": "IncidentServiceResponse",
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
        "operationResponseType": "IncidentServiceResponse",
    },
    "v2.DeleteIncidentService": {
        "serviceId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
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
        "operationResponseType": "IncidentServiceResponse",
    },
    "v2.ListServiceDefinitions": {
        "pageSize": {
            "type": "number",
            "format": "int64",
            },
        "pageNumber": {
            "type": "number",
            "format": "int64",
            },
        "schemaVersion": {
            "type": "ServiceDefinitionSchemaVersions",
            "format": "",
            },
        "operationResponseType": "ServiceDefinitionsListResponse",
    },
    "v2.CreateOrUpdateServiceDefinitions": {
        "body": {
            "type": "ServiceDefinitionsCreateRequest",
            "format": "",
            },
        "operationResponseType": "ServiceDefinitionCreateResponse",
    },
    "v2.GetServiceDefinition": {
        "serviceName": {
            "type": "string",
            "format": "",
            },
        "schemaVersion": {
            "type": "ServiceDefinitionSchemaVersions",
            "format": "",
            },
        "operationResponseType": "ServiceDefinitionGetResponse",
    },
    "v2.DeleteServiceDefinition": {
        "serviceName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.CreateSLOReportJob": {
        "body": {
            "type": "SloReportCreateRequest",
            "format": "",
            },
        "operationResponseType": "SLOReportPostResponse",
    },
    "v2.GetSLOReport": {
        "reportId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "string",
    },
    "v2.GetSLOReportJobStatus": {
        "reportId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SLOReportStatusGetResponse",
    },
    "v2.GetSloStatus": {
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
        "disableCorrections": {
            "type": "boolean",
            "format": "",
            },
        "operationResponseType": "SloStatusResponse",
    },
    "v2.GetSPARecommendations": {
        "bypassCache": {
            "type": "string",
            "format": "",
            },
        "service": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "RecommendationDocument",
    },
    "v2.GetSPARecommendationsWithShard": {
        "shard": {
            "type": "string",
            "format": "",
            },
        "service": {
            "type": "string",
            "format": "",
            },
        "bypassCache": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "RecommendationDocument",
    },
    "v2.AggregateSpans": {
        "body": {
            "type": "SpansAggregateRequest",
            "format": "",
            },
        "operationResponseType": "SpansAggregateResponse",
    },
    "v2.ListSpansGet": {
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
            "type": "SpansSort",
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
        "operationResponseType": "SpansListResponse",
    },
    "v2.ListSpans": {
        "body": {
            "type": "SpansListRequest",
            "format": "",
            },
        "operationResponseType": "SpansListResponse",
    },
    "v2.CreateSCAResult": {
        "body": {
            "type": "ScaRequest",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.CreateSCAResolveVulnerableSymbols": {
        "body": {
            "type": "ResolveVulnerableSymbolsRequest",
            "format": "",
            },
        "operationResponseType": "ResolveVulnerableSymbolsResponse",
    },
    "v2.GetCustomRuleset": {
        "rulesetName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "CustomRulesetResponse",
    },
    "v2.DeleteCustomRuleset": {
        "rulesetName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateCustomRuleset": {
        "rulesetName": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CustomRulesetRequest",
            "format": "",
            },
        "operationResponseType": "CustomRulesetResponse",
    },
    "v2.CreateCustomRule": {
        "rulesetName": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CustomRuleRequest",
            "format": "",
            },
        "operationResponseType": "CustomRuleResponse",
    },
    "v2.GetCustomRule": {
        "rulesetName": {
            "type": "string",
            "format": "",
            },
        "ruleName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "CustomRuleResponse",
    },
    "v2.DeleteCustomRule": {
        "rulesetName": {
            "type": "string",
            "format": "",
            },
        "ruleName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.ListCustomRuleRevisions": {
        "rulesetName": {
            "type": "string",
            "format": "",
            },
        "ruleName": {
            "type": "string",
            "format": "",
            },
        "pageOffset": {
            "type": "number",
            "format": "",
            },
        "pageLimit": {
            "type": "number",
            "format": "",
            },
        "operationResponseType": "CustomRuleRevisionsResponse",
    },
    "v2.CreateCustomRuleRevision": {
        "rulesetName": {
            "type": "string",
            "format": "",
            },
        "ruleName": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CustomRuleRevisionRequest",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.RevertCustomRuleRevision": {
        "rulesetName": {
            "type": "string",
            "format": "",
            },
        "ruleName": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "RevertCustomRuleRevisionRequest",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.GetCustomRuleRevision": {
        "rulesetName": {
            "type": "string",
            "format": "",
            },
        "ruleName": {
            "type": "string",
            "format": "",
            },
        "id": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "CustomRuleRevisionResponse",
    },
    "v2.ListStatusPages": {
        "pageOffset": {
            "type": "number",
            "format": "",
            },
        "pageLimit": {
            "type": "number",
            "format": "",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "StatusPageArray",
    },
    "v2.CreateStatusPage": {
        "include": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CreateStatusPageRequest",
            "format": "",
            },
        "operationResponseType": "StatusPage",
    },
    "v2.ListDegradations": {
        "filterPageId": {
            "type": "string",
            "format": "",
            },
        "pageOffset": {
            "type": "number",
            "format": "",
            },
        "pageLimit": {
            "type": "number",
            "format": "",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "filterStatus": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "DegradationArray",
    },
    "v2.GetStatusPage": {
        "pageId": {
            "type": "string",
            "format": "uuid",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "StatusPage",
    },
    "v2.DeleteStatusPage": {
        "pageId": {
            "type": "string",
            "format": "uuid",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateStatusPage": {
        "deleteSubscribers": {
            "type": "boolean",
            "format": "",
            },
        "pageId": {
            "type": "string",
            "format": "uuid",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "PatchStatusPageRequest",
            "format": "",
            },
        "operationResponseType": "StatusPage",
    },
    "v2.ListComponents": {
        "pageId": {
            "type": "string",
            "format": "uuid",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "StatusPagesComponentArray",
    },
    "v2.CreateComponent": {
        "pageId": {
            "type": "string",
            "format": "uuid",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CreateComponentRequest",
            "format": "",
            },
        "operationResponseType": "StatusPagesComponent",
    },
    "v2.GetComponent": {
        "pageId": {
            "type": "string",
            "format": "uuid",
            },
        "componentId": {
            "type": "string",
            "format": "uuid",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "StatusPagesComponent",
    },
    "v2.DeleteComponent": {
        "pageId": {
            "type": "string",
            "format": "uuid",
            },
        "componentId": {
            "type": "string",
            "format": "uuid",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateComponent": {
        "pageId": {
            "type": "string",
            "format": "uuid",
            },
        "componentId": {
            "type": "string",
            "format": "uuid",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "PatchComponentRequest",
            "format": "",
            },
        "operationResponseType": "StatusPagesComponent",
    },
    "v2.CreateDegradation": {
        "pageId": {
            "type": "string",
            "format": "uuid",
            },
        "notifySubscribers": {
            "type": "boolean",
            "format": "",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "CreateDegradationRequest",
            "format": "",
            },
        "operationResponseType": "Degradation",
    },
    "v2.GetDegradation": {
        "pageId": {
            "type": "string",
            "format": "uuid",
            },
        "degradationId": {
            "type": "string",
            "format": "uuid",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "Degradation",
    },
    "v2.DeleteDegradation": {
        "pageId": {
            "type": "string",
            "format": "uuid",
            },
        "degradationId": {
            "type": "string",
            "format": "uuid",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateDegradation": {
        "pageId": {
            "type": "string",
            "format": "uuid",
            },
        "notifySubscribers": {
            "type": "boolean",
            "format": "",
            },
        "degradationId": {
            "type": "string",
            "format": "uuid",
            },
        "include": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "PatchDegradationRequest",
            "format": "",
            },
        "operationResponseType": "Degradation",
    },
    "v2.GetOnDemandConcurrencyCap": {
        "operationResponseType": "OnDemandConcurrencyCapResponse",
    },
    "v2.SetOnDemandConcurrencyCap": {
        "body": {
            "type": "OnDemandConcurrencyCapAttributes",
            "format": "",
            },
        "operationResponseType": "OnDemandConcurrencyCapResponse",
    },
    "v2.CreateSyntheticsSuite": {
        "body": {
            "type": "SuiteCreateEditRequest",
            "format": "",
            },
        "operationResponseType": "SyntheticsSuiteResponse",
    },
    "v2.DeleteSyntheticsSuites": {
        "body": {
            "type": "DeletedSuitesRequestDeleteRequest",
            "format": "",
            },
        "operationResponseType": "DeletedSuitesResponse",
    },
    "v2.SearchSuites": {
        "query": {
            "type": "string",
            "format": "",
            },
        "sort": {
            "type": "string",
            "format": "",
            },
        "facetsOnly": {
            "type": "boolean",
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
        "operationResponseType": "SyntheticsSuiteSearchResponse",
    },
    "v2.GetSyntheticsSuite": {
        "publicId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SyntheticsSuiteResponse",
    },
    "v2.EditSyntheticsSuite": {
        "publicId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "SuiteCreateEditRequest",
            "format": "",
            },
        "operationResponseType": "SyntheticsSuiteResponse",
    },
    "v2.PatchGlobalVariable": {
        "variableId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "GlobalVariableJsonPatchRequest",
            "format": "",
            },
        "operationResponseType": "GlobalVariableResponse",
    },
    "v2.ListTeams": {
        "pageNumber": {
            "type": "number",
            "format": "int64",
            },
        "pageSize": {
            "type": "number",
            "format": "int64",
            },
        "sort": {
            "type": "ListTeamsSort",
            "format": "",
            },
        "include": {
            "type": "Array<ListTeamsInclude>",
            "format": "",
            },
        "filterKeyword": {
            "type": "string",
            "format": "",
            },
        "filterMe": {
            "type": "boolean",
            "format": "",
            },
        "fieldsTeam": {
            "type": "Array<TeamsField>",
            "format": "",
            },
        "operationResponseType": "TeamsResponse",
    },
    "v2.CreateTeam": {
        "body": {
            "type": "TeamCreateRequest",
            "format": "",
            },
        "operationResponseType": "TeamResponse",
    },
    "v2.ListTeamHierarchyLinks": {
        "pageNumber": {
            "type": "number",
            "format": "int64",
            },
        "pageSize": {
            "type": "number",
            "format": "int64",
            },
        "filterParentTeam": {
            "type": "string",
            "format": "",
            },
        "filterSubTeam": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "TeamHierarchyLinksResponse",
    },
    "v2.AddTeamHierarchyLink": {
        "body": {
            "type": "TeamHierarchyLinkCreateRequest",
            "format": "",
            },
        "operationResponseType": "TeamHierarchyLinkResponse",
    },
    "v2.GetTeamHierarchyLink": {
        "linkId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "TeamHierarchyLinkResponse",
    },
    "v2.RemoveTeamHierarchyLink": {
        "linkId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.ListTeamConnections": {
        "pageSize": {
            "type": "number",
            "format": "int64",
            },
        "pageNumber": {
            "type": "number",
            "format": "int64",
            },
        "filterSources": {
            "type": "Array<string>",
            "format": "",
            },
        "filterTeamIds": {
            "type": "Array<string>",
            "format": "",
            },
        "filterConnectedTeamIds": {
            "type": "Array<string>",
            "format": "",
            },
        "filterConnectionIds": {
            "type": "Array<string>",
            "format": "",
            },
        "operationResponseType": "TeamConnectionsResponse",
    },
    "v2.CreateTeamConnections": {
        "body": {
            "type": "TeamConnectionCreateRequest",
            "format": "",
            },
        "operationResponseType": "TeamConnectionsResponse",
    },
    "v2.DeleteTeamConnections": {
        "body": {
            "type": "TeamConnectionDeleteRequest",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.GetTeamSync": {
        "filterSource": {
            "type": "TeamSyncAttributesSource",
            "format": "",
            },
        "operationResponseType": "TeamSyncResponse",
    },
    "v2.SyncTeams": {
        "body": {
            "type": "TeamSyncRequest",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.ListMemberTeams": {
        "superTeamId": {
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
        "fieldsTeam": {
            "type": "Array<TeamsField>",
            "format": "",
            },
        "operationResponseType": "TeamsResponse",
    },
    "v2.AddMemberTeam": {
        "superTeamId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "AddMemberTeamRequest",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.RemoveMemberTeam": {
        "superTeamId": {
            "type": "string",
            "format": "",
            },
        "memberTeamId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.GetTeam": {
        "teamId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "TeamResponse",
    },
    "v2.DeleteTeam": {
        "teamId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateTeam": {
        "teamId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "TeamUpdateRequest",
            "format": "",
            },
        "operationResponseType": "TeamResponse",
    },
    "v2.GetTeamLinks": {
        "teamId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "TeamLinksResponse",
    },
    "v2.CreateTeamLink": {
        "teamId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "TeamLinkCreateRequest",
            "format": "",
            },
        "operationResponseType": "TeamLinkResponse",
    },
    "v2.GetTeamLink": {
        "teamId": {
            "type": "string",
            "format": "",
            },
        "linkId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "TeamLinkResponse",
    },
    "v2.DeleteTeamLink": {
        "teamId": {
            "type": "string",
            "format": "",
            },
        "linkId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateTeamLink": {
        "teamId": {
            "type": "string",
            "format": "",
            },
        "linkId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "TeamLinkCreateRequest",
            "format": "",
            },
        "operationResponseType": "TeamLinkResponse",
    },
    "v2.GetTeamMemberships": {
        "teamId": {
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
            "type": "GetTeamMembershipsSort",
            "format": "",
            },
        "filterKeyword": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "UserTeamsResponse",
    },
    "v2.CreateTeamMembership": {
        "teamId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "UserTeamRequest",
            "format": "",
            },
        "operationResponseType": "UserTeamResponse",
    },
    "v2.DeleteTeamMembership": {
        "teamId": {
            "type": "string",
            "format": "",
            },
        "userId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateTeamMembership": {
        "teamId": {
            "type": "string",
            "format": "",
            },
        "userId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "UserTeamUpdateRequest",
            "format": "",
            },
        "operationResponseType": "UserTeamResponse",
    },
    "v2.GetTeamNotificationRules": {
        "teamId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "TeamNotificationRulesResponse",
    },
    "v2.CreateTeamNotificationRule": {
        "teamId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "TeamNotificationRuleRequest",
            "format": "",
            },
        "operationResponseType": "TeamNotificationRuleResponse",
    },
    "v2.GetTeamNotificationRule": {
        "teamId": {
            "type": "string",
            "format": "",
            },
        "ruleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "TeamNotificationRuleResponse",
    },
    "v2.UpdateTeamNotificationRule": {
        "teamId": {
            "type": "string",
            "format": "",
            },
        "ruleId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "TeamNotificationRuleRequest",
            "format": "",
            },
        "operationResponseType": "TeamNotificationRuleResponse",
    },
    "v2.DeleteTeamNotificationRule": {
        "teamId": {
            "type": "string",
            "format": "",
            },
        "ruleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.GetTeamPermissionSettings": {
        "teamId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "TeamPermissionSettingsResponse",
    },
    "v2.UpdateTeamPermissionSetting": {
        "teamId": {
            "type": "string",
            "format": "",
            },
        "action": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "TeamPermissionSettingUpdateRequest",
            "format": "",
            },
        "operationResponseType": "TeamPermissionSettingResponse",
    },
    "v2.GetUserMemberships": {
        "userUuid": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "UserTeamsResponse",
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
        "operationResponseType": "IncidentTeamsResponse",
    },
    "v2.CreateIncidentTeam": {
        "body": {
            "type": "IncidentTeamCreateRequest",
            "format": "",
            },
        "operationResponseType": "IncidentTeamResponse",
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
        "operationResponseType": "IncidentTeamResponse",
    },
    "v2.DeleteIncidentTeam": {
        "teamId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
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
        "operationResponseType": "IncidentTeamResponse",
    },
    "v2.SearchFlakyTests": {
        "body": {
            "type": "FlakyTestsSearchRequest",
            "format": "",
            },
        "operationResponseType": "FlakyTestsSearchResponse",
    },
    "v2.UpdateFlakyTests": {
        "body": {
            "type": "UpdateFlakyTestsRequest",
            "format": "",
            },
        "operationResponseType": "UpdateFlakyTestsResponse",
    },
    "v2.SendInvitations": {
        "body": {
            "type": "UserInvitationsRequest",
            "format": "",
            },
        "operationResponseType": "UserInvitationsResponse",
    },
    "v2.GetInvitation": {
        "userInvitationUuid": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "UserInvitationResponse",
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
        "operationResponseType": "UsersResponse",
    },
    "v2.CreateUser": {
        "body": {
            "type": "UserCreateRequest",
            "format": "",
            },
        "operationResponseType": "UserResponse",
    },
    "v2.GetUser": {
        "userId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "UserResponse",
    },
    "v2.DisableUser": {
        "userId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
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
        "operationResponseType": "UserResponse",
    },
    "v2.ListUserOrganizations": {
        "userId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "UserResponse",
    },
    "v2.ListUserPermissions": {
        "userId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "PermissionsResponse",
    },
    "v2.CreateWorkflow": {
        "body": {
            "type": "CreateWorkflowRequest",
            "format": "",
            },
        "operationResponseType": "CreateWorkflowResponse",
    },
    "v2.GetWorkflow": {
        "workflowId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "GetWorkflowResponse",
    },
    "v2.DeleteWorkflow": {
        "workflowId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "{}",
    },
    "v2.UpdateWorkflow": {
        "workflowId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "UpdateWorkflowRequest",
            "format": "",
            },
        "operationResponseType": "UpdateWorkflowResponse",
    },
    "v2.ListWorkflowInstances": {
        "workflowId": {
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
        "operationResponseType": "WorkflowListInstancesResponse",
    },
    "v2.CreateWorkflowInstance": {
        "workflowId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "WorkflowInstanceCreateRequest",
            "format": "",
            },
        "operationResponseType": "WorkflowInstanceCreateResponse",
    },
    "v2.GetWorkflowInstance": {
        "workflowId": {
            "type": "string",
            "format": "",
            },
        "instanceId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "WorklflowGetInstanceResponse",
    },
    "v2.CancelWorkflowInstance": {
        "workflowId": {
            "type": "string",
            "format": "",
            },
        "instanceId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "WorklflowCancelInstanceResponse",
    },
}