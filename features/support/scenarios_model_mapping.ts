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
    "v1.DeleteAPIKey": {
        "key": {
            "type": "string",
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
    "v1.DeleteApplicationKey": {
        "key": {
            "type": "string",
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
    "v1.DeleteDashboards": {
        "body": {
            "type": "DashboardBulkDeleteRequest",
            "format": "",
            },
        "operationResponseType": "void",
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
    "v1.RestoreDashboards": {
        "body": {
            "type": "DashboardRestoreRequest",
            "format": "",
            },
        "operationResponseType": "void",
    },
    "v1.CreateDashboard": {
        "body": {
            "type": "Dashboard",
            "format": "",
            },
        "operationResponseType": "Dashboard",
    },
    "v1.CreatePublicDashboard": {
        "body": {
            "type": "SharedDashboard",
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
    "v1.DeletePublicDashboardInvitation": {
        "token": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "SharedDashboardInvites",
            "format": "",
            },
        "operationResponseType": "void",
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
    "v1.DeleteDashboard": {
        "dashboardId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "DashboardDeleteResponse",
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
    "v1.DeleteDashboardList": {
        "listId": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "DashboardListDeleteResponse",
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
    "v1.CancelDowntime": {
        "downtimeId": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "void",
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
    "v1.DeleteAWSAccount": {
        "body": {
            "type": "AWSAccountDeleteRequest",
            "format": "",
            },
        "operationResponseType": "any",
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
    "v1.CreateAWSAccount": {
        "body": {
            "type": "AWSAccount",
            "format": "",
            },
        "operationResponseType": "AWSAccountCreateResponse",
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
    "v1.ListAvailableAWSNamespaces": {
        "operationResponseType": "Array<string>",
    },
    "v1.DeleteAWSEventBridgeSource": {
        "body": {
            "type": "AWSEventBridgeDeleteRequest",
            "format": "",
            },
        "operationResponseType": "AWSEventBridgeDeleteResponse",
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
    "v1.DeleteAWSTagFilter": {
        "body": {
            "type": "AWSTagFilterDeleteRequest",
            "format": "",
            },
        "operationResponseType": "any",
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
    "v1.CreateNewAWSExternalID": {
        "body": {
            "type": "AWSAccount",
            "format": "",
            },
        "operationResponseType": "AWSAccountCreateResponse",
    },
    "v1.DeleteAWSLambdaARN": {
        "body": {
            "type": "AWSAccountAndLambdaRequest",
            "format": "",
            },
        "operationResponseType": "any",
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
    "v1.DeleteAzureIntegration": {
        "body": {
            "type": "AzureAccount",
            "format": "",
            },
        "operationResponseType": "any",
    },
    "v1.ListAzureIntegration": {
        "operationResponseType": "Array<AzureAccount>",
    },
    "v1.CreateAzureIntegration": {
        "body": {
            "type": "AzureAccount",
            "format": "",
            },
        "operationResponseType": "any",
    },
    "v1.UpdateAzureIntegration": {
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
    "v1.DeleteGCPIntegration": {
        "body": {
            "type": "GCPAccount",
            "format": "",
            },
        "operationResponseType": "any",
    },
    "v1.ListGCPIntegration": {
        "operationResponseType": "Array<GCPAccount>",
    },
    "v1.CreateGCPIntegration": {
        "body": {
            "type": "GCPAccount",
            "format": "",
            },
        "operationResponseType": "any",
    },
    "v1.UpdateGCPIntegration": {
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
    "v1.DeletePagerDutyIntegrationService": {
        "serviceName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
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
        "operationResponseType": "void",
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
    "v1.RemoveSlackIntegrationChannel": {
        "accountName": {
            "type": "string",
            "format": "",
            },
        "channelName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
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
    "v1.DeleteWebhooksIntegrationCustomVariable": {
        "customVariableName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
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
    "v1.CreateWebhooksIntegration": {
        "body": {
            "type": "WebhooksIntegration",
            "format": "",
            },
        "operationResponseType": "WebhooksIntegration",
    },
    "v1.DeleteWebhooksIntegration": {
        "webhookName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
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
    "v1.DeleteLogsPipeline": {
        "pipelineId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
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
            "format": "int64",
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
    "v1.DeleteNotebook": {
        "notebookId": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "void",
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
    "v1.DeleteSLOCorrection": {
        "sloCorrectionId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
    },
    "v1.GetSLOCorrection": {
        "sloCorrectionId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SLOCorrectionResponse",
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
    "v1.DeletePrivateLocation": {
        "locationId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
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
    "v1.GetTest": {
        "publicId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SyntheticsTestDetails",
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
    "v1.DeleteGlobalVariable": {
        "variableId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
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
    "v1.ListHostTags": {
        "source": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "TagToHosts",
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
        "operationResponseType": "void",
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
    "v1.DisableUser": {
        "userHandle": {
            "type": "string",
            "format": "email",
            },
        "operationResponseType": "UserDisableResponse",
    },
    "v1.GetUser": {
        "userHandle": {
            "type": "string",
            "format": "email",
            },
        "operationResponseType": "UserResponse",
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
        "operationResponseType": "UserResponse",
    },
    "v1.Validate": {
        "operationResponseType": "AuthenticationValidationResponse",
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
    "v2.DeleteAPIKey": {
        "apiKeyId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
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
    "v2.DeleteApplicationKey": {
        "appKeyId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
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
    "v2.DeleteCurrentUserApplicationKey": {
        "appKeyId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
    },
    "v2.GetCurrentUserApplicationKey": {
        "appKeyId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ApplicationKeyResponse",
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
            "format": "uuid",
            },
        "operationResponseType": "void",
    },
    "v2.GetOpenAPI": {
        "id": {
            "type": "string",
            "format": "uuid",
            },
        "operationResponseType": "HttpFile",
    },
    "v2.UpdateOpenAPI": {
        "id": {
            "type": "string",
            "format": "uuid",
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
    "v2.DeleteSpansMetric": {
        "metricId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
    },
    "v2.GetSpansMetric": {
        "metricId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SpansMetricResponse",
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
        "operationResponseType": "void",
    },
    "v2.DeleteApmRetentionFilter": {
        "filterId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
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
    "v2.DeleteAuthNMapping": {
        "authnMappingId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
    },
    "v2.GetAuthNMapping": {
        "authnMappingId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "AuthNMappingResponse",
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
    "v2.DeleteProject": {
        "projectId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
    },
    "v2.GetProject": {
        "projectId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ProjectResponse",
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
    "v2.ListCostAWSCURConfigs": {
        "operationResponseType": "AwsCURConfigsResponse",
    },
    "v2.CreateCostAWSCURConfig": {
        "body": {
            "type": "AwsCURConfigPostRequest",
            "format": "",
            },
        "operationResponseType": "AwsCURConfigResponse",
    },
    "v2.DeleteCostAWSCURConfig": {
        "cloudAccountId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
    },
    "v2.UpdateCostAWSCURConfig": {
        "cloudAccountId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "AwsCURConfigPatchRequest",
            "format": "",
            },
        "operationResponseType": "AwsCURConfigsResponse",
    },
    "v2.ListAWSRelatedAccounts": {
        "filterManagementAccountId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "AWSRelatedAccountsResponse",
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
    "v2.DeleteCostAzureUCConfig": {
        "cloudAccountId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
    },
    "v2.UpdateCostAzureUCConfigs": {
        "cloudAccountId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "AzureUCConfigPatchRequest",
            "format": "",
            },
        "operationResponseType": "AzureUCConfigPairsResponse",
    },
    "v2.ListCustomCostsFiles": {
        "operationResponseType": "CustomCostsFileListResponse",
    },
    "v2.UploadCustomCostsFile": {
        "body": {
            "type": "Array<CustomCostsFileLineItem>",
            "format": "",
            },
        "operationResponseType": "CustomCostsFileUploadResponse",
    },
    "v2.DeleteCustomCostsFile": {
        "fileId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
    },
    "v2.GetCustomCostsFile": {
        "fileId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "CustomCostsFileGetResponse",
    },
    "v2.GetCloudCostActivity": {
        "operationResponseType": "CloudCostActivityResponse",
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
    "v2.GetDashboardListItems": {
        "dashboardListId": {
            "type": "number",
            "format": "int64",
            },
        "operationResponseType": "DashboardListItems",
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
    "v2.CreateDORADeployment": {
        "body": {
            "type": "DORADeploymentRequest",
            "format": "",
            },
        "operationResponseType": "DORADeploymentResponse",
    },
    "v2.CreateDORAIncident": {
        "body": {
            "type": "DORAIncidentRequest",
            "format": "",
            },
        "operationResponseType": "DORAIncidentResponse",
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
    "v2.CancelDowntime": {
        "downtimeId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
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
    "v2.SearchEvents": {
        "body": {
            "type": "EventsListRequest",
            "format": "",
            },
        "operationResponseType": "EventsListResponse",
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
    "v2.DeleteIncident": {
        "incidentId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
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
        "include": {
            "type": "Array<IncidentAttachmentRelatedObject>",
            "format": "",
            },
        "filterAttachmentType": {
            "type": "Array<IncidentAttachmentAttachmentType>",
            "format": "",
            },
        "operationResponseType": "IncidentAttachmentsResponse",
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
        "operationResponseType": "IncidentAttachmentUpdateResponse",
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
    "v2.DeleteIncidentIntegration": {
        "incidentId": {
            "type": "string",
            "format": "",
            },
        "integrationMetadataId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
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
    "v2.DeleteIncidentTodo": {
        "incidentId": {
            "type": "string",
            "format": "",
            },
        "todoId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
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
        "operationResponseType": "void",
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
    "v2.DeleteOpsgenieService": {
        "integrationServiceId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
    },
    "v2.GetOpsgenieService": {
        "integrationServiceId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "OpsgenieServiceResponse",
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
    "v2.DeleteCloudflareAccount": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
    },
    "v2.GetCloudflareAccount": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "CloudflareAccountResponse",
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
    "v2.DeleteConfluentAccount": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
    },
    "v2.GetConfluentAccount": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "ConfluentAccountResponse",
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
    "v2.DeleteConfluentResource": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "resourceId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
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
    "v2.DeleteFastlyAccount": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
    },
    "v2.GetFastlyAccount": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "FastlyAccountResponse",
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
    "v2.DeleteFastlyService": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "serviceId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
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
    "v2.DeleteOktaAccount": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
    },
    "v2.GetOktaAccount": {
        "accountId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "OktaAccountResponse",
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
    "v2.DeleteLogsArchive": {
        "archiveId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
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
    "v2.RemoveRoleFromArchive": {
        "archiveId": {
            "type": "string",
            "format": "",
            },
        "body": {
            "type": "RelationshipToRole",
            "format": "",
            },
        "operationResponseType": "void",
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
        "operationResponseType": "void",
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
    "v2.DeleteLogsCustomDestination": {
        "customDestinationId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
    },
    "v2.GetLogsCustomDestination": {
        "customDestinationId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "CustomDestinationResponse",
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
    "v2.DeleteLogsMetric": {
        "metricId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
    },
    "v2.GetLogsMetric": {
        "metricId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "LogsMetricResponse",
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
        "operationResponseType": "MetricsAndMetricTagConfigurationsResponse",
    },
    "v2.DeleteBulkTagsMetricsConfiguration": {
        "body": {
            "type": "MetricBulkTagConfigDeleteRequest",
            "format": "",
            },
        "operationResponseType": "MetricBulkTagConfigResponse",
    },
    "v2.CreateBulkTagsMetricsConfiguration": {
        "body": {
            "type": "MetricBulkTagConfigCreateRequest",
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
    "v2.DeleteTagConfiguration": {
        "metricName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
    },
    "v2.ListTagConfigurationByName": {
        "metricName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "MetricTagConfigurationResponse",
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
    "v2.DeleteMonitorConfigPolicy": {
        "policyId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
    },
    "v2.GetMonitorConfigPolicy": {
        "policyId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "MonitorConfigPolicyResponse",
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
    "v2.ListDevices": {
        "pageNumber": {
            "type": "number",
            "format": "int64",
            },
        "pageSize": {
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
        "operationResponseType": "void",
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
    "v2.DeleteRole": {
        "roleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
    },
    "v2.GetRole": {
        "roleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "RoleResponse",
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
    "v2.DeleteSecurityFilter": {
        "securityFilterId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
    },
    "v2.GetSecurityFilter": {
        "securityFilterId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SecurityFilterResponse",
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
        "operationResponseType": "SecurityMonitoringSuppressionsResponse",
    },
    "v2.CreateSecurityMonitoringSuppression": {
        "body": {
            "type": "SecurityMonitoringSuppressionCreateRequest",
            "format": "",
            },
        "operationResponseType": "SecurityMonitoringSuppressionResponse",
    },
    "v2.DeleteSecurityMonitoringSuppression": {
        "suppressionId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
    },
    "v2.GetSecurityMonitoringSuppression": {
        "suppressionId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "SecurityMonitoringSuppressionResponse",
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
    "v2.ListSecurityMonitoringRules": {
        "pageSize": {
            "type": "number",
            "format": "int64",
            },
        "pageNumber": {
            "type": "number",
            "format": "int64",
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
        "operationResponseType": "void",
    },
    "v2.DeleteSecurityMonitoringRule": {
        "ruleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
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
    "v2.DeletePowerpack": {
        "powerpackId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
    },
    "v2.GetPowerpack": {
        "powerpackId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "PowerpackResponse",
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
    "v2.ListCSMThreatsAgentRules": {
        "operationResponseType": "CloudWorkloadSecurityAgentRulesListResponse",
    },
    "v2.CreateCSMThreatsAgentRule": {
        "body": {
            "type": "CloudWorkloadSecurityAgentRuleCreateRequest",
            "format": "",
            },
        "operationResponseType": "CloudWorkloadSecurityAgentRuleResponse",
    },
    "v2.DeleteCSMThreatsAgentRule": {
        "agentRuleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
    },
    "v2.GetCSMThreatsAgentRule": {
        "agentRuleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "CloudWorkloadSecurityAgentRuleResponse",
    },
    "v2.UpdateCSMThreatsAgentRule": {
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
    "v2.DownloadCSMThreatsPolicy": {
        "operationResponseType": "HttpFile",
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
    "v2.DeleteCloudWorkloadSecurityAgentRule": {
        "agentRuleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
    },
    "v2.GetCloudWorkloadSecurityAgentRule": {
        "agentRuleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "CloudWorkloadSecurityAgentRuleResponse",
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
    "v2.DeleteRestrictionPolicy": {
        "resourceId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
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
        "body": {
            "type": "RestrictionPolicyUpdateRequest",
            "format": "",
            },
        "operationResponseType": "RestrictionPolicyResponse",
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
    "v2.DeleteRUMApplication": {
        "id": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
    },
    "v2.GetRUMApplication": {
        "id": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "RUMApplicationResponse",
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
    "v2.DeleteScorecardRule": {
        "ruleId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
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
    "v2.DeleteServiceAccountApplicationKey": {
        "serviceAccountId": {
            "type": "string",
            "format": "",
            },
        "appKeyId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
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
    "v2.DeleteIncidentService": {
        "serviceId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
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
    "v2.DeleteServiceDefinition": {
        "serviceName": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
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
    "v2.DeleteTeam": {
        "teamId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
    },
    "v2.GetTeam": {
        "teamId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "TeamResponse",
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
    "v2.DeleteTeamLink": {
        "teamId": {
            "type": "string",
            "format": "",
            },
        "linkId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
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
        "operationResponseType": "void",
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
    "v2.DeleteIncidentTeam": {
        "teamId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
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
    "v2.DisableUser": {
        "userId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "void",
    },
    "v2.GetUser": {
        "userId": {
            "type": "string",
            "format": "",
            },
        "operationResponseType": "UserResponse",
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