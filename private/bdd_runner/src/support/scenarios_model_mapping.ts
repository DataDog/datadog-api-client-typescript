interface ParameterType {
  type: string;
  format: string;
}

interface OperationMapping {
  [key: string]: ParameterType | string;
  operationResponseType: string;
}

export const ScenariosModelMappings: { [key: string]: OperationMapping } = {
  "IPRangesApi.V1.GetIPRanges": {
    operationResponseType: "IPRanges",
  },
  "KeyManagementApi.V1.ListAPIKeys": {
    operationResponseType: "ApiKeyListResponse",
  },
  "KeyManagementApi.V1.CreateAPIKey": {
    body: {
      type: "ApiKey",
      format: "",
    },
    operationResponseType: "ApiKeyResponse",
  },
  "KeyManagementApi.V1.GetAPIKey": {
    key: {
      type: "string",
      format: "",
    },
    operationResponseType: "ApiKeyResponse",
  },
  "KeyManagementApi.V1.UpdateAPIKey": {
    key: {
      type: "string",
      format: "",
    },
    body: {
      type: "ApiKey",
      format: "",
    },
    operationResponseType: "ApiKeyResponse",
  },
  "KeyManagementApi.V1.DeleteAPIKey": {
    key: {
      type: "string",
      format: "",
    },
    operationResponseType: "ApiKeyResponse",
  },
  "KeyManagementApi.V1.ListApplicationKeys": {
    operationResponseType: "ApplicationKeyListResponse",
  },
  "KeyManagementApi.V1.CreateApplicationKey": {
    body: {
      type: "ApplicationKey",
      format: "",
    },
    operationResponseType: "ApplicationKeyResponse",
  },
  "KeyManagementApi.V1.GetApplicationKey": {
    key: {
      type: "string",
      format: "",
    },
    operationResponseType: "ApplicationKeyResponse",
  },
  "KeyManagementApi.V1.UpdateApplicationKey": {
    key: {
      type: "string",
      format: "",
    },
    body: {
      type: "ApplicationKey",
      format: "",
    },
    operationResponseType: "ApplicationKeyResponse",
  },
  "KeyManagementApi.V1.DeleteApplicationKey": {
    key: {
      type: "string",
      format: "",
    },
    operationResponseType: "ApplicationKeyResponse",
  },
  "ServiceChecksApi.V1.SubmitServiceCheck": {
    body: {
      type: "Array<ServiceCheck>",
      format: "",
    },
    operationResponseType: "IntakePayloadAccepted",
  },
  "UsageMeteringApi.V1.GetDailyCustomReports": {
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    sortDir: {
      type: "UsageSortDirection",
      format: "",
    },
    sort: {
      type: "UsageSort",
      format: "",
    },
    operationResponseType: "UsageCustomReportsResponse",
  },
  "UsageMeteringApi.V1.GetSpecifiedDailyCustomReports": {
    reportId: {
      type: "string",
      format: "",
    },
    operationResponseType: "UsageSpecifiedCustomReportsResponse",
  },
  "UsageMeteringApi.V1.GetMonthlyCustomReports": {
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    sortDir: {
      type: "UsageSortDirection",
      format: "",
    },
    sort: {
      type: "UsageSort",
      format: "",
    },
    operationResponseType: "UsageCustomReportsResponse",
  },
  "UsageMeteringApi.V1.GetSpecifiedMonthlyCustomReports": {
    reportId: {
      type: "string",
      format: "",
    },
    operationResponseType: "UsageSpecifiedCustomReportsResponse",
  },
  "UsageMeteringApi.V1.GetUsageAnalyzedLogs": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "UsageAnalyzedLogsResponse",
  },
  "UsageMeteringApi.V1.GetUsageAuditLogs": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "UsageAuditLogsResponse",
  },
  "UsageMeteringApi.V1.GetUsageLambda": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "UsageLambdaResponse",
  },
  "UsageMeteringApi.V1.GetUsageBillableSummary": {
    month: {
      type: "Date",
      format: "date-time",
    },
    includeConnectedAccounts: {
      type: "boolean",
      format: "",
    },
    operationResponseType: "UsageBillableSummaryResponse",
  },
  "UsageMeteringApi.V1.GetUsageCIApp": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "UsageCIVisibilityResponse",
  },
  "UsageMeteringApi.V1.GetUsageCloudSecurityPostureManagement": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "UsageCloudSecurityPostureManagementResponse",
  },
  "UsageMeteringApi.V1.GetUsageCWS": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "UsageCWSResponse",
  },
  "UsageMeteringApi.V1.GetUsageDBM": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "UsageDBMResponse",
  },
  "UsageMeteringApi.V1.GetUsageFargate": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "UsageFargateResponse",
  },
  "UsageMeteringApi.V1.GetUsageHosts": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "UsageHostsResponse",
  },
  "UsageMeteringApi.V1.GetHourlyUsageAttribution": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    usageType: {
      type: "HourlyUsageAttributionUsageType",
      format: "",
    },
    nextRecordId: {
      type: "string",
      format: "",
    },
    tagBreakdownKeys: {
      type: "string",
      format: "",
    },
    includeDescendants: {
      type: "boolean",
      format: "",
    },
    operationResponseType: "HourlyUsageAttributionResponse",
  },
  "UsageMeteringApi.V1.GetIncidentManagement": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "UsageIncidentManagementResponse",
  },
  "UsageMeteringApi.V1.GetUsageIndexedSpans": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "UsageIndexedSpansResponse",
  },
  "UsageMeteringApi.V1.GetIngestedSpans": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "UsageIngestedSpansResponse",
  },
  "UsageMeteringApi.V1.GetUsageInternetOfThings": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "UsageIoTResponse",
  },
  "UsageMeteringApi.V1.GetUsageLogs": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "UsageLogsResponse",
  },
  "UsageMeteringApi.V1.GetUsageLogsByRetention": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "UsageLogsByRetentionResponse",
  },
  "UsageMeteringApi.V1.GetUsageLogsByIndex": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    indexName: {
      type: "Array<string>",
      format: "",
    },
    operationResponseType: "UsageLogsByIndexResponse",
  },
  "UsageMeteringApi.V1.GetMonthlyUsageAttribution": {
    startMonth: {
      type: "Date",
      format: "date-time",
    },
    endMonth: {
      type: "Date",
      format: "date-time",
    },
    fields: {
      type: "MonthlyUsageAttributionSupportedMetrics",
      format: "",
    },
    sortDirection: {
      type: "UsageSortDirection",
      format: "",
    },
    sortName: {
      type: "MonthlyUsageAttributionSupportedMetrics",
      format: "",
    },
    tagBreakdownKeys: {
      type: "string",
      format: "",
    },
    nextRecordId: {
      type: "string",
      format: "",
    },
    includeDescendants: {
      type: "boolean",
      format: "",
    },
    operationResponseType: "MonthlyUsageAttributionResponse",
  },
  "UsageMeteringApi.V1.GetUsageNetworkFlows": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "UsageNetworkFlowsResponse",
  },
  "UsageMeteringApi.V1.GetUsageNetworkHosts": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "UsageNetworkHostsResponse",
  },
  "UsageMeteringApi.V1.GetUsageOnlineArchive": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "UsageOnlineArchiveResponse",
  },
  "UsageMeteringApi.V1.GetUsageProfiling": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "UsageProfilingResponse",
  },
  "UsageMeteringApi.V1.GetUsageRumUnits": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "UsageRumUnitsResponse",
  },
  "UsageMeteringApi.V1.GetUsageRumSessions": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    type: {
      type: "string",
      format: "",
    },
    operationResponseType: "UsageRumSessionsResponse",
  },
  "UsageMeteringApi.V1.GetUsageSDS": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "UsageSDSResponse",
  },
  "UsageMeteringApi.V1.GetUsageSNMP": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "UsageSNMPResponse",
  },
  "UsageMeteringApi.V1.GetUsageSummary": {
    startMonth: {
      type: "Date",
      format: "date-time",
    },
    endMonth: {
      type: "Date",
      format: "date-time",
    },
    includeOrgDetails: {
      type: "boolean",
      format: "",
    },
    includeConnectedAccounts: {
      type: "boolean",
      format: "",
    },
    operationResponseType: "UsageSummaryResponse",
  },
  "UsageMeteringApi.V1.GetUsageSynthetics": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "UsageSyntheticsResponse",
  },
  "UsageMeteringApi.V1.GetUsageSyntheticsAPI": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "UsageSyntheticsAPIResponse",
  },
  "UsageMeteringApi.V1.GetUsageSyntheticsBrowser": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "UsageSyntheticsBrowserResponse",
  },
  "UsageMeteringApi.V1.GetUsageTimeseries": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "UsageTimeseriesResponse",
  },
  "UsageMeteringApi.V1.GetUsageTopAvgMetrics": {
    month: {
      type: "Date",
      format: "date-time",
    },
    day: {
      type: "Date",
      format: "date-time",
    },
    names: {
      type: "Array<string>",
      format: "",
    },
    limit: {
      type: "number",
      format: "int32",
    },
    nextRecordId: {
      type: "string",
      format: "",
    },
    operationResponseType: "UsageTopAvgMetricsResponse",
  },
  "DashboardsApi.V1.ListDashboards": {
    filterShared: {
      type: "boolean",
      format: "",
    },
    filterDeleted: {
      type: "boolean",
      format: "",
    },
    count: {
      type: "number",
      format: "int64",
    },
    start: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "DashboardSummary",
  },
  "DashboardsApi.V1.CreateDashboard": {
    body: {
      type: "Dashboard",
      format: "",
    },
    operationResponseType: "Dashboard",
  },
  "DashboardsApi.V1.DeleteDashboards": {
    body: {
      type: "DashboardBulkDeleteRequest",
      format: "",
    },
    operationResponseType: "{}",
  },
  "DashboardsApi.V1.RestoreDashboards": {
    body: {
      type: "DashboardRestoreRequest",
      format: "",
    },
    operationResponseType: "{}",
  },
  "DashboardsApi.V1.CreatePublicDashboard": {
    body: {
      type: "SharedDashboard",
      format: "",
    },
    operationResponseType: "SharedDashboard",
  },
  "DashboardsApi.V1.GetPublicDashboard": {
    token: {
      type: "string",
      format: "",
    },
    operationResponseType: "SharedDashboard",
  },
  "DashboardsApi.V1.UpdatePublicDashboard": {
    token: {
      type: "string",
      format: "",
    },
    body: {
      type: "SharedDashboardUpdateRequest",
      format: "",
    },
    operationResponseType: "SharedDashboard",
  },
  "DashboardsApi.V1.DeletePublicDashboard": {
    token: {
      type: "string",
      format: "",
    },
    operationResponseType: "DeleteSharedDashboardResponse",
  },
  "DashboardsApi.V1.GetPublicDashboardInvitations": {
    token: {
      type: "string",
      format: "",
    },
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "SharedDashboardInvites",
  },
  "DashboardsApi.V1.SendPublicDashboardInvitation": {
    token: {
      type: "string",
      format: "",
    },
    body: {
      type: "SharedDashboardInvites",
      format: "",
    },
    operationResponseType: "SharedDashboardInvites",
  },
  "DashboardsApi.V1.DeletePublicDashboardInvitation": {
    token: {
      type: "string",
      format: "",
    },
    body: {
      type: "SharedDashboardInvites",
      format: "",
    },
    operationResponseType: "{}",
  },
  "DashboardsApi.V1.GetDashboard": {
    dashboardId: {
      type: "string",
      format: "",
    },
    operationResponseType: "Dashboard",
  },
  "DashboardsApi.V1.UpdateDashboard": {
    dashboardId: {
      type: "string",
      format: "",
    },
    body: {
      type: "Dashboard",
      format: "",
    },
    operationResponseType: "Dashboard",
  },
  "DashboardsApi.V1.DeleteDashboard": {
    dashboardId: {
      type: "string",
      format: "",
    },
    operationResponseType: "DashboardDeleteResponse",
  },
  "DashboardListsApi.V1.ListDashboardLists": {
    operationResponseType: "DashboardListListResponse",
  },
  "DashboardListsApi.V1.CreateDashboardList": {
    body: {
      type: "DashboardList",
      format: "",
    },
    operationResponseType: "DashboardList",
  },
  "DashboardListsApi.V1.GetDashboardList": {
    listId: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "DashboardList",
  },
  "DashboardListsApi.V1.UpdateDashboardList": {
    listId: {
      type: "number",
      format: "int64",
    },
    body: {
      type: "DashboardList",
      format: "",
    },
    operationResponseType: "DashboardList",
  },
  "DashboardListsApi.V1.DeleteDashboardList": {
    listId: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "DashboardListDeleteResponse",
  },
  "MetricsApi.V1.SubmitDistributionPoints": {
    contentEncoding: {
      type: "DistributionPointsContentEncoding",
      format: "",
    },
    body: {
      type: "DistributionPointsPayload",
      format: "",
    },
    operationResponseType: "IntakePayloadAccepted",
  },
  "MetricsApi.V1.ListActiveMetrics": {
    from: {
      type: "number",
      format: "int64",
    },
    host: {
      type: "string",
      format: "",
    },
    tagFilter: {
      type: "string",
      format: "",
    },
    operationResponseType: "MetricsListResponse",
  },
  "MetricsApi.V1.GetMetricMetadata": {
    metricName: {
      type: "string",
      format: "",
    },
    operationResponseType: "MetricMetadata",
  },
  "MetricsApi.V1.UpdateMetricMetadata": {
    metricName: {
      type: "string",
      format: "",
    },
    body: {
      type: "MetricMetadata",
      format: "",
    },
    operationResponseType: "MetricMetadata",
  },
  "MetricsApi.V1.QueryMetrics": {
    from: {
      type: "number",
      format: "int64",
    },
    to: {
      type: "number",
      format: "int64",
    },
    query: {
      type: "string",
      format: "",
    },
    operationResponseType: "MetricsQueryResponse",
  },
  "MetricsApi.V1.ListMetrics": {
    q: {
      type: "string",
      format: "",
    },
    operationResponseType: "MetricSearchResponse",
  },
  "MetricsApi.V1.SubmitMetrics": {
    contentEncoding: {
      type: "MetricContentEncoding",
      format: "",
    },
    body: {
      type: "MetricsPayload",
      format: "",
    },
    operationResponseType: "IntakePayloadAccepted",
  },
  "DowntimesApi.V1.ListDowntimes": {
    currentOnly: {
      type: "boolean",
      format: "",
    },
    withCreator: {
      type: "boolean",
      format: "",
    },
    operationResponseType: "Array<Downtime>",
  },
  "DowntimesApi.V1.CreateDowntime": {
    body: {
      type: "Downtime",
      format: "",
    },
    operationResponseType: "Downtime",
  },
  "DowntimesApi.V1.CancelDowntimesByScope": {
    body: {
      type: "CancelDowntimesByScopeRequest",
      format: "",
    },
    operationResponseType: "CanceledDowntimesIds",
  },
  "DowntimesApi.V1.GetDowntime": {
    downtimeId: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "Downtime",
  },
  "DowntimesApi.V1.UpdateDowntime": {
    downtimeId: {
      type: "number",
      format: "int64",
    },
    body: {
      type: "Downtime",
      format: "",
    },
    operationResponseType: "Downtime",
  },
  "DowntimesApi.V1.CancelDowntime": {
    downtimeId: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "{}",
  },
  "DowntimesApi.V1.ListMonitorDowntimes": {
    monitorId: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "Array<Downtime>",
  },
  "EventsApi.V1.ListEvents": {
    start: {
      type: "number",
      format: "int64",
    },
    end: {
      type: "number",
      format: "int64",
    },
    priority: {
      type: "EventPriority",
      format: "",
    },
    sources: {
      type: "string",
      format: "",
    },
    tags: {
      type: "string",
      format: "",
    },
    unaggregated: {
      type: "boolean",
      format: "",
    },
    excludeAggregate: {
      type: "boolean",
      format: "",
    },
    page: {
      type: "number",
      format: "int32",
    },
    operationResponseType: "EventListResponse",
  },
  "EventsApi.V1.CreateEvent": {
    body: {
      type: "EventCreateRequest",
      format: "",
    },
    operationResponseType: "EventCreateResponse",
  },
  "EventsApi.V1.GetEvent": {
    eventId: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "EventResponse",
  },
  "SnapshotsApi.V1.GetGraphSnapshot": {
    metricQuery: {
      type: "string",
      format: "",
    },
    start: {
      type: "number",
      format: "int64",
    },
    end: {
      type: "number",
      format: "int64",
    },
    eventQuery: {
      type: "string",
      format: "",
    },
    graphDef: {
      type: "string",
      format: "",
    },
    title: {
      type: "string",
      format: "",
    },
    height: {
      type: "number",
      format: "int64",
    },
    width: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "GraphSnapshot",
  },
  "HostsApi.V1.MuteHost": {
    hostName: {
      type: "string",
      format: "",
    },
    body: {
      type: "HostMuteSettings",
      format: "",
    },
    operationResponseType: "HostMuteResponse",
  },
  "HostsApi.V1.UnmuteHost": {
    hostName: {
      type: "string",
      format: "",
    },
    operationResponseType: "HostMuteResponse",
  },
  "HostsApi.V1.ListHosts": {
    filter: {
      type: "string",
      format: "",
    },
    sortField: {
      type: "string",
      format: "",
    },
    sortDir: {
      type: "string",
      format: "",
    },
    start: {
      type: "number",
      format: "int64",
    },
    count: {
      type: "number",
      format: "int64",
    },
    from: {
      type: "number",
      format: "int64",
    },
    includeMutedHostsData: {
      type: "boolean",
      format: "",
    },
    includeHostsMetadata: {
      type: "boolean",
      format: "",
    },
    operationResponseType: "HostListResponse",
  },
  "HostsApi.V1.GetHostTotals": {
    from: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "HostTotals",
  },
  "AWSIntegrationApi.V1.ListAWSAccounts": {
    accountId: {
      type: "string",
      format: "",
    },
    roleName: {
      type: "string",
      format: "",
    },
    accessKeyId: {
      type: "string",
      format: "",
    },
    operationResponseType: "AWSAccountListResponse",
  },
  "AWSIntegrationApi.V1.UpdateAWSAccount": {
    accountId: {
      type: "string",
      format: "",
    },
    roleName: {
      type: "string",
      format: "",
    },
    accessKeyId: {
      type: "string",
      format: "",
    },
    body: {
      type: "AWSAccount",
      format: "",
    },
    operationResponseType: "any",
  },
  "AWSIntegrationApi.V1.CreateAWSAccount": {
    body: {
      type: "AWSAccount",
      format: "",
    },
    operationResponseType: "AWSAccountCreateResponse",
  },
  "AWSIntegrationApi.V1.DeleteAWSAccount": {
    body: {
      type: "AWSAccountDeleteRequest",
      format: "",
    },
    operationResponseType: "any",
  },
  "AWSIntegrationApi.V1.ListAvailableAWSNamespaces": {
    operationResponseType: "Array<string>",
  },
  "AWSIntegrationApi.V1.ListAWSEventBridgeSources": {
    operationResponseType: "AWSEventBridgeListResponse",
  },
  "AWSIntegrationApi.V1.CreateAWSEventBridgeSource": {
    body: {
      type: "AWSEventBridgeCreateRequest",
      format: "",
    },
    operationResponseType: "AWSEventBridgeCreateResponse",
  },
  "AWSIntegrationApi.V1.DeleteAWSEventBridgeSource": {
    body: {
      type: "AWSEventBridgeDeleteRequest",
      format: "",
    },
    operationResponseType: "AWSEventBridgeDeleteResponse",
  },
  "AWSIntegrationApi.V1.ListAWSTagFilters": {
    accountId: {
      type: "string",
      format: "",
    },
    operationResponseType: "AWSTagFilterListResponse",
  },
  "AWSIntegrationApi.V1.CreateAWSTagFilter": {
    body: {
      type: "AWSTagFilterCreateRequest",
      format: "",
    },
    operationResponseType: "any",
  },
  "AWSIntegrationApi.V1.DeleteAWSTagFilter": {
    body: {
      type: "AWSTagFilterDeleteRequest",
      format: "",
    },
    operationResponseType: "any",
  },
  "AWSIntegrationApi.V1.CreateNewAWSExternalID": {
    body: {
      type: "AWSAccount",
      format: "",
    },
    operationResponseType: "AWSAccountCreateResponse",
  },
  "AWSLogsIntegrationApi.V1.ListAWSLogsIntegrations": {
    operationResponseType: "Array<AWSLogsListResponse>",
  },
  "AWSLogsIntegrationApi.V1.CreateAWSLambdaARN": {
    body: {
      type: "AWSAccountAndLambdaRequest",
      format: "",
    },
    operationResponseType: "any",
  },
  "AWSLogsIntegrationApi.V1.DeleteAWSLambdaARN": {
    body: {
      type: "AWSAccountAndLambdaRequest",
      format: "",
    },
    operationResponseType: "any",
  },
  "AWSLogsIntegrationApi.V1.CheckAWSLogsLambdaAsync": {
    body: {
      type: "AWSAccountAndLambdaRequest",
      format: "",
    },
    operationResponseType: "AWSLogsAsyncResponse",
  },
  "AWSLogsIntegrationApi.V1.ListAWSLogsServices": {
    operationResponseType: "Array<AWSLogsListServicesResponse>",
  },
  "AWSLogsIntegrationApi.V1.EnableAWSLogServices": {
    body: {
      type: "AWSLogsServicesRequest",
      format: "",
    },
    operationResponseType: "any",
  },
  "AWSLogsIntegrationApi.V1.CheckAWSLogsServicesAsync": {
    body: {
      type: "AWSLogsServicesRequest",
      format: "",
    },
    operationResponseType: "AWSLogsAsyncResponse",
  },
  "AzureIntegrationApi.V1.ListAzureIntegration": {
    operationResponseType: "Array<AzureAccount>",
  },
  "AzureIntegrationApi.V1.UpdateAzureIntegration": {
    body: {
      type: "AzureAccount",
      format: "",
    },
    operationResponseType: "any",
  },
  "AzureIntegrationApi.V1.CreateAzureIntegration": {
    body: {
      type: "AzureAccount",
      format: "",
    },
    operationResponseType: "any",
  },
  "AzureIntegrationApi.V1.DeleteAzureIntegration": {
    body: {
      type: "AzureAccount",
      format: "",
    },
    operationResponseType: "any",
  },
  "AzureIntegrationApi.V1.UpdateAzureHostFilters": {
    body: {
      type: "AzureAccount",
      format: "",
    },
    operationResponseType: "any",
  },
  "GCPIntegrationApi.V1.ListGCPIntegration": {
    operationResponseType: "Array<GCPAccount>",
  },
  "GCPIntegrationApi.V1.UpdateGCPIntegration": {
    body: {
      type: "GCPAccount",
      format: "",
    },
    operationResponseType: "any",
  },
  "GCPIntegrationApi.V1.CreateGCPIntegration": {
    body: {
      type: "GCPAccount",
      format: "",
    },
    operationResponseType: "any",
  },
  "GCPIntegrationApi.V1.DeleteGCPIntegration": {
    body: {
      type: "GCPAccount",
      format: "",
    },
    operationResponseType: "any",
  },
  "PagerDutyIntegrationApi.V1.CreatePagerDutyIntegrationService": {
    body: {
      type: "PagerDutyService",
      format: "",
    },
    operationResponseType: "PagerDutyServiceName",
  },
  "PagerDutyIntegrationApi.V1.GetPagerDutyIntegrationService": {
    serviceName: {
      type: "string",
      format: "",
    },
    operationResponseType: "PagerDutyServiceName",
  },
  "PagerDutyIntegrationApi.V1.UpdatePagerDutyIntegrationService": {
    serviceName: {
      type: "string",
      format: "",
    },
    body: {
      type: "PagerDutyServiceKey",
      format: "",
    },
    operationResponseType: "{}",
  },
  "PagerDutyIntegrationApi.V1.DeletePagerDutyIntegrationService": {
    serviceName: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "SlackIntegrationApi.V1.GetSlackIntegrationChannels": {
    accountName: {
      type: "string",
      format: "",
    },
    operationResponseType: "Array<SlackIntegrationChannel>",
  },
  "SlackIntegrationApi.V1.CreateSlackIntegrationChannel": {
    accountName: {
      type: "string",
      format: "",
    },
    body: {
      type: "SlackIntegrationChannel",
      format: "",
    },
    operationResponseType: "SlackIntegrationChannel",
  },
  "SlackIntegrationApi.V1.GetSlackIntegrationChannel": {
    accountName: {
      type: "string",
      format: "",
    },
    channelName: {
      type: "string",
      format: "",
    },
    operationResponseType: "SlackIntegrationChannel",
  },
  "SlackIntegrationApi.V1.RemoveSlackIntegrationChannel": {
    accountName: {
      type: "string",
      format: "",
    },
    channelName: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "SlackIntegrationApi.V1.UpdateSlackIntegrationChannel": {
    accountName: {
      type: "string",
      format: "",
    },
    channelName: {
      type: "string",
      format: "",
    },
    body: {
      type: "SlackIntegrationChannel",
      format: "",
    },
    operationResponseType: "SlackIntegrationChannel",
  },
  "WebhooksIntegrationApi.V1.CreateWebhooksIntegrationCustomVariable": {
    body: {
      type: "WebhooksIntegrationCustomVariable",
      format: "",
    },
    operationResponseType: "WebhooksIntegrationCustomVariableResponse",
  },
  "WebhooksIntegrationApi.V1.GetWebhooksIntegrationCustomVariable": {
    customVariableName: {
      type: "string",
      format: "",
    },
    operationResponseType: "WebhooksIntegrationCustomVariableResponse",
  },
  "WebhooksIntegrationApi.V1.UpdateWebhooksIntegrationCustomVariable": {
    customVariableName: {
      type: "string",
      format: "",
    },
    body: {
      type: "WebhooksIntegrationCustomVariableUpdateRequest",
      format: "",
    },
    operationResponseType: "WebhooksIntegrationCustomVariableResponse",
  },
  "WebhooksIntegrationApi.V1.DeleteWebhooksIntegrationCustomVariable": {
    customVariableName: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "WebhooksIntegrationApi.V1.CreateWebhooksIntegration": {
    body: {
      type: "WebhooksIntegration",
      format: "",
    },
    operationResponseType: "WebhooksIntegration",
  },
  "WebhooksIntegrationApi.V1.GetWebhooksIntegration": {
    webhookName: {
      type: "string",
      format: "",
    },
    operationResponseType: "WebhooksIntegration",
  },
  "WebhooksIntegrationApi.V1.UpdateWebhooksIntegration": {
    webhookName: {
      type: "string",
      format: "",
    },
    body: {
      type: "WebhooksIntegrationUpdateRequest",
      format: "",
    },
    operationResponseType: "WebhooksIntegration",
  },
  "WebhooksIntegrationApi.V1.DeleteWebhooksIntegration": {
    webhookName: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "LogsApi.V1.ListLogs": {
    body: {
      type: "LogsListRequest",
      format: "",
    },
    operationResponseType: "LogsListResponse",
  },
  "LogsApi.V1.SubmitLog": {
    contentEncoding: {
      type: "ContentEncoding",
      format: "",
    },
    ddtags: {
      type: "string",
      format: "",
    },
    body: {
      type: "Array<HTTPLogItem>",
      format: "",
    },
    operationResponseType: "any",
  },
  "LogsIndexesApi.V1.GetLogsIndexOrder": {
    operationResponseType: "LogsIndexesOrder",
  },
  "LogsIndexesApi.V1.UpdateLogsIndexOrder": {
    body: {
      type: "LogsIndexesOrder",
      format: "",
    },
    operationResponseType: "LogsIndexesOrder",
  },
  "LogsIndexesApi.V1.ListLogIndexes": {
    operationResponseType: "LogsIndexListResponse",
  },
  "LogsIndexesApi.V1.CreateLogsIndex": {
    body: {
      type: "LogsIndex",
      format: "",
    },
    operationResponseType: "LogsIndex",
  },
  "LogsIndexesApi.V1.GetLogsIndex": {
    name: {
      type: "string",
      format: "",
    },
    operationResponseType: "LogsIndex",
  },
  "LogsIndexesApi.V1.UpdateLogsIndex": {
    name: {
      type: "string",
      format: "",
    },
    body: {
      type: "LogsIndexUpdateRequest",
      format: "",
    },
    operationResponseType: "LogsIndex",
  },
  "LogsIndexesApi.V1.DeleteLogsIndex": {
    name: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "LogsPipelinesApi.V1.GetLogsPipelineOrder": {
    operationResponseType: "LogsPipelinesOrder",
  },
  "LogsPipelinesApi.V1.UpdateLogsPipelineOrder": {
    body: {
      type: "LogsPipelinesOrder",
      format: "",
    },
    operationResponseType: "LogsPipelinesOrder",
  },
  "LogsPipelinesApi.V1.ListLogsPipelines": {
    operationResponseType: "Array<LogsPipeline>",
  },
  "LogsPipelinesApi.V1.CreateLogsPipeline": {
    body: {
      type: "LogsPipeline",
      format: "",
    },
    operationResponseType: "LogsPipeline",
  },
  "LogsPipelinesApi.V1.GetLogsPipeline": {
    pipelineId: {
      type: "string",
      format: "",
    },
    operationResponseType: "LogsPipeline",
  },
  "LogsPipelinesApi.V1.UpdateLogsPipeline": {
    pipelineId: {
      type: "string",
      format: "",
    },
    body: {
      type: "LogsPipeline",
      format: "",
    },
    operationResponseType: "LogsPipeline",
  },
  "LogsPipelinesApi.V1.DeleteLogsPipeline": {
    pipelineId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "MonitorsApi.V1.ListMonitors": {
    groupStates: {
      type: "string",
      format: "",
    },
    name: {
      type: "string",
      format: "",
    },
    tags: {
      type: "string",
      format: "",
    },
    monitorTags: {
      type: "string",
      format: "",
    },
    withDowntimes: {
      type: "boolean",
      format: "",
    },
    idOffset: {
      type: "number",
      format: "int64",
    },
    page: {
      type: "number",
      format: "int64",
    },
    pageSize: {
      type: "number",
      format: "int32",
    },
    operationResponseType: "Array<Monitor>",
  },
  "MonitorsApi.V1.CreateMonitor": {
    body: {
      type: "Monitor",
      format: "",
    },
    operationResponseType: "Monitor",
  },
  "MonitorsApi.V1.CheckCanDeleteMonitor": {
    monitorIds: {
      type: "Array<number>",
      format: "",
    },
    operationResponseType: "CheckCanDeleteMonitorResponse",
  },
  "MonitorsApi.V1.SearchMonitorGroups": {
    query: {
      type: "string",
      format: "",
    },
    page: {
      type: "number",
      format: "int64",
    },
    perPage: {
      type: "number",
      format: "int64",
    },
    sort: {
      type: "string",
      format: "",
    },
    operationResponseType: "MonitorGroupSearchResponse",
  },
  "MonitorsApi.V1.SearchMonitors": {
    query: {
      type: "string",
      format: "",
    },
    page: {
      type: "number",
      format: "int64",
    },
    perPage: {
      type: "number",
      format: "int64",
    },
    sort: {
      type: "string",
      format: "",
    },
    operationResponseType: "MonitorSearchResponse",
  },
  "MonitorsApi.V1.ValidateMonitor": {
    body: {
      type: "Monitor",
      format: "",
    },
    operationResponseType: "any",
  },
  "MonitorsApi.V1.GetMonitor": {
    monitorId: {
      type: "number",
      format: "int64",
    },
    groupStates: {
      type: "string",
      format: "",
    },
    withDowntimes: {
      type: "boolean",
      format: "",
    },
    withAssets: {
      type: "boolean",
      format: "",
    },
    operationResponseType: "Monitor",
  },
  "MonitorsApi.V1.UpdateMonitor": {
    monitorId: {
      type: "number",
      format: "int64",
    },
    body: {
      type: "MonitorUpdateRequest",
      format: "",
    },
    operationResponseType: "Monitor",
  },
  "MonitorsApi.V1.DeleteMonitor": {
    monitorId: {
      type: "number",
      format: "int64",
    },
    force: {
      type: "string",
      format: "",
    },
    operationResponseType: "DeletedMonitor",
  },
  "MonitorsApi.V1.ValidateExistingMonitor": {
    monitorId: {
      type: "number",
      format: "int64",
    },
    body: {
      type: "Monitor",
      format: "",
    },
    operationResponseType: "any",
  },
  "NotebooksApi.V1.ListNotebooks": {
    authorHandle: {
      type: "string",
      format: "",
    },
    excludeAuthorHandle: {
      type: "string",
      format: "",
    },
    start: {
      type: "number",
      format: "int64",
    },
    count: {
      type: "number",
      format: "int64",
    },
    sortField: {
      type: "string",
      format: "",
    },
    sortDir: {
      type: "string",
      format: "",
    },
    query: {
      type: "string",
      format: "",
    },
    includeCells: {
      type: "boolean",
      format: "",
    },
    isTemplate: {
      type: "boolean",
      format: "",
    },
    type: {
      type: "string",
      format: "",
    },
    operationResponseType: "NotebooksResponse",
  },
  "NotebooksApi.V1.CreateNotebook": {
    body: {
      type: "NotebookCreateRequest",
      format: "",
    },
    operationResponseType: "NotebookResponse",
  },
  "NotebooksApi.V1.GetNotebook": {
    notebookId: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "NotebookResponse",
  },
  "NotebooksApi.V1.UpdateNotebook": {
    notebookId: {
      type: "number",
      format: "int64",
    },
    body: {
      type: "NotebookUpdateRequest",
      format: "",
    },
    operationResponseType: "NotebookResponse",
  },
  "NotebooksApi.V1.DeleteNotebook": {
    notebookId: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "{}",
  },
  "OrganizationsApi.V1.ListOrgs": {
    operationResponseType: "OrganizationListResponse",
  },
  "OrganizationsApi.V1.CreateChildOrg": {
    body: {
      type: "OrganizationCreateBody",
      format: "",
    },
    operationResponseType: "OrganizationCreateResponse",
  },
  "OrganizationsApi.V1.GetOrg": {
    publicId: {
      type: "string",
      format: "",
    },
    operationResponseType: "OrganizationResponse",
  },
  "OrganizationsApi.V1.UpdateOrg": {
    publicId: {
      type: "string",
      format: "",
    },
    body: {
      type: "Organization",
      format: "",
    },
    operationResponseType: "OrganizationResponse",
  },
  "OrganizationsApi.V1.DowngradeOrg": {
    publicId: {
      type: "string",
      format: "",
    },
    operationResponseType: "OrgDowngradedResponse",
  },
  "OrganizationsApi.V1.UploadIdPForOrg": {
    publicId: {
      type: "string",
      format: "",
    },
    idpFile: {
      type: "HttpFile",
      format: "binary",
    },
    operationResponseType: "IdpResponse",
  },
  "SecurityMonitoringApi.V1.AddSecurityMonitoringSignalToIncident": {
    signalId: {
      type: "string",
      format: "",
    },
    body: {
      type: "AddSignalToIncidentRequest",
      format: "",
    },
    operationResponseType: "SuccessfulSignalUpdateResponse",
  },
  "SecurityMonitoringApi.V1.EditSecurityMonitoringSignalAssignee": {
    signalId: {
      type: "string",
      format: "",
    },
    body: {
      type: "SignalAssigneeUpdateRequest",
      format: "",
    },
    operationResponseType: "SuccessfulSignalUpdateResponse",
  },
  "SecurityMonitoringApi.V1.EditSecurityMonitoringSignalState": {
    signalId: {
      type: "string",
      format: "",
    },
    body: {
      type: "SignalStateUpdateRequest",
      format: "",
    },
    operationResponseType: "SuccessfulSignalUpdateResponse",
  },
  "ServiceLevelObjectivesApi.V1.ListSLOs": {
    ids: {
      type: "string",
      format: "",
    },
    query: {
      type: "string",
      format: "",
    },
    tagsQuery: {
      type: "string",
      format: "",
    },
    metricsQuery: {
      type: "string",
      format: "",
    },
    limit: {
      type: "number",
      format: "int64",
    },
    offset: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "SLOListResponse",
  },
  "ServiceLevelObjectivesApi.V1.CreateSLO": {
    body: {
      type: "ServiceLevelObjectiveRequest",
      format: "",
    },
    operationResponseType: "SLOListResponse",
  },
  "ServiceLevelObjectivesApi.V1.DeleteSLOTimeframeInBulk": {
    body: {
      type: "{ [key: string]: Array<SLOTimeframe>; }",
      format: "",
    },
    operationResponseType: "SLOBulkDeleteResponse",
  },
  "ServiceLevelObjectivesApi.V1.CheckCanDeleteSLO": {
    ids: {
      type: "string",
      format: "",
    },
    operationResponseType: "CheckCanDeleteSLOResponse",
  },
  "ServiceLevelObjectivesApi.V1.SearchSLO": {
    query: {
      type: "string",
      format: "",
    },
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    includeFacets: {
      type: "boolean",
      format: "",
    },
    operationResponseType: "SearchSLOResponse",
  },
  "ServiceLevelObjectivesApi.V1.GetSLO": {
    sloId: {
      type: "string",
      format: "",
    },
    withConfiguredAlertIds: {
      type: "boolean",
      format: "",
    },
    operationResponseType: "SLOResponse",
  },
  "ServiceLevelObjectivesApi.V1.UpdateSLO": {
    sloId: {
      type: "string",
      format: "",
    },
    body: {
      type: "ServiceLevelObjective",
      format: "",
    },
    operationResponseType: "SLOListResponse",
  },
  "ServiceLevelObjectivesApi.V1.DeleteSLO": {
    sloId: {
      type: "string",
      format: "",
    },
    force: {
      type: "string",
      format: "",
    },
    operationResponseType: "SLODeleteResponse",
  },
  "ServiceLevelObjectivesApi.V1.GetSLOCorrections": {
    sloId: {
      type: "string",
      format: "",
    },
    operationResponseType: "SLOCorrectionListResponse",
  },
  "ServiceLevelObjectivesApi.V1.GetSLOHistory": {
    sloId: {
      type: "string",
      format: "",
    },
    fromTs: {
      type: "number",
      format: "int64",
    },
    toTs: {
      type: "number",
      format: "int64",
    },
    target: {
      type: "number",
      format: "double",
    },
    applyCorrection: {
      type: "boolean",
      format: "",
    },
    operationResponseType: "SLOHistoryResponse",
  },
  "ServiceLevelObjectiveCorrectionsApi.V1.ListSLOCorrection": {
    offset: {
      type: "number",
      format: "int64",
    },
    limit: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "SLOCorrectionListResponse",
  },
  "ServiceLevelObjectiveCorrectionsApi.V1.CreateSLOCorrection": {
    body: {
      type: "SLOCorrectionCreateRequest",
      format: "",
    },
    operationResponseType: "SLOCorrectionResponse",
  },
  "ServiceLevelObjectiveCorrectionsApi.V1.GetSLOCorrection": {
    sloCorrectionId: {
      type: "string",
      format: "",
    },
    operationResponseType: "SLOCorrectionResponse",
  },
  "ServiceLevelObjectiveCorrectionsApi.V1.DeleteSLOCorrection": {
    sloCorrectionId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "ServiceLevelObjectiveCorrectionsApi.V1.UpdateSLOCorrection": {
    sloCorrectionId: {
      type: "string",
      format: "",
    },
    body: {
      type: "SLOCorrectionUpdateRequest",
      format: "",
    },
    operationResponseType: "SLOCorrectionResponse",
  },
  "SyntheticsApi.V1.GetSyntheticsCIBatch": {
    batchId: {
      type: "string",
      format: "",
    },
    operationResponseType: "SyntheticsBatchDetails",
  },
  "SyntheticsApi.V1.ListLocations": {
    operationResponseType: "SyntheticsLocations",
  },
  "SyntheticsApi.V1.CreatePrivateLocation": {
    body: {
      type: "SyntheticsPrivateLocation",
      format: "",
    },
    operationResponseType: "SyntheticsPrivateLocationCreationResponse",
  },
  "SyntheticsApi.V1.GetPrivateLocation": {
    locationId: {
      type: "string",
      format: "",
    },
    operationResponseType: "SyntheticsPrivateLocation",
  },
  "SyntheticsApi.V1.UpdatePrivateLocation": {
    locationId: {
      type: "string",
      format: "",
    },
    body: {
      type: "SyntheticsPrivateLocation",
      format: "",
    },
    operationResponseType: "SyntheticsPrivateLocation",
  },
  "SyntheticsApi.V1.DeletePrivateLocation": {
    locationId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "SyntheticsApi.V1.GetSyntheticsDefaultLocations": {
    operationResponseType: "Array<string>",
  },
  "SyntheticsApi.V1.ListTests": {
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "SyntheticsListTestsResponse",
  },
  "SyntheticsApi.V1.CreateSyntheticsAPITest": {
    body: {
      type: "SyntheticsAPITest",
      format: "",
    },
    operationResponseType: "SyntheticsAPITest",
  },
  "SyntheticsApi.V1.GetAPITest": {
    publicId: {
      type: "string",
      format: "",
    },
    operationResponseType: "SyntheticsAPITest",
  },
  "SyntheticsApi.V1.UpdateAPITest": {
    publicId: {
      type: "string",
      format: "",
    },
    body: {
      type: "SyntheticsAPITest",
      format: "",
    },
    operationResponseType: "SyntheticsAPITest",
  },
  "SyntheticsApi.V1.CreateSyntheticsBrowserTest": {
    body: {
      type: "SyntheticsBrowserTest",
      format: "",
    },
    operationResponseType: "SyntheticsBrowserTest",
  },
  "SyntheticsApi.V1.GetBrowserTest": {
    publicId: {
      type: "string",
      format: "",
    },
    operationResponseType: "SyntheticsBrowserTest",
  },
  "SyntheticsApi.V1.UpdateBrowserTest": {
    publicId: {
      type: "string",
      format: "",
    },
    body: {
      type: "SyntheticsBrowserTest",
      format: "",
    },
    operationResponseType: "SyntheticsBrowserTest",
  },
  "SyntheticsApi.V1.GetBrowserTestLatestResults": {
    publicId: {
      type: "string",
      format: "",
    },
    fromTs: {
      type: "number",
      format: "int64",
    },
    toTs: {
      type: "number",
      format: "int64",
    },
    probeDc: {
      type: "Array<string>",
      format: "",
    },
    operationResponseType: "SyntheticsGetBrowserTestLatestResultsResponse",
  },
  "SyntheticsApi.V1.GetBrowserTestResult": {
    publicId: {
      type: "string",
      format: "",
    },
    resultId: {
      type: "string",
      format: "",
    },
    operationResponseType: "SyntheticsBrowserTestResultFull",
  },
  "SyntheticsApi.V1.DeleteTests": {
    body: {
      type: "SyntheticsDeleteTestsPayload",
      format: "",
    },
    operationResponseType: "SyntheticsDeleteTestsResponse",
  },
  "SyntheticsApi.V1.CreateSyntheticsMobileTest": {
    body: {
      type: "SyntheticsMobileTest",
      format: "",
    },
    operationResponseType: "SyntheticsMobileTest",
  },
  "SyntheticsApi.V1.GetMobileTest": {
    publicId: {
      type: "string",
      format: "",
    },
    operationResponseType: "SyntheticsMobileTest",
  },
  "SyntheticsApi.V1.UpdateMobileTest": {
    publicId: {
      type: "string",
      format: "",
    },
    body: {
      type: "SyntheticsMobileTest",
      format: "",
    },
    operationResponseType: "SyntheticsMobileTest",
  },
  "SyntheticsApi.V1.SearchTests": {
    text: {
      type: "string",
      format: "",
    },
    includeFullConfig: {
      type: "boolean",
      format: "",
    },
    facetsOnly: {
      type: "boolean",
      format: "",
    },
    start: {
      type: "number",
      format: "int64",
    },
    count: {
      type: "number",
      format: "int64",
    },
    sort: {
      type: "string",
      format: "",
    },
    operationResponseType: "SyntheticsListTestsResponse",
  },
  "SyntheticsApi.V1.TriggerTests": {
    body: {
      type: "SyntheticsTriggerBody",
      format: "",
    },
    operationResponseType: "SyntheticsTriggerCITestsResponse",
  },
  "SyntheticsApi.V1.TriggerCITests": {
    body: {
      type: "SyntheticsCITestBody",
      format: "",
    },
    operationResponseType: "SyntheticsTriggerCITestsResponse",
  },
  "SyntheticsApi.V1.FetchUptimes": {
    body: {
      type: "SyntheticsFetchUptimesPayload",
      format: "",
    },
    operationResponseType: "Array<SyntheticsTestUptime>",
  },
  "SyntheticsApi.V1.GetTest": {
    publicId: {
      type: "string",
      format: "",
    },
    operationResponseType: "SyntheticsTestDetailsWithoutSteps",
  },
  "SyntheticsApi.V1.PatchTest": {
    publicId: {
      type: "string",
      format: "",
    },
    body: {
      type: "SyntheticsPatchTestBody",
      format: "",
    },
    operationResponseType: "SyntheticsTestDetails",
  },
  "SyntheticsApi.V1.GetAPITestLatestResults": {
    publicId: {
      type: "string",
      format: "",
    },
    fromTs: {
      type: "number",
      format: "int64",
    },
    toTs: {
      type: "number",
      format: "int64",
    },
    probeDc: {
      type: "Array<string>",
      format: "",
    },
    operationResponseType: "SyntheticsGetAPITestLatestResultsResponse",
  },
  "SyntheticsApi.V1.GetAPITestResult": {
    publicId: {
      type: "string",
      format: "",
    },
    resultId: {
      type: "string",
      format: "",
    },
    operationResponseType: "SyntheticsAPITestResultFull",
  },
  "SyntheticsApi.V1.UpdateTestPauseStatus": {
    publicId: {
      type: "string",
      format: "",
    },
    body: {
      type: "SyntheticsUpdateTestPauseStatusPayload",
      format: "",
    },
    operationResponseType: "boolean",
  },
  "SyntheticsApi.V1.ListGlobalVariables": {
    operationResponseType: "SyntheticsListGlobalVariablesResponse",
  },
  "SyntheticsApi.V1.CreateGlobalVariable": {
    body: {
      type: "SyntheticsGlobalVariableRequest",
      format: "",
    },
    operationResponseType: "SyntheticsGlobalVariable",
  },
  "SyntheticsApi.V1.GetGlobalVariable": {
    variableId: {
      type: "string",
      format: "",
    },
    operationResponseType: "SyntheticsGlobalVariable",
  },
  "SyntheticsApi.V1.EditGlobalVariable": {
    variableId: {
      type: "string",
      format: "",
    },
    body: {
      type: "SyntheticsGlobalVariableRequest",
      format: "",
    },
    operationResponseType: "SyntheticsGlobalVariable",
  },
  "SyntheticsApi.V1.DeleteGlobalVariable": {
    variableId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "TagsApi.V1.ListHostTags": {
    source: {
      type: "string",
      format: "",
    },
    operationResponseType: "TagToHosts",
  },
  "TagsApi.V1.GetHostTags": {
    hostName: {
      type: "string",
      format: "",
    },
    source: {
      type: "string",
      format: "",
    },
    operationResponseType: "HostTags",
  },
  "TagsApi.V1.UpdateHostTags": {
    hostName: {
      type: "string",
      format: "",
    },
    source: {
      type: "string",
      format: "",
    },
    body: {
      type: "HostTags",
      format: "",
    },
    operationResponseType: "HostTags",
  },
  "TagsApi.V1.CreateHostTags": {
    hostName: {
      type: "string",
      format: "",
    },
    source: {
      type: "string",
      format: "",
    },
    body: {
      type: "HostTags",
      format: "",
    },
    operationResponseType: "HostTags",
  },
  "TagsApi.V1.DeleteHostTags": {
    hostName: {
      type: "string",
      format: "",
    },
    source: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "UsersApi.V1.ListUsers": {
    operationResponseType: "UserListResponse",
  },
  "UsersApi.V1.CreateUser": {
    body: {
      type: "User",
      format: "",
    },
    operationResponseType: "UserResponse",
  },
  "UsersApi.V1.GetUser": {
    userHandle: {
      type: "string",
      format: "",
    },
    operationResponseType: "UserResponse",
  },
  "UsersApi.V1.UpdateUser": {
    userHandle: {
      type: "string",
      format: "",
    },
    body: {
      type: "User",
      format: "",
    },
    operationResponseType: "UserResponse",
  },
  "UsersApi.V1.DisableUser": {
    userHandle: {
      type: "string",
      format: "",
    },
    operationResponseType: "UserDisableResponse",
  },
  "AuthenticationApi.V1.Validate": {
    operationResponseType: "AuthenticationValidationResponse",
  },
  "FleetAutomationApi.V2.ListFleetAgentVersions": {
    operationResponseType: "FleetAgentVersionsResponse",
  },
  "FleetAutomationApi.V2.ListFleetAgents": {
    pageNumber: {
      type: "number",
      format: "int64",
    },
    pageSize: {
      type: "number",
      format: "int64",
    },
    sortAttribute: {
      type: "string",
      format: "",
    },
    sortDescending: {
      type: "boolean",
      format: "",
    },
    tags: {
      type: "string",
      format: "",
    },
    filter: {
      type: "string",
      format: "",
    },
    operationResponseType: "FleetAgentsResponse",
  },
  "FleetAutomationApi.V2.GetFleetAgentInfo": {
    agentKey: {
      type: "string",
      format: "",
    },
    operationResponseType: "FleetAgentInfoResponse",
  },
  "FleetAutomationApi.V2.ListFleetDeployments": {
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageOffset: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "FleetDeploymentsResponse",
  },
  "FleetAutomationApi.V2.CreateFleetDeploymentConfigure": {
    body: {
      type: "FleetDeploymentConfigureCreateRequest",
      format: "",
    },
    operationResponseType: "FleetDeploymentResponse",
  },
  "FleetAutomationApi.V2.CreateFleetDeploymentUpgrade": {
    body: {
      type: "FleetDeploymentPackageUpgradeCreateRequest",
      format: "",
    },
    operationResponseType: "FleetDeploymentResponse",
  },
  "FleetAutomationApi.V2.GetFleetDeployment": {
    deploymentId: {
      type: "string",
      format: "",
    },
    limit: {
      type: "number",
      format: "int64",
    },
    page: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "FleetDeploymentResponse",
  },
  "FleetAutomationApi.V2.CancelFleetDeployment": {
    deploymentId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "FleetAutomationApi.V2.ListFleetSchedules": {
    operationResponseType: "FleetSchedulesResponse",
  },
  "FleetAutomationApi.V2.CreateFleetSchedule": {
    body: {
      type: "FleetScheduleCreateRequest",
      format: "",
    },
    operationResponseType: "FleetScheduleResponse",
  },
  "FleetAutomationApi.V2.GetFleetSchedule": {
    id: {
      type: "string",
      format: "",
    },
    operationResponseType: "FleetScheduleResponse",
  },
  "FleetAutomationApi.V2.DeleteFleetSchedule": {
    id: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "FleetAutomationApi.V2.UpdateFleetSchedule": {
    id: {
      type: "string",
      format: "",
    },
    body: {
      type: "FleetSchedulePatchRequest",
      format: "",
    },
    operationResponseType: "FleetScheduleResponse",
  },
  "FleetAutomationApi.V2.TriggerFleetSchedule": {
    id: {
      type: "string",
      format: "",
    },
    operationResponseType: "FleetDeploymentResponse",
  },
  "ActionsDatastoresApi.V2.ListDatastores": {
    operationResponseType: "DatastoreArray",
  },
  "ActionsDatastoresApi.V2.CreateDatastore": {
    body: {
      type: "CreateAppsDatastoreRequest",
      format: "",
    },
    operationResponseType: "CreateAppsDatastoreResponse",
  },
  "ActionsDatastoresApi.V2.GetDatastore": {
    datastoreId: {
      type: "string",
      format: "",
    },
    operationResponseType: "Datastore",
  },
  "ActionsDatastoresApi.V2.DeleteDatastore": {
    datastoreId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "ActionsDatastoresApi.V2.UpdateDatastore": {
    datastoreId: {
      type: "string",
      format: "",
    },
    body: {
      type: "UpdateAppsDatastoreRequest",
      format: "",
    },
    operationResponseType: "Datastore",
  },
  "ActionsDatastoresApi.V2.ListDatastoreItems": {
    datastoreId: {
      type: "string",
      format: "",
    },
    filter: {
      type: "string",
      format: "",
    },
    itemKey: {
      type: "string",
      format: "",
    },
    pageLimit: {
      type: "number",
      format: "int64",
    },
    pageOffset: {
      type: "number",
      format: "int64",
    },
    sort: {
      type: "string",
      format: "",
    },
    operationResponseType: "ItemApiPayloadArray",
  },
  "ActionsDatastoresApi.V2.DeleteDatastoreItem": {
    datastoreId: {
      type: "string",
      format: "",
    },
    body: {
      type: "DeleteAppsDatastoreItemRequest",
      format: "",
    },
    operationResponseType: "DeleteAppsDatastoreItemResponse",
  },
  "ActionsDatastoresApi.V2.UpdateDatastoreItem": {
    datastoreId: {
      type: "string",
      format: "",
    },
    body: {
      type: "UpdateAppsDatastoreItemRequest",
      format: "",
    },
    operationResponseType: "ItemApiPayload",
  },
  "ActionsDatastoresApi.V2.BulkWriteDatastoreItems": {
    datastoreId: {
      type: "string",
      format: "",
    },
    body: {
      type: "BulkPutAppsDatastoreItemsRequest",
      format: "",
    },
    operationResponseType: "PutAppsDatastoreItemResponseArray",
  },
  "ActionsDatastoresApi.V2.BulkDeleteDatastoreItems": {
    datastoreId: {
      type: "string",
      format: "",
    },
    body: {
      type: "BulkDeleteAppsDatastoreItemsRequest",
      format: "",
    },
    operationResponseType: "DeleteAppsDatastoreItemResponseArray",
  },
  "ActionConnectionApi.V2.ListAppKeyRegistrations": {
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "ListAppKeyRegistrationsResponse",
  },
  "ActionConnectionApi.V2.GetAppKeyRegistration": {
    appKeyId: {
      type: "string",
      format: "",
    },
    operationResponseType: "GetAppKeyRegistrationResponse",
  },
  "ActionConnectionApi.V2.RegisterAppKey": {
    appKeyId: {
      type: "string",
      format: "",
    },
    operationResponseType: "RegisterAppKeyResponse",
  },
  "ActionConnectionApi.V2.UnregisterAppKey": {
    appKeyId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "ActionConnectionApi.V2.CreateActionConnection": {
    body: {
      type: "CreateActionConnectionRequest",
      format: "",
    },
    operationResponseType: "CreateActionConnectionResponse",
  },
  "ActionConnectionApi.V2.GetActionConnection": {
    connectionId: {
      type: "string",
      format: "",
    },
    operationResponseType: "GetActionConnectionResponse",
  },
  "ActionConnectionApi.V2.DeleteActionConnection": {
    connectionId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "ActionConnectionApi.V2.UpdateActionConnection": {
    connectionId: {
      type: "string",
      format: "",
    },
    body: {
      type: "UpdateActionConnectionRequest",
      format: "",
    },
    operationResponseType: "UpdateActionConnectionResponse",
  },
  "AgentlessScanningApi.V2.ListAwsScanOptions": {
    operationResponseType: "AwsScanOptionsListResponse",
  },
  "AgentlessScanningApi.V2.CreateAwsScanOptions": {
    body: {
      type: "AwsScanOptionsCreateRequest",
      format: "",
    },
    operationResponseType: "AwsScanOptionsResponse",
  },
  "AgentlessScanningApi.V2.GetAwsScanOptions": {
    accountId: {
      type: "string",
      format: "",
    },
    operationResponseType: "AwsScanOptionsResponse",
  },
  "AgentlessScanningApi.V2.DeleteAwsScanOptions": {
    accountId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "AgentlessScanningApi.V2.UpdateAwsScanOptions": {
    accountId: {
      type: "string",
      format: "",
    },
    body: {
      type: "AwsScanOptionsUpdateRequest",
      format: "",
    },
    operationResponseType: "{}",
  },
  "AgentlessScanningApi.V2.ListAzureScanOptions": {
    operationResponseType: "AzureScanOptionsArray",
  },
  "AgentlessScanningApi.V2.CreateAzureScanOptions": {
    body: {
      type: "AzureScanOptions",
      format: "",
    },
    operationResponseType: "AzureScanOptions",
  },
  "AgentlessScanningApi.V2.GetAzureScanOptions": {
    subscriptionId: {
      type: "string",
      format: "",
    },
    operationResponseType: "AzureScanOptions",
  },
  "AgentlessScanningApi.V2.DeleteAzureScanOptions": {
    subscriptionId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "AgentlessScanningApi.V2.UpdateAzureScanOptions": {
    subscriptionId: {
      type: "string",
      format: "",
    },
    body: {
      type: "AzureScanOptionsInputUpdate",
      format: "",
    },
    operationResponseType: "AzureScanOptions",
  },
  "AgentlessScanningApi.V2.ListGcpScanOptions": {
    operationResponseType: "GcpScanOptionsArray",
  },
  "AgentlessScanningApi.V2.CreateGcpScanOptions": {
    body: {
      type: "GcpScanOptions",
      format: "",
    },
    operationResponseType: "GcpScanOptions",
  },
  "AgentlessScanningApi.V2.GetGcpScanOptions": {
    projectId: {
      type: "string",
      format: "",
    },
    operationResponseType: "GcpScanOptions",
  },
  "AgentlessScanningApi.V2.DeleteGcpScanOptions": {
    projectId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "AgentlessScanningApi.V2.UpdateGcpScanOptions": {
    projectId: {
      type: "string",
      format: "",
    },
    body: {
      type: "GcpScanOptionsInputUpdate",
      format: "",
    },
    operationResponseType: "GcpScanOptions",
  },
  "AgentlessScanningApi.V2.ListAwsOnDemandTasks": {
    operationResponseType: "AwsOnDemandListResponse",
  },
  "AgentlessScanningApi.V2.CreateAwsOnDemandTask": {
    body: {
      type: "AwsOnDemandCreateRequest",
      format: "",
    },
    operationResponseType: "AwsOnDemandResponse",
  },
  "AgentlessScanningApi.V2.GetAwsOnDemandTask": {
    taskId: {
      type: "string",
      format: "",
    },
    operationResponseType: "AwsOnDemandResponse",
  },
  "KeyManagementApi.V2.ListAPIKeys": {
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    sort: {
      type: "APIKeysSort",
      format: "",
    },
    filter: {
      type: "string",
      format: "",
    },
    filterCreatedAtStart: {
      type: "string",
      format: "",
    },
    filterCreatedAtEnd: {
      type: "string",
      format: "",
    },
    filterModifiedAtStart: {
      type: "string",
      format: "",
    },
    filterModifiedAtEnd: {
      type: "string",
      format: "",
    },
    include: {
      type: "string",
      format: "",
    },
    filterRemoteConfigReadEnabled: {
      type: "boolean",
      format: "",
    },
    filterCategory: {
      type: "string",
      format: "",
    },
    operationResponseType: "APIKeysResponse",
  },
  "KeyManagementApi.V2.CreateAPIKey": {
    body: {
      type: "APIKeyCreateRequest",
      format: "",
    },
    operationResponseType: "APIKeyResponse",
  },
  "KeyManagementApi.V2.GetAPIKey": {
    apiKeyId: {
      type: "string",
      format: "",
    },
    include: {
      type: "string",
      format: "",
    },
    operationResponseType: "APIKeyResponse",
  },
  "KeyManagementApi.V2.DeleteAPIKey": {
    apiKeyId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "KeyManagementApi.V2.UpdateAPIKey": {
    apiKeyId: {
      type: "string",
      format: "",
    },
    body: {
      type: "APIKeyUpdateRequest",
      format: "",
    },
    operationResponseType: "APIKeyResponse",
  },
  "KeyManagementApi.V2.ListApplicationKeys": {
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    sort: {
      type: "ApplicationKeysSort",
      format: "",
    },
    filter: {
      type: "string",
      format: "",
    },
    filterCreatedAtStart: {
      type: "string",
      format: "",
    },
    filterCreatedAtEnd: {
      type: "string",
      format: "",
    },
    include: {
      type: "string",
      format: "",
    },
    operationResponseType: "ListApplicationKeysResponse",
  },
  "KeyManagementApi.V2.GetApplicationKey": {
    appKeyId: {
      type: "string",
      format: "",
    },
    include: {
      type: "string",
      format: "",
    },
    operationResponseType: "ApplicationKeyResponse",
  },
  "KeyManagementApi.V2.DeleteApplicationKey": {
    appKeyId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "KeyManagementApi.V2.UpdateApplicationKey": {
    appKeyId: {
      type: "string",
      format: "",
    },
    body: {
      type: "ApplicationKeyUpdateRequest",
      format: "",
    },
    operationResponseType: "ApplicationKeyResponse",
  },
  "KeyManagementApi.V2.ListCurrentUserApplicationKeys": {
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    sort: {
      type: "ApplicationKeysSort",
      format: "",
    },
    filter: {
      type: "string",
      format: "",
    },
    filterCreatedAtStart: {
      type: "string",
      format: "",
    },
    filterCreatedAtEnd: {
      type: "string",
      format: "",
    },
    include: {
      type: "string",
      format: "",
    },
    operationResponseType: "ListApplicationKeysResponse",
  },
  "KeyManagementApi.V2.CreateCurrentUserApplicationKey": {
    body: {
      type: "ApplicationKeyCreateRequest",
      format: "",
    },
    operationResponseType: "ApplicationKeyResponse",
  },
  "KeyManagementApi.V2.GetCurrentUserApplicationKey": {
    appKeyId: {
      type: "string",
      format: "",
    },
    operationResponseType: "ApplicationKeyResponse",
  },
  "KeyManagementApi.V2.DeleteCurrentUserApplicationKey": {
    appKeyId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "KeyManagementApi.V2.UpdateCurrentUserApplicationKey": {
    appKeyId: {
      type: "string",
      format: "",
    },
    body: {
      type: "ApplicationKeyUpdateRequest",
      format: "",
    },
    operationResponseType: "ApplicationKeyResponse",
  },
  "APIManagementApi.V2.ListAPIs": {
    query: {
      type: "string",
      format: "",
    },
    pageLimit: {
      type: "number",
      format: "int64",
    },
    pageOffset: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "ListAPIsResponse",
  },
  "APIManagementApi.V2.DeleteOpenAPI": {
    id: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "APIManagementApi.V2.GetOpenAPI": {
    id: {
      type: "string",
      format: "",
    },
    operationResponseType: "HttpFile",
  },
  "APIManagementApi.V2.UpdateOpenAPI": {
    id: {
      type: "string",
      format: "",
    },
    openapiSpecFile: {
      type: "HttpFile",
      format: "binary",
    },
    operationResponseType: "UpdateOpenAPIResponse",
  },
  "APIManagementApi.V2.CreateOpenAPI": {
    openapiSpecFile: {
      type: "HttpFile",
      format: "binary",
    },
    operationResponseType: "CreateOpenAPIResponse",
  },
  "SpansMetricsApi.V2.ListSpansMetrics": {
    operationResponseType: "SpansMetricsResponse",
  },
  "SpansMetricsApi.V2.CreateSpansMetric": {
    body: {
      type: "SpansMetricCreateRequest",
      format: "",
    },
    operationResponseType: "SpansMetricResponse",
  },
  "SpansMetricsApi.V2.GetSpansMetric": {
    metricId: {
      type: "string",
      format: "",
    },
    operationResponseType: "SpansMetricResponse",
  },
  "SpansMetricsApi.V2.DeleteSpansMetric": {
    metricId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "SpansMetricsApi.V2.UpdateSpansMetric": {
    metricId: {
      type: "string",
      format: "",
    },
    body: {
      type: "SpansMetricUpdateRequest",
      format: "",
    },
    operationResponseType: "SpansMetricResponse",
  },
  "APMRetentionFiltersApi.V2.ListApmRetentionFilters": {
    operationResponseType: "RetentionFiltersResponse",
  },
  "APMRetentionFiltersApi.V2.CreateApmRetentionFilter": {
    body: {
      type: "RetentionFilterCreateRequest",
      format: "",
    },
    operationResponseType: "RetentionFilterCreateResponse",
  },
  "APMRetentionFiltersApi.V2.ReorderApmRetentionFilters": {
    body: {
      type: "ReorderRetentionFiltersRequest",
      format: "",
    },
    operationResponseType: "{}",
  },
  "APMRetentionFiltersApi.V2.GetApmRetentionFilter": {
    filterId: {
      type: "string",
      format: "",
    },
    operationResponseType: "RetentionFilterResponse",
  },
  "APMRetentionFiltersApi.V2.UpdateApmRetentionFilter": {
    filterId: {
      type: "string",
      format: "",
    },
    body: {
      type: "RetentionFilterUpdateRequest",
      format: "",
    },
    operationResponseType: "RetentionFilterResponse",
  },
  "APMRetentionFiltersApi.V2.DeleteApmRetentionFilter": {
    filterId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "APMApi.V2.GetServiceList": {
    operationResponseType: "ServiceList",
  },
  "AppBuilderApi.V2.ListApps": {
    limit: {
      type: "number",
      format: "int64",
    },
    page: {
      type: "number",
      format: "int64",
    },
    filterUserName: {
      type: "string",
      format: "",
    },
    filterUserUuid: {
      type: "string",
      format: "uuid",
    },
    filterName: {
      type: "string",
      format: "",
    },
    filterQuery: {
      type: "string",
      format: "",
    },
    filterDeployed: {
      type: "boolean",
      format: "",
    },
    filterTags: {
      type: "string",
      format: "",
    },
    filterFavorite: {
      type: "boolean",
      format: "",
    },
    filterSelfService: {
      type: "boolean",
      format: "",
    },
    sort: {
      type: "Array<AppsSortField>",
      format: "",
    },
    operationResponseType: "ListAppsResponse",
  },
  "AppBuilderApi.V2.CreateApp": {
    body: {
      type: "CreateAppRequest",
      format: "",
    },
    operationResponseType: "CreateAppResponse",
  },
  "AppBuilderApi.V2.DeleteApps": {
    body: {
      type: "DeleteAppsRequest",
      format: "",
    },
    operationResponseType: "DeleteAppsResponse",
  },
  "AppBuilderApi.V2.GetApp": {
    appId: {
      type: "string",
      format: "uuid",
    },
    version: {
      type: "string",
      format: "",
    },
    operationResponseType: "GetAppResponse",
  },
  "AppBuilderApi.V2.DeleteApp": {
    appId: {
      type: "string",
      format: "uuid",
    },
    operationResponseType: "DeleteAppResponse",
  },
  "AppBuilderApi.V2.UpdateApp": {
    appId: {
      type: "string",
      format: "uuid",
    },
    body: {
      type: "UpdateAppRequest",
      format: "",
    },
    operationResponseType: "UpdateAppResponse",
  },
  "AppBuilderApi.V2.PublishApp": {
    appId: {
      type: "string",
      format: "uuid",
    },
    operationResponseType: "PublishAppResponse",
  },
  "AppBuilderApi.V2.UnpublishApp": {
    appId: {
      type: "string",
      format: "uuid",
    },
    operationResponseType: "UnpublishAppResponse",
  },
  "AuditApi.V2.ListAuditLogs": {
    filterQuery: {
      type: "string",
      format: "",
    },
    filterFrom: {
      type: "Date",
      format: "date-time",
    },
    filterTo: {
      type: "Date",
      format: "date-time",
    },
    sort: {
      type: "AuditLogsSort",
      format: "",
    },
    pageCursor: {
      type: "string",
      format: "",
    },
    pageLimit: {
      type: "number",
      format: "int32",
    },
    operationResponseType: "AuditLogsEventsResponse",
  },
  "AuditApi.V2.SearchAuditLogs": {
    body: {
      type: "AuditLogsSearchEventsRequest",
      format: "",
    },
    operationResponseType: "AuditLogsEventsResponse",
  },
  "AuthNMappingsApi.V2.ListAuthNMappings": {
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    sort: {
      type: "AuthNMappingsSort",
      format: "",
    },
    filter: {
      type: "string",
      format: "",
    },
    resourceType: {
      type: "AuthNMappingResourceType",
      format: "",
    },
    operationResponseType: "AuthNMappingsResponse",
  },
  "AuthNMappingsApi.V2.CreateAuthNMapping": {
    body: {
      type: "AuthNMappingCreateRequest",
      format: "",
    },
    operationResponseType: "AuthNMappingResponse",
  },
  "AuthNMappingsApi.V2.GetAuthNMapping": {
    authnMappingId: {
      type: "string",
      format: "",
    },
    operationResponseType: "AuthNMappingResponse",
  },
  "AuthNMappingsApi.V2.DeleteAuthNMapping": {
    authnMappingId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "AuthNMappingsApi.V2.UpdateAuthNMapping": {
    authnMappingId: {
      type: "string",
      format: "",
    },
    body: {
      type: "AuthNMappingUpdateRequest",
      format: "",
    },
    operationResponseType: "AuthNMappingResponse",
  },
  "CaseManagementApi.V2.SearchCases": {
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    sortField: {
      type: "CaseSortableField",
      format: "",
    },
    filter: {
      type: "string",
      format: "",
    },
    sortAsc: {
      type: "boolean",
      format: "",
    },
    operationResponseType: "CasesResponse",
  },
  "CaseManagementApi.V2.CreateCase": {
    body: {
      type: "CaseCreateRequest",
      format: "",
    },
    operationResponseType: "CaseResponse",
  },
  "CaseManagementApi.V2.GetProjects": {
    operationResponseType: "ProjectsResponse",
  },
  "CaseManagementApi.V2.CreateProject": {
    body: {
      type: "ProjectCreateRequest",
      format: "",
    },
    operationResponseType: "ProjectResponse",
  },
  "CaseManagementApi.V2.GetProject": {
    projectId: {
      type: "string",
      format: "",
    },
    operationResponseType: "ProjectResponse",
  },
  "CaseManagementApi.V2.DeleteProject": {
    projectId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "CaseManagementApi.V2.GetCase": {
    caseId: {
      type: "string",
      format: "",
    },
    operationResponseType: "CaseResponse",
  },
  "CaseManagementApi.V2.ArchiveCase": {
    caseId: {
      type: "string",
      format: "",
    },
    body: {
      type: "CaseEmptyRequest",
      format: "",
    },
    operationResponseType: "CaseResponse",
  },
  "CaseManagementApi.V2.AssignCase": {
    caseId: {
      type: "string",
      format: "",
    },
    body: {
      type: "CaseAssignRequest",
      format: "",
    },
    operationResponseType: "CaseResponse",
  },
  "CaseManagementApi.V2.UpdateAttributes": {
    caseId: {
      type: "string",
      format: "",
    },
    body: {
      type: "CaseUpdateAttributesRequest",
      format: "",
    },
    operationResponseType: "CaseResponse",
  },
  "CaseManagementApi.V2.CommentCase": {
    caseId: {
      type: "string",
      format: "",
    },
    body: {
      type: "CaseCommentRequest",
      format: "",
    },
    operationResponseType: "TimelineResponse",
  },
  "CaseManagementApi.V2.DeleteCaseComment": {
    caseId: {
      type: "string",
      format: "",
    },
    cellId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "CaseManagementApi.V2.UpdateCaseCustomAttribute": {
    caseId: {
      type: "string",
      format: "",
    },
    customAttributeKey: {
      type: "string",
      format: "",
    },
    body: {
      type: "CaseUpdateCustomAttributeRequest",
      format: "",
    },
    operationResponseType: "CaseResponse",
  },
  "CaseManagementApi.V2.DeleteCaseCustomAttribute": {
    caseId: {
      type: "string",
      format: "",
    },
    customAttributeKey: {
      type: "string",
      format: "",
    },
    operationResponseType: "CaseResponse",
  },
  "CaseManagementApi.V2.UpdateCaseDescription": {
    caseId: {
      type: "string",
      format: "",
    },
    body: {
      type: "CaseUpdateDescriptionRequest",
      format: "",
    },
    operationResponseType: "CaseResponse",
  },
  "CaseManagementApi.V2.UpdatePriority": {
    caseId: {
      type: "string",
      format: "",
    },
    body: {
      type: "CaseUpdatePriorityRequest",
      format: "",
    },
    operationResponseType: "CaseResponse",
  },
  "CaseManagementApi.V2.UpdateStatus": {
    caseId: {
      type: "string",
      format: "",
    },
    body: {
      type: "CaseUpdateStatusRequest",
      format: "",
    },
    operationResponseType: "CaseResponse",
  },
  "CaseManagementApi.V2.UpdateCaseTitle": {
    caseId: {
      type: "string",
      format: "",
    },
    body: {
      type: "CaseUpdateTitleRequest",
      format: "",
    },
    operationResponseType: "CaseResponse",
  },
  "CaseManagementApi.V2.UnarchiveCase": {
    caseId: {
      type: "string",
      format: "",
    },
    body: {
      type: "CaseEmptyRequest",
      format: "",
    },
    operationResponseType: "CaseResponse",
  },
  "CaseManagementApi.V2.UnassignCase": {
    caseId: {
      type: "string",
      format: "",
    },
    body: {
      type: "CaseEmptyRequest",
      format: "",
    },
    operationResponseType: "CaseResponse",
  },
  "CaseManagementTypeApi.V2.GetAllCaseTypes": {
    operationResponseType: "CaseTypesResponse",
  },
  "CaseManagementTypeApi.V2.CreateCaseType": {
    body: {
      type: "CaseTypeCreateRequest",
      format: "",
    },
    operationResponseType: "CaseTypeResponse",
  },
  "CaseManagementTypeApi.V2.DeleteCaseType": {
    caseTypeId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "CaseManagementAttributeApi.V2.GetAllCustomAttributes": {
    operationResponseType: "CustomAttributeConfigsResponse",
  },
  "CaseManagementAttributeApi.V2.GetAllCustomAttributeConfigsByCaseType": {
    caseTypeId: {
      type: "string",
      format: "",
    },
    operationResponseType: "CustomAttributeConfigsResponse",
  },
  "CaseManagementAttributeApi.V2.CreateCustomAttributeConfig": {
    caseTypeId: {
      type: "string",
      format: "",
    },
    body: {
      type: "CustomAttributeConfigCreateRequest",
      format: "",
    },
    operationResponseType: "CustomAttributeConfigResponse",
  },
  "CaseManagementAttributeApi.V2.DeleteCustomAttributeConfig": {
    caseTypeId: {
      type: "string",
      format: "",
    },
    customAttributeId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "SoftwareCatalogApi.V2.ListCatalogEntity": {
    pageOffset: {
      type: "number",
      format: "int64",
    },
    pageLimit: {
      type: "number",
      format: "int64",
    },
    filterId: {
      type: "string",
      format: "",
    },
    filterRef: {
      type: "string",
      format: "",
    },
    filterName: {
      type: "string",
      format: "",
    },
    filterKind: {
      type: "string",
      format: "",
    },
    filterOwner: {
      type: "string",
      format: "",
    },
    filterRelationType: {
      type: "RelationType",
      format: "",
    },
    filterExcludeSnapshot: {
      type: "string",
      format: "",
    },
    include: {
      type: "IncludeType",
      format: "",
    },
    includeDiscovered: {
      type: "boolean",
      format: "",
    },
    operationResponseType: "ListEntityCatalogResponse",
  },
  "SoftwareCatalogApi.V2.UpsertCatalogEntity": {
    body: {
      type: "UpsertCatalogEntityRequest",
      format: "",
    },
    operationResponseType: "UpsertCatalogEntityResponse",
  },
  "SoftwareCatalogApi.V2.PreviewCatalogEntities": {
    operationResponseType: "EntityResponseArray",
  },
  "SoftwareCatalogApi.V2.DeleteCatalogEntity": {
    entityId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "SoftwareCatalogApi.V2.ListCatalogKind": {
    pageOffset: {
      type: "number",
      format: "int64",
    },
    pageLimit: {
      type: "number",
      format: "int64",
    },
    filterId: {
      type: "string",
      format: "",
    },
    filterName: {
      type: "string",
      format: "",
    },
    operationResponseType: "ListKindCatalogResponse",
  },
  "SoftwareCatalogApi.V2.UpsertCatalogKind": {
    body: {
      type: "UpsertCatalogKindRequest",
      format: "",
    },
    operationResponseType: "UpsertCatalogKindResponse",
  },
  "SoftwareCatalogApi.V2.DeleteCatalogKind": {
    kindId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "SoftwareCatalogApi.V2.ListCatalogRelation": {
    pageOffset: {
      type: "number",
      format: "int64",
    },
    pageLimit: {
      type: "number",
      format: "int64",
    },
    filterType: {
      type: "RelationType",
      format: "",
    },
    filterFromRef: {
      type: "string",
      format: "",
    },
    filterToRef: {
      type: "string",
      format: "",
    },
    include: {
      type: "RelationIncludeType",
      format: "",
    },
    includeDiscovered: {
      type: "boolean",
      format: "",
    },
    operationResponseType: "ListRelationCatalogResponse",
  },
  "CIVisibilityPipelinesApi.V2.CreateCIAppPipelineEvent": {
    body: {
      type: "CIAppCreatePipelineEventRequest",
      format: "",
    },
    operationResponseType: "any",
  },
  "CIVisibilityPipelinesApi.V2.AggregateCIAppPipelineEvents": {
    body: {
      type: "CIAppPipelinesAggregateRequest",
      format: "",
    },
    operationResponseType: "CIAppPipelinesAnalyticsAggregateResponse",
  },
  "CIVisibilityPipelinesApi.V2.ListCIAppPipelineEvents": {
    filterQuery: {
      type: "string",
      format: "",
    },
    filterFrom: {
      type: "Date",
      format: "date-time",
    },
    filterTo: {
      type: "Date",
      format: "date-time",
    },
    sort: {
      type: "CIAppSort",
      format: "",
    },
    pageCursor: {
      type: "string",
      format: "",
    },
    pageLimit: {
      type: "number",
      format: "int32",
    },
    operationResponseType: "CIAppPipelineEventsResponse",
  },
  "CIVisibilityPipelinesApi.V2.SearchCIAppPipelineEvents": {
    body: {
      type: "CIAppPipelineEventsRequest",
      format: "",
    },
    operationResponseType: "CIAppPipelineEventsResponse",
  },
  "CIVisibilityTestsApi.V2.AggregateCIAppTestEvents": {
    body: {
      type: "CIAppTestsAggregateRequest",
      format: "",
    },
    operationResponseType: "CIAppTestsAnalyticsAggregateResponse",
  },
  "CIVisibilityTestsApi.V2.ListCIAppTestEvents": {
    filterQuery: {
      type: "string",
      format: "",
    },
    filterFrom: {
      type: "Date",
      format: "date-time",
    },
    filterTo: {
      type: "Date",
      format: "date-time",
    },
    sort: {
      type: "CIAppSort",
      format: "",
    },
    pageCursor: {
      type: "string",
      format: "",
    },
    pageLimit: {
      type: "number",
      format: "int32",
    },
    operationResponseType: "CIAppTestEventsResponse",
  },
  "CIVisibilityTestsApi.V2.SearchCIAppTestEvents": {
    body: {
      type: "CIAppTestEventsRequest",
      format: "",
    },
    operationResponseType: "CIAppTestEventsResponse",
  },
  "SecurityMonitoringApi.V2.CreateCustomFramework": {
    body: {
      type: "CreateCustomFrameworkRequest",
      format: "",
    },
    operationResponseType: "CreateCustomFrameworkResponse",
  },
  "SecurityMonitoringApi.V2.GetCustomFramework": {
    handle: {
      type: "string",
      format: "",
    },
    version: {
      type: "string",
      format: "",
    },
    operationResponseType: "GetCustomFrameworkResponse",
  },
  "SecurityMonitoringApi.V2.UpdateCustomFramework": {
    handle: {
      type: "string",
      format: "",
    },
    version: {
      type: "string",
      format: "",
    },
    body: {
      type: "UpdateCustomFrameworkRequest",
      format: "",
    },
    operationResponseType: "UpdateCustomFrameworkResponse",
  },
  "SecurityMonitoringApi.V2.DeleteCustomFramework": {
    handle: {
      type: "string",
      format: "",
    },
    version: {
      type: "string",
      format: "",
    },
    operationResponseType: "DeleteCustomFrameworkResponse",
  },
  "SecurityMonitoringApi.V2.GetResourceEvaluationFilters": {
    cloudProvider: {
      type: "string",
      format: "",
    },
    accountId: {
      type: "string",
      format: "",
    },
    skipCache: {
      type: "boolean",
      format: "",
    },
    operationResponseType: "GetResourceEvaluationFiltersResponse",
  },
  "SecurityMonitoringApi.V2.UpdateResourceEvaluationFilters": {
    body: {
      type: "UpdateResourceEvaluationFiltersRequest",
      format: "",
    },
    operationResponseType: "UpdateResourceEvaluationFiltersResponse",
  },
  "SecurityMonitoringApi.V2.ListFindings": {
    pageLimit: {
      type: "number",
      format: "int64",
    },
    snapshotTimestamp: {
      type: "number",
      format: "int64",
    },
    pageCursor: {
      type: "string",
      format: "",
    },
    filterTags: {
      type: "string",
      format: "",
    },
    filterEvaluationChangedAt: {
      type: "string",
      format: "",
    },
    filterMuted: {
      type: "boolean",
      format: "",
    },
    filterRuleId: {
      type: "string",
      format: "",
    },
    filterRuleName: {
      type: "string",
      format: "",
    },
    filterResourceType: {
      type: "string",
      format: "",
    },
    filterResourceId: {
      type: "string",
      format: "",
    },
    filterDiscoveryTimestamp: {
      type: "string",
      format: "",
    },
    filterEvaluation: {
      type: "FindingEvaluation",
      format: "",
    },
    filterStatus: {
      type: "FindingStatus",
      format: "",
    },
    filterVulnerabilityType: {
      type: "Array<FindingVulnerabilityType>",
      format: "",
    },
    detailedFindings: {
      type: "boolean",
      format: "",
    },
    operationResponseType: "ListFindingsResponse",
  },
  "SecurityMonitoringApi.V2.MuteFindings": {
    body: {
      type: "BulkMuteFindingsRequest",
      format: "",
    },
    operationResponseType: "BulkMuteFindingsResponse",
  },
  "SecurityMonitoringApi.V2.GetFinding": {
    findingId: {
      type: "string",
      format: "",
    },
    snapshotTimestamp: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "GetFindingResponse",
  },
  "SecurityMonitoringApi.V2.ListSecurityFindings": {
    filterQuery: {
      type: "string",
      format: "",
    },
    pageCursor: {
      type: "string",
      format: "",
    },
    pageLimit: {
      type: "number",
      format: "int64",
    },
    sort: {
      type: "SecurityFindingsSort",
      format: "",
    },
    operationResponseType: "ListSecurityFindingsResponse",
  },
  "SecurityMonitoringApi.V2.CreateCases": {
    body: {
      type: "CreateCaseRequestArray",
      format: "",
    },
    operationResponseType: "FindingCaseResponseArray",
  },
  "SecurityMonitoringApi.V2.DetachCase": {
    body: {
      type: "DetachCaseRequest",
      format: "",
    },
    operationResponseType: "{}",
  },
  "SecurityMonitoringApi.V2.AttachCase": {
    caseId: {
      type: "string",
      format: "",
    },
    body: {
      type: "AttachCaseRequest",
      format: "",
    },
    operationResponseType: "FindingCaseResponse",
  },
  "SecurityMonitoringApi.V2.CreateJiraIssues": {
    body: {
      type: "CreateJiraIssueRequestArray",
      format: "",
    },
    operationResponseType: "FindingCaseResponseArray",
  },
  "SecurityMonitoringApi.V2.AttachJiraIssue": {
    body: {
      type: "AttachJiraIssueRequest",
      format: "",
    },
    operationResponseType: "FindingCaseResponse",
  },
  "SecurityMonitoringApi.V2.SearchSecurityFindings": {
    body: {
      type: "SecurityFindingsSearchRequest",
      format: "",
    },
    operationResponseType: "ListSecurityFindingsResponse",
  },
  "SecurityMonitoringApi.V2.ListAssetsSBOMs": {
    pageToken: {
      type: "string",
      format: "",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    filterAssetType: {
      type: "AssetType",
      format: "",
    },
    filterAssetName: {
      type: "string",
      format: "",
    },
    filterPackageName: {
      type: "string",
      format: "",
    },
    filterPackageVersion: {
      type: "string",
      format: "",
    },
    filterLicenseName: {
      type: "string",
      format: "",
    },
    filterLicenseType: {
      type: "SBOMComponentLicenseType",
      format: "",
    },
    operationResponseType: "ListAssetsSBOMsResponse",
  },
  "SecurityMonitoringApi.V2.GetSBOM": {
    assetType: {
      type: "AssetType",
      format: "",
    },
    filterAssetName: {
      type: "string",
      format: "",
    },
    filterRepoDigest: {
      type: "string",
      format: "",
    },
    extFormat: {
      type: "SBOMFormat",
      format: "",
    },
    operationResponseType: "GetSBOMResponse",
  },
  "SecurityMonitoringApi.V2.ListScannedAssetsMetadata": {
    pageToken: {
      type: "string",
      format: "",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    filterAssetType: {
      type: "CloudAssetType",
      format: "",
    },
    filterAssetName: {
      type: "string",
      format: "",
    },
    filterLastSuccessOrigin: {
      type: "string",
      format: "",
    },
    filterLastSuccessEnv: {
      type: "string",
      format: "",
    },
    operationResponseType: "ScannedAssetsMetadata",
  },
  "SecurityMonitoringApi.V2.GetSignalNotificationRules": {
    operationResponseType: "NotificationRulesList",
  },
  "SecurityMonitoringApi.V2.CreateSignalNotificationRule": {
    body: {
      type: "CreateNotificationRuleParameters",
      format: "",
    },
    operationResponseType: "NotificationRuleResponse",
  },
  "SecurityMonitoringApi.V2.GetSignalNotificationRule": {
    id: {
      type: "string",
      format: "",
    },
    operationResponseType: "NotificationRuleResponse",
  },
  "SecurityMonitoringApi.V2.DeleteSignalNotificationRule": {
    id: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "SecurityMonitoringApi.V2.PatchSignalNotificationRule": {
    id: {
      type: "string",
      format: "",
    },
    body: {
      type: "PatchNotificationRuleParameters",
      format: "",
    },
    operationResponseType: "NotificationRuleResponse",
  },
  "SecurityMonitoringApi.V2.ListVulnerabilities": {
    pageToken: {
      type: "string",
      format: "",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    filterType: {
      type: "VulnerabilityType",
      format: "",
    },
    filterCvssBaseScoreOp: {
      type: "number",
      format: "double",
    },
    filterCvssBaseSeverity: {
      type: "VulnerabilitySeverity",
      format: "",
    },
    filterCvssBaseVector: {
      type: "string",
      format: "",
    },
    filterCvssDatadogScoreOp: {
      type: "number",
      format: "double",
    },
    filterCvssDatadogSeverity: {
      type: "VulnerabilitySeverity",
      format: "",
    },
    filterCvssDatadogVector: {
      type: "string",
      format: "",
    },
    filterStatus: {
      type: "VulnerabilityStatus",
      format: "",
    },
    filterTool: {
      type: "VulnerabilityTool",
      format: "",
    },
    filterLibraryName: {
      type: "string",
      format: "",
    },
    filterLibraryVersion: {
      type: "string",
      format: "",
    },
    filterAdvisoryId: {
      type: "string",
      format: "",
    },
    filterRisksExploitationProbability: {
      type: "boolean",
      format: "",
    },
    filterRisksPocExploitAvailable: {
      type: "boolean",
      format: "",
    },
    filterRisksExploitAvailable: {
      type: "boolean",
      format: "",
    },
    filterRisksEpssScoreOp: {
      type: "number",
      format: "double",
    },
    filterRisksEpssSeverity: {
      type: "VulnerabilitySeverity",
      format: "",
    },
    filterLanguage: {
      type: "string",
      format: "",
    },
    filterEcosystem: {
      type: "VulnerabilityEcosystem",
      format: "",
    },
    filterCodeLocationLocation: {
      type: "string",
      format: "",
    },
    filterCodeLocationFilePath: {
      type: "string",
      format: "",
    },
    filterCodeLocationMethod: {
      type: "string",
      format: "",
    },
    filterFixAvailable: {
      type: "boolean",
      format: "",
    },
    filterRepoDigests: {
      type: "string",
      format: "",
    },
    filterOrigin: {
      type: "string",
      format: "",
    },
    filterRunningKernel: {
      type: "boolean",
      format: "",
    },
    filterAssetName: {
      type: "string",
      format: "",
    },
    filterAssetType: {
      type: "AssetType",
      format: "",
    },
    filterAssetVersionFirst: {
      type: "string",
      format: "",
    },
    filterAssetVersionLast: {
      type: "string",
      format: "",
    },
    filterAssetRepositoryUrl: {
      type: "string",
      format: "",
    },
    filterAssetRisksInProduction: {
      type: "boolean",
      format: "",
    },
    filterAssetRisksUnderAttack: {
      type: "boolean",
      format: "",
    },
    filterAssetRisksIsPubliclyAccessible: {
      type: "boolean",
      format: "",
    },
    filterAssetRisksHasPrivilegedAccess: {
      type: "boolean",
      format: "",
    },
    filterAssetRisksHasAccessToSensitiveData: {
      type: "boolean",
      format: "",
    },
    filterAssetEnvironments: {
      type: "string",
      format: "",
    },
    filterAssetTeams: {
      type: "string",
      format: "",
    },
    filterAssetArch: {
      type: "string",
      format: "",
    },
    filterAssetOperatingSystemName: {
      type: "string",
      format: "",
    },
    filterAssetOperatingSystemVersion: {
      type: "string",
      format: "",
    },
    operationResponseType: "ListVulnerabilitiesResponse",
  },
  "SecurityMonitoringApi.V2.GetVulnerabilityNotificationRules": {
    operationResponseType: "NotificationRulesList",
  },
  "SecurityMonitoringApi.V2.CreateVulnerabilityNotificationRule": {
    body: {
      type: "CreateNotificationRuleParameters",
      format: "",
    },
    operationResponseType: "NotificationRuleResponse",
  },
  "SecurityMonitoringApi.V2.GetVulnerabilityNotificationRule": {
    id: {
      type: "string",
      format: "",
    },
    operationResponseType: "NotificationRuleResponse",
  },
  "SecurityMonitoringApi.V2.DeleteVulnerabilityNotificationRule": {
    id: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "SecurityMonitoringApi.V2.PatchVulnerabilityNotificationRule": {
    id: {
      type: "string",
      format: "",
    },
    body: {
      type: "PatchNotificationRuleParameters",
      format: "",
    },
    operationResponseType: "NotificationRuleResponse",
  },
  "SecurityMonitoringApi.V2.ListVulnerableAssets": {
    pageToken: {
      type: "string",
      format: "",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    filterName: {
      type: "string",
      format: "",
    },
    filterType: {
      type: "AssetType",
      format: "",
    },
    filterVersionFirst: {
      type: "string",
      format: "",
    },
    filterVersionLast: {
      type: "string",
      format: "",
    },
    filterRepositoryUrl: {
      type: "string",
      format: "",
    },
    filterRisksInProduction: {
      type: "boolean",
      format: "",
    },
    filterRisksUnderAttack: {
      type: "boolean",
      format: "",
    },
    filterRisksIsPubliclyAccessible: {
      type: "boolean",
      format: "",
    },
    filterRisksHasPrivilegedAccess: {
      type: "boolean",
      format: "",
    },
    filterRisksHasAccessToSensitiveData: {
      type: "boolean",
      format: "",
    },
    filterEnvironments: {
      type: "string",
      format: "",
    },
    filterTeams: {
      type: "string",
      format: "",
    },
    filterArch: {
      type: "string",
      format: "",
    },
    filterOperatingSystemName: {
      type: "string",
      format: "",
    },
    filterOperatingSystemVersion: {
      type: "string",
      format: "",
    },
    operationResponseType: "ListVulnerableAssetsResponse",
  },
  "SecurityMonitoringApi.V2.ListSecurityMonitoringCriticalAssets": {
    query: {
      type: "string",
      format: "",
    },
    operationResponseType: "SecurityMonitoringCriticalAssetsResponse",
  },
  "SecurityMonitoringApi.V2.CreateSecurityMonitoringCriticalAsset": {
    body: {
      type: "SecurityMonitoringCriticalAssetCreateRequest",
      format: "",
    },
    operationResponseType: "SecurityMonitoringCriticalAssetResponse",
  },
  "SecurityMonitoringApi.V2.GetCriticalAssetsAffectingRule": {
    ruleId: {
      type: "string",
      format: "",
    },
    operationResponseType: "SecurityMonitoringCriticalAssetsResponse",
  },
  "SecurityMonitoringApi.V2.GetSecurityMonitoringCriticalAsset": {
    criticalAssetId: {
      type: "string",
      format: "",
    },
    operationResponseType: "SecurityMonitoringCriticalAssetResponse",
  },
  "SecurityMonitoringApi.V2.DeleteSecurityMonitoringCriticalAsset": {
    criticalAssetId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "SecurityMonitoringApi.V2.UpdateSecurityMonitoringCriticalAsset": {
    criticalAssetId: {
      type: "string",
      format: "",
    },
    body: {
      type: "SecurityMonitoringCriticalAssetUpdateRequest",
      format: "",
    },
    operationResponseType: "SecurityMonitoringCriticalAssetResponse",
  },
  "SecurityMonitoringApi.V2.ListSecurityFilters": {
    operationResponseType: "SecurityFiltersResponse",
  },
  "SecurityMonitoringApi.V2.CreateSecurityFilter": {
    body: {
      type: "SecurityFilterCreateRequest",
      format: "",
    },
    operationResponseType: "SecurityFilterResponse",
  },
  "SecurityMonitoringApi.V2.GetSecurityFilter": {
    securityFilterId: {
      type: "string",
      format: "",
    },
    operationResponseType: "SecurityFilterResponse",
  },
  "SecurityMonitoringApi.V2.DeleteSecurityFilter": {
    securityFilterId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "SecurityMonitoringApi.V2.UpdateSecurityFilter": {
    securityFilterId: {
      type: "string",
      format: "",
    },
    body: {
      type: "SecurityFilterUpdateRequest",
      format: "",
    },
    operationResponseType: "SecurityFilterResponse",
  },
  "SecurityMonitoringApi.V2.ListSecurityMonitoringSuppressions": {
    query: {
      type: "string",
      format: "",
    },
    sort: {
      type: "SecurityMonitoringSuppressionSort",
      format: "",
    },
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "SecurityMonitoringPaginatedSuppressionsResponse",
  },
  "SecurityMonitoringApi.V2.CreateSecurityMonitoringSuppression": {
    body: {
      type: "SecurityMonitoringSuppressionCreateRequest",
      format: "",
    },
    operationResponseType: "SecurityMonitoringSuppressionResponse",
  },
  "SecurityMonitoringApi.V2.GetSuppressionsAffectingFutureRule": {
    body: {
      type: "SecurityMonitoringRuleCreatePayload",
      format: "",
    },
    operationResponseType: "SecurityMonitoringSuppressionsResponse",
  },
  "SecurityMonitoringApi.V2.GetSuppressionsAffectingRule": {
    ruleId: {
      type: "string",
      format: "",
    },
    operationResponseType: "SecurityMonitoringSuppressionsResponse",
  },
  "SecurityMonitoringApi.V2.ValidateSecurityMonitoringSuppression": {
    body: {
      type: "SecurityMonitoringSuppressionCreateRequest",
      format: "",
    },
    operationResponseType: "{}",
  },
  "SecurityMonitoringApi.V2.GetSecurityMonitoringSuppression": {
    suppressionId: {
      type: "string",
      format: "",
    },
    operationResponseType: "SecurityMonitoringSuppressionResponse",
  },
  "SecurityMonitoringApi.V2.DeleteSecurityMonitoringSuppression": {
    suppressionId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "SecurityMonitoringApi.V2.UpdateSecurityMonitoringSuppression": {
    suppressionId: {
      type: "string",
      format: "",
    },
    body: {
      type: "SecurityMonitoringSuppressionUpdateRequest",
      format: "",
    },
    operationResponseType: "SecurityMonitoringSuppressionResponse",
  },
  "SecurityMonitoringApi.V2.GetSuppressionVersionHistory": {
    suppressionId: {
      type: "string",
      format: "",
    },
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "GetSuppressionVersionHistoryResponse",
  },
  "SecurityMonitoringApi.V2.ListSecurityMonitoringRules": {
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    query: {
      type: "string",
      format: "",
    },
    operationResponseType: "SecurityMonitoringListRulesResponse",
  },
  "SecurityMonitoringApi.V2.CreateSecurityMonitoringRule": {
    body: {
      type: "SecurityMonitoringRuleCreatePayload",
      format: "",
    },
    operationResponseType: "SecurityMonitoringRuleResponse",
  },
  "SecurityMonitoringApi.V2.BulkExportSecurityMonitoringRules": {
    body: {
      type: "SecurityMonitoringRuleBulkExportPayload",
      format: "",
    },
    operationResponseType: "HttpFile",
  },
  "SecurityMonitoringApi.V2.ConvertSecurityMonitoringRuleFromJSONToTerraform": {
    body: {
      type: "SecurityMonitoringRuleConvertPayload",
      format: "",
    },
    operationResponseType: "SecurityMonitoringRuleConvertResponse",
  },
  "SecurityMonitoringApi.V2.TestSecurityMonitoringRule": {
    body: {
      type: "SecurityMonitoringRuleTestRequest",
      format: "",
    },
    operationResponseType: "SecurityMonitoringRuleTestResponse",
  },
  "SecurityMonitoringApi.V2.ValidateSecurityMonitoringRule": {
    body: {
      type: "SecurityMonitoringRuleValidatePayload",
      format: "",
    },
    operationResponseType: "{}",
  },
  "SecurityMonitoringApi.V2.GetSecurityMonitoringRule": {
    ruleId: {
      type: "string",
      format: "",
    },
    operationResponseType: "SecurityMonitoringRuleResponse",
  },
  "SecurityMonitoringApi.V2.UpdateSecurityMonitoringRule": {
    ruleId: {
      type: "string",
      format: "",
    },
    body: {
      type: "SecurityMonitoringRuleUpdatePayload",
      format: "",
    },
    operationResponseType: "SecurityMonitoringRuleResponse",
  },
  "SecurityMonitoringApi.V2.DeleteSecurityMonitoringRule": {
    ruleId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "SecurityMonitoringApi.V2.ConvertExistingSecurityMonitoringRule": {
    ruleId: {
      type: "string",
      format: "",
    },
    operationResponseType: "SecurityMonitoringRuleConvertResponse",
  },
  "SecurityMonitoringApi.V2.TestExistingSecurityMonitoringRule": {
    ruleId: {
      type: "string",
      format: "",
    },
    body: {
      type: "SecurityMonitoringRuleTestRequest",
      format: "",
    },
    operationResponseType: "SecurityMonitoringRuleTestResponse",
  },
  "SecurityMonitoringApi.V2.GetRuleVersionHistory": {
    ruleId: {
      type: "string",
      format: "",
    },
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "GetRuleVersionHistoryResponse",
  },
  "SecurityMonitoringApi.V2.ListSecurityMonitoringSignals": {
    filterQuery: {
      type: "string",
      format: "",
    },
    filterFrom: {
      type: "Date",
      format: "date-time",
    },
    filterTo: {
      type: "Date",
      format: "date-time",
    },
    sort: {
      type: "SecurityMonitoringSignalsSort",
      format: "",
    },
    pageCursor: {
      type: "string",
      format: "",
    },
    pageLimit: {
      type: "number",
      format: "int32",
    },
    operationResponseType: "SecurityMonitoringSignalsListResponse",
  },
  "SecurityMonitoringApi.V2.SearchSecurityMonitoringSignals": {
    body: {
      type: "SecurityMonitoringSignalListRequest",
      format: "",
    },
    operationResponseType: "SecurityMonitoringSignalsListResponse",
  },
  "SecurityMonitoringApi.V2.GetSecurityMonitoringSignal": {
    signalId: {
      type: "string",
      format: "",
    },
    operationResponseType: "SecurityMonitoringSignalResponse",
  },
  "SecurityMonitoringApi.V2.EditSecurityMonitoringSignalAssignee": {
    signalId: {
      type: "string",
      format: "",
    },
    body: {
      type: "SecurityMonitoringSignalAssigneeUpdateRequest",
      format: "",
    },
    operationResponseType: "SecurityMonitoringSignalTriageUpdateResponse",
  },
  "SecurityMonitoringApi.V2.EditSecurityMonitoringSignalIncidents": {
    signalId: {
      type: "string",
      format: "",
    },
    body: {
      type: "SecurityMonitoringSignalIncidentsUpdateRequest",
      format: "",
    },
    operationResponseType: "SecurityMonitoringSignalTriageUpdateResponse",
  },
  "SecurityMonitoringApi.V2.EditSecurityMonitoringSignalState": {
    signalId: {
      type: "string",
      format: "",
    },
    body: {
      type: "SecurityMonitoringSignalStateUpdateRequest",
      format: "",
    },
    operationResponseType: "SecurityMonitoringSignalTriageUpdateResponse",
  },
  "SecurityMonitoringApi.V2.ListSecurityMonitoringHistsignals": {
    filterQuery: {
      type: "string",
      format: "",
    },
    filterFrom: {
      type: "Date",
      format: "date-time",
    },
    filterTo: {
      type: "Date",
      format: "date-time",
    },
    sort: {
      type: "SecurityMonitoringSignalsSort",
      format: "",
    },
    pageCursor: {
      type: "string",
      format: "",
    },
    pageLimit: {
      type: "number",
      format: "int32",
    },
    operationResponseType: "SecurityMonitoringSignalsListResponse",
  },
  "SecurityMonitoringApi.V2.SearchSecurityMonitoringHistsignals": {
    body: {
      type: "SecurityMonitoringSignalListRequest",
      format: "",
    },
    operationResponseType: "SecurityMonitoringSignalsListResponse",
  },
  "SecurityMonitoringApi.V2.GetSecurityMonitoringHistsignal": {
    histsignalId: {
      type: "string",
      format: "",
    },
    operationResponseType: "SecurityMonitoringSignalResponse",
  },
  "SecurityMonitoringApi.V2.ListThreatHuntingJobs": {
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    sort: {
      type: "string",
      format: "",
    },
    filterQuery: {
      type: "string",
      format: "",
    },
    operationResponseType: "ListThreatHuntingJobsResponse",
  },
  "SecurityMonitoringApi.V2.RunThreatHuntingJob": {
    body: {
      type: "RunThreatHuntingJobRequest",
      format: "",
    },
    operationResponseType: "JobCreateResponse",
  },
  "SecurityMonitoringApi.V2.ConvertJobResultToSignal": {
    body: {
      type: "ConvertJobResultsToSignalsRequest",
      format: "",
    },
    operationResponseType: "{}",
  },
  "SecurityMonitoringApi.V2.GetThreatHuntingJob": {
    jobId: {
      type: "string",
      format: "",
    },
    operationResponseType: "ThreatHuntingJobResponse",
  },
  "SecurityMonitoringApi.V2.DeleteThreatHuntingJob": {
    jobId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "SecurityMonitoringApi.V2.CancelThreatHuntingJob": {
    jobId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "SecurityMonitoringApi.V2.GetSecurityMonitoringHistsignalsByJobId": {
    jobId: {
      type: "string",
      format: "",
    },
    filterQuery: {
      type: "string",
      format: "",
    },
    filterFrom: {
      type: "Date",
      format: "date-time",
    },
    filterTo: {
      type: "Date",
      format: "date-time",
    },
    sort: {
      type: "SecurityMonitoringSignalsSort",
      format: "",
    },
    pageCursor: {
      type: "string",
      format: "",
    },
    pageLimit: {
      type: "number",
      format: "int32",
    },
    operationResponseType: "SecurityMonitoringSignalsListResponse",
  },
  "SecurityMonitoringApi.V2.ListMultipleRulesets": {
    body: {
      type: "GetMultipleRulesetsRequest",
      format: "",
    },
    operationResponseType: "GetMultipleRulesetsResponse",
  },
  "SecurityMonitoringApi.V2.GetSecretsRules": {
    operationResponseType: "SecretRuleArray",
  },
  "ContainerImagesApi.V2.ListContainerImages": {
    filterTags: {
      type: "string",
      format: "",
    },
    groupBy: {
      type: "string",
      format: "",
    },
    sort: {
      type: "string",
      format: "",
    },
    pageSize: {
      type: "number",
      format: "int32",
    },
    pageCursor: {
      type: "string",
      format: "",
    },
    operationResponseType: "ContainerImagesResponse",
  },
  "ContainersApi.V2.ListContainers": {
    filterTags: {
      type: "string",
      format: "",
    },
    groupBy: {
      type: "string",
      format: "",
    },
    sort: {
      type: "string",
      format: "",
    },
    pageSize: {
      type: "number",
      format: "int32",
    },
    pageCursor: {
      type: "string",
      format: "",
    },
    operationResponseType: "ContainersResponse",
  },
  "CloudCostManagementApi.V2.ListCustomAllocationRules": {
    operationResponseType: "ArbitraryRuleResponseArray",
  },
  "CloudCostManagementApi.V2.CreateCustomAllocationRule": {
    body: {
      type: "ArbitraryCostUpsertRequest",
      format: "",
    },
    operationResponseType: "ArbitraryRuleResponse",
  },
  "CloudCostManagementApi.V2.ReorderCustomAllocationRules": {
    body: {
      type: "ReorderRuleResourceArray",
      format: "",
    },
    operationResponseType: "{}",
  },
  "CloudCostManagementApi.V2.GetCustomAllocationRule": {
    ruleId: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "ArbitraryRuleResponse",
  },
  "CloudCostManagementApi.V2.DeleteCustomAllocationRule": {
    ruleId: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "{}",
  },
  "CloudCostManagementApi.V2.UpdateCustomAllocationRule": {
    ruleId: {
      type: "number",
      format: "int64",
    },
    body: {
      type: "ArbitraryCostUpsertRequest",
      format: "",
    },
    operationResponseType: "ArbitraryRuleResponse",
  },
  "CloudCostManagementApi.V2.ListCostAWSCURConfigs": {
    operationResponseType: "AwsCURConfigsResponse",
  },
  "CloudCostManagementApi.V2.CreateCostAWSCURConfig": {
    body: {
      type: "AwsCURConfigPostRequest",
      format: "",
    },
    operationResponseType: "AwsCurConfigResponse",
  },
  "CloudCostManagementApi.V2.GetCostAWSCURConfig": {
    cloudAccountId: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "AwsCurConfigResponse",
  },
  "CloudCostManagementApi.V2.DeleteCostAWSCURConfig": {
    cloudAccountId: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "{}",
  },
  "CloudCostManagementApi.V2.UpdateCostAWSCURConfig": {
    cloudAccountId: {
      type: "number",
      format: "int64",
    },
    body: {
      type: "AwsCURConfigPatchRequest",
      format: "",
    },
    operationResponseType: "AwsCURConfigsResponse",
  },
  "CloudCostManagementApi.V2.ListCostAzureUCConfigs": {
    operationResponseType: "AzureUCConfigsResponse",
  },
  "CloudCostManagementApi.V2.CreateCostAzureUCConfigs": {
    body: {
      type: "AzureUCConfigPostRequest",
      format: "",
    },
    operationResponseType: "AzureUCConfigPairsResponse",
  },
  "CloudCostManagementApi.V2.GetCostAzureUCConfig": {
    cloudAccountId: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "UCConfigPair",
  },
  "CloudCostManagementApi.V2.DeleteCostAzureUCConfig": {
    cloudAccountId: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "{}",
  },
  "CloudCostManagementApi.V2.UpdateCostAzureUCConfigs": {
    cloudAccountId: {
      type: "number",
      format: "int64",
    },
    body: {
      type: "AzureUCConfigPatchRequest",
      format: "",
    },
    operationResponseType: "AzureUCConfigPairsResponse",
  },
  "CloudCostManagementApi.V2.UpsertBudget": {
    body: {
      type: "BudgetWithEntries",
      format: "",
    },
    operationResponseType: "BudgetWithEntries",
  },
  "CloudCostManagementApi.V2.ValidateCsvBudget": {
    operationResponseType: "ValidationResponse",
  },
  "CloudCostManagementApi.V2.ValidateBudget": {
    body: {
      type: "BudgetValidationRequest",
      format: "",
    },
    operationResponseType: "BudgetValidationResponse",
  },
  "CloudCostManagementApi.V2.GetBudget": {
    budgetId: {
      type: "string",
      format: "",
    },
    operationResponseType: "BudgetWithEntries",
  },
  "CloudCostManagementApi.V2.DeleteBudget": {
    budgetId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "CloudCostManagementApi.V2.ListBudgets": {
    operationResponseType: "BudgetArray",
  },
  "CloudCostManagementApi.V2.ListCustomCostsFiles": {
    pageNumber: {
      type: "number",
      format: "int64",
    },
    pageSize: {
      type: "number",
      format: "int64",
    },
    filterStatus: {
      type: "string",
      format: "",
    },
    sort: {
      type: "string",
      format: "",
    },
    operationResponseType: "CustomCostsFileListResponse",
  },
  "CloudCostManagementApi.V2.UploadCustomCostsFile": {
    body: {
      type: "Array<CustomCostsFileLineItem>",
      format: "",
    },
    operationResponseType: "CustomCostsFileUploadResponse",
  },
  "CloudCostManagementApi.V2.GetCustomCostsFile": {
    fileId: {
      type: "string",
      format: "",
    },
    operationResponseType: "CustomCostsFileGetResponse",
  },
  "CloudCostManagementApi.V2.DeleteCustomCostsFile": {
    fileId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "CloudCostManagementApi.V2.ListCostGCPUsageCostConfigs": {
    operationResponseType: "GCPUsageCostConfigsResponse",
  },
  "CloudCostManagementApi.V2.CreateCostGCPUsageCostConfig": {
    body: {
      type: "GCPUsageCostConfigPostRequest",
      format: "",
    },
    operationResponseType: "GCPUsageCostConfigResponse",
  },
  "CloudCostManagementApi.V2.GetCostGCPUsageCostConfig": {
    cloudAccountId: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "GcpUcConfigResponse",
  },
  "CloudCostManagementApi.V2.DeleteCostGCPUsageCostConfig": {
    cloudAccountId: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "{}",
  },
  "CloudCostManagementApi.V2.UpdateCostGCPUsageCostConfig": {
    cloudAccountId: {
      type: "number",
      format: "int64",
    },
    body: {
      type: "GCPUsageCostConfigPatchRequest",
      format: "",
    },
    operationResponseType: "GCPUsageCostConfigResponse",
  },
  "CloudCostManagementApi.V2.ListTagPipelinesRulesets": {
    operationResponseType: "RulesetRespArray",
  },
  "CloudCostManagementApi.V2.CreateTagPipelinesRuleset": {
    body: {
      type: "CreateRulesetRequest",
      format: "",
    },
    operationResponseType: "RulesetResp",
  },
  "CloudCostManagementApi.V2.ReorderTagPipelinesRulesets": {
    body: {
      type: "ReorderRulesetResourceArray",
      format: "",
    },
    operationResponseType: "{}",
  },
  "CloudCostManagementApi.V2.ValidateQuery": {
    body: {
      type: "RulesValidateQueryRequest",
      format: "",
    },
    operationResponseType: "RulesValidateQueryResponse",
  },
  "CloudCostManagementApi.V2.GetTagPipelinesRuleset": {
    rulesetId: {
      type: "string",
      format: "",
    },
    operationResponseType: "RulesetResp",
  },
  "CloudCostManagementApi.V2.DeleteTagPipelinesRuleset": {
    rulesetId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "CloudCostManagementApi.V2.UpdateTagPipelinesRuleset": {
    rulesetId: {
      type: "string",
      format: "",
    },
    body: {
      type: "UpdateRulesetRequest",
      format: "",
    },
    operationResponseType: "RulesetResp",
  },
  "UsageMeteringApi.V2.GetActiveBillingDimensions": {
    operationResponseType: "ActiveBillingDimensionsResponse",
  },
  "UsageMeteringApi.V2.GetMonthlyCostAttribution": {
    startMonth: {
      type: "Date",
      format: "date-time",
    },
    endMonth: {
      type: "Date",
      format: "date-time",
    },
    fields: {
      type: "string",
      format: "",
    },
    sortDirection: {
      type: "SortDirection",
      format: "",
    },
    sortName: {
      type: "string",
      format: "",
    },
    tagBreakdownKeys: {
      type: "string",
      format: "",
    },
    nextRecordId: {
      type: "string",
      format: "",
    },
    includeDescendants: {
      type: "boolean",
      format: "",
    },
    operationResponseType: "MonthlyCostAttributionResponse",
  },
  "UsageMeteringApi.V2.GetUsageApplicationSecurityMonitoring": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "UsageApplicationSecurityMonitoringResponse",
  },
  "UsageMeteringApi.V2.GetBillingDimensionMapping": {
    filterMonth: {
      type: "Date",
      format: "date-time",
    },
    filterView: {
      type: "string",
      format: "",
    },
    operationResponseType: "BillingDimensionsMappingResponse",
  },
  "UsageMeteringApi.V2.GetCostByOrg": {
    startMonth: {
      type: "Date",
      format: "date-time",
    },
    endMonth: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "CostByOrgResponse",
  },
  "UsageMeteringApi.V2.GetEstimatedCostByOrg": {
    view: {
      type: "string",
      format: "",
    },
    startMonth: {
      type: "Date",
      format: "date-time",
    },
    endMonth: {
      type: "Date",
      format: "date-time",
    },
    startDate: {
      type: "Date",
      format: "date-time",
    },
    endDate: {
      type: "Date",
      format: "date-time",
    },
    includeConnectedAccounts: {
      type: "boolean",
      format: "",
    },
    operationResponseType: "CostByOrgResponse",
  },
  "UsageMeteringApi.V2.GetHistoricalCostByOrg": {
    startMonth: {
      type: "Date",
      format: "date-time",
    },
    view: {
      type: "string",
      format: "",
    },
    endMonth: {
      type: "Date",
      format: "date-time",
    },
    includeConnectedAccounts: {
      type: "boolean",
      format: "",
    },
    operationResponseType: "CostByOrgResponse",
  },
  "UsageMeteringApi.V2.GetHourlyUsage": {
    filterTimestampStart: {
      type: "Date",
      format: "date-time",
    },
    filterTimestampEnd: {
      type: "Date",
      format: "date-time",
    },
    filterProductFamilies: {
      type: "string",
      format: "",
    },
    filterIncludeDescendants: {
      type: "boolean",
      format: "",
    },
    filterIncludeConnectedAccounts: {
      type: "boolean",
      format: "",
    },
    filterIncludeBreakdown: {
      type: "boolean",
      format: "",
    },
    filterVersions: {
      type: "string",
      format: "",
    },
    pageLimit: {
      type: "number",
      format: "int32",
    },
    pageNextRecordId: {
      type: "string",
      format: "",
    },
    operationResponseType: "HourlyUsageResponse",
  },
  "UsageMeteringApi.V2.GetUsageLambdaTracedInvocations": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "UsageLambdaTracedInvocationsResponse",
  },
  "UsageMeteringApi.V2.GetUsageObservabilityPipelines": {
    startHr: {
      type: "Date",
      format: "date-time",
    },
    endHr: {
      type: "Date",
      format: "date-time",
    },
    operationResponseType: "UsageObservabilityPipelinesResponse",
  },
  "UsageMeteringApi.V2.GetProjectedCost": {
    view: {
      type: "string",
      format: "",
    },
    includeConnectedAccounts: {
      type: "boolean",
      format: "",
    },
    operationResponseType: "ProjectedCostResponse",
  },
  "CSMAgentsApi.V2.ListAllCSMAgents": {
    page: {
      type: "number",
      format: "int32",
    },
    size: {
      type: "number",
      format: "int32",
    },
    query: {
      type: "string",
      format: "",
    },
    orderDirection: {
      type: "OrderDirection",
      format: "",
    },
    operationResponseType: "CsmAgentsResponse",
  },
  "CSMAgentsApi.V2.ListAllCSMServerlessAgents": {
    page: {
      type: "number",
      format: "int32",
    },
    size: {
      type: "number",
      format: "int32",
    },
    query: {
      type: "string",
      format: "",
    },
    orderDirection: {
      type: "OrderDirection",
      format: "",
    },
    operationResponseType: "CsmAgentsResponse",
  },
  "CSMCoverageAnalysisApi.V2.GetCSMCloudAccountsCoverageAnalysis": {
    operationResponseType: "CsmCloudAccountsCoverageAnalysisResponse",
  },
  "CSMCoverageAnalysisApi.V2.GetCSMHostsAndContainersCoverageAnalysis": {
    operationResponseType: "CsmHostsAndContainersCoverageAnalysisResponse",
  },
  "CSMCoverageAnalysisApi.V2.GetCSMServerlessCoverageAnalysis": {
    operationResponseType: "CsmServerlessCoverageAnalysisResponse",
  },
  "DashboardListsApi.V2.GetDashboardListItems": {
    dashboardListId: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "DashboardListItems",
  },
  "DashboardListsApi.V2.UpdateDashboardListItems": {
    dashboardListId: {
      type: "number",
      format: "int64",
    },
    body: {
      type: "DashboardListUpdateItemsRequest",
      format: "",
    },
    operationResponseType: "DashboardListUpdateItemsResponse",
  },
  "DashboardListsApi.V2.CreateDashboardListItems": {
    dashboardListId: {
      type: "number",
      format: "int64",
    },
    body: {
      type: "DashboardListAddItemsRequest",
      format: "",
    },
    operationResponseType: "DashboardListAddItemsResponse",
  },
  "DashboardListsApi.V2.DeleteDashboardListItems": {
    dashboardListId: {
      type: "number",
      format: "int64",
    },
    body: {
      type: "DashboardListDeleteItemsRequest",
      format: "",
    },
    operationResponseType: "DashboardListDeleteItemsResponse",
  },
  "DatasetsApi.V2.GetAllDatasets": {
    operationResponseType: "DatasetResponseMulti",
  },
  "DatasetsApi.V2.CreateDataset": {
    body: {
      type: "DatasetCreateRequest",
      format: "",
    },
    operationResponseType: "DatasetResponseSingle",
  },
  "DatasetsApi.V2.GetDataset": {
    datasetId: {
      type: "string",
      format: "",
    },
    operationResponseType: "DatasetResponseSingle",
  },
  "DatasetsApi.V2.UpdateDataset": {
    datasetId: {
      type: "string",
      format: "",
    },
    body: {
      type: "DatasetUpdateRequest",
      format: "",
    },
    operationResponseType: "DatasetResponseSingle",
  },
  "DatasetsApi.V2.DeleteDataset": {
    datasetId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "DataDeletionApi.V2.CreateDataDeletionRequest": {
    product: {
      type: "string",
      format: "",
    },
    body: {
      type: "CreateDataDeletionRequestBody",
      format: "",
    },
    operationResponseType: "CreateDataDeletionResponseBody",
  },
  "DataDeletionApi.V2.GetDataDeletionRequests": {
    nextPage: {
      type: "string",
      format: "",
    },
    product: {
      type: "string",
      format: "",
    },
    query: {
      type: "string",
      format: "",
    },
    status: {
      type: "string",
      format: "",
    },
    pageSize: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "GetDataDeletionsResponseBody",
  },
  "DataDeletionApi.V2.CancelDataDeletionRequest": {
    id: {
      type: "string",
      format: "",
    },
    operationResponseType: "CancelDataDeletionResponseBody",
  },
  "DeploymentGatesApi.V2.CreateDeploymentGate": {
    body: {
      type: "CreateDeploymentGateParams",
      format: "",
    },
    operationResponseType: "DeploymentGateResponse",
  },
  "DeploymentGatesApi.V2.GetDeploymentGateRules": {
    gateId: {
      type: "string",
      format: "",
    },
    operationResponseType: "DeploymentGateRulesResponse",
  },
  "DeploymentGatesApi.V2.CreateDeploymentRule": {
    gateId: {
      type: "string",
      format: "",
    },
    body: {
      type: "CreateDeploymentRuleParams",
      format: "",
    },
    operationResponseType: "DeploymentRuleResponse",
  },
  "DeploymentGatesApi.V2.GetDeploymentRule": {
    gateId: {
      type: "string",
      format: "",
    },
    id: {
      type: "string",
      format: "",
    },
    operationResponseType: "DeploymentRuleResponse",
  },
  "DeploymentGatesApi.V2.UpdateDeploymentRule": {
    gateId: {
      type: "string",
      format: "",
    },
    id: {
      type: "string",
      format: "",
    },
    body: {
      type: "UpdateDeploymentRuleParams",
      format: "",
    },
    operationResponseType: "DeploymentRuleResponse",
  },
  "DeploymentGatesApi.V2.DeleteDeploymentRule": {
    gateId: {
      type: "string",
      format: "",
    },
    id: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "DeploymentGatesApi.V2.GetDeploymentGate": {
    id: {
      type: "string",
      format: "",
    },
    operationResponseType: "DeploymentGateResponse",
  },
  "DeploymentGatesApi.V2.UpdateDeploymentGate": {
    id: {
      type: "string",
      format: "",
    },
    body: {
      type: "UpdateDeploymentGateParams",
      format: "",
    },
    operationResponseType: "DeploymentGateResponse",
  },
  "DeploymentGatesApi.V2.DeleteDeploymentGate": {
    id: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "DomainAllowlistApi.V2.GetDomainAllowlist": {
    operationResponseType: "DomainAllowlistResponse",
  },
  "DomainAllowlistApi.V2.PatchDomainAllowlist": {
    body: {
      type: "DomainAllowlistRequest",
      format: "",
    },
    operationResponseType: "DomainAllowlistResponse",
  },
  "DORAMetricsApi.V2.CreateDORADeployment": {
    body: {
      type: "DORADeploymentRequest",
      format: "",
    },
    operationResponseType: "DORADeploymentResponse",
  },
  "DORAMetricsApi.V2.DeleteDORADeployment": {
    deploymentId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "DORAMetricsApi.V2.ListDORADeployments": {
    body: {
      type: "DORAListDeploymentsRequest",
      format: "",
    },
    operationResponseType: "DORADeploymentsListResponse",
  },
  "DORAMetricsApi.V2.GetDORADeployment": {
    deploymentId: {
      type: "string",
      format: "",
    },
    operationResponseType: "DORADeploymentFetchResponse",
  },
  "DORAMetricsApi.V2.CreateDORAFailure": {
    body: {
      type: "DORAFailureRequest",
      format: "",
    },
    operationResponseType: "DORAFailureResponse",
  },
  "DORAMetricsApi.V2.DeleteDORAFailure": {
    failureId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "DORAMetricsApi.V2.ListDORAFailures": {
    body: {
      type: "DORAListFailuresRequest",
      format: "",
    },
    operationResponseType: "DORAFailuresListResponse",
  },
  "DORAMetricsApi.V2.GetDORAFailure": {
    failureId: {
      type: "string",
      format: "",
    },
    operationResponseType: "DORAFailureFetchResponse",
  },
  "DORAMetricsApi.V2.CreateDORAIncident": {
    body: {
      type: "DORAFailureRequest",
      format: "",
    },
    operationResponseType: "DORAFailureResponse",
  },
  "DowntimesApi.V2.ListDowntimes": {
    currentOnly: {
      type: "boolean",
      format: "",
    },
    include: {
      type: "string",
      format: "",
    },
    pageOffset: {
      type: "number",
      format: "int64",
    },
    pageLimit: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "ListDowntimesResponse",
  },
  "DowntimesApi.V2.CreateDowntime": {
    body: {
      type: "DowntimeCreateRequest",
      format: "",
    },
    operationResponseType: "DowntimeResponse",
  },
  "DowntimesApi.V2.GetDowntime": {
    downtimeId: {
      type: "string",
      format: "",
    },
    include: {
      type: "string",
      format: "",
    },
    operationResponseType: "DowntimeResponse",
  },
  "DowntimesApi.V2.CancelDowntime": {
    downtimeId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "DowntimesApi.V2.UpdateDowntime": {
    downtimeId: {
      type: "string",
      format: "",
    },
    body: {
      type: "DowntimeUpdateRequest",
      format: "",
    },
    operationResponseType: "DowntimeResponse",
  },
  "DowntimesApi.V2.ListMonitorDowntimes": {
    monitorId: {
      type: "number",
      format: "int64",
    },
    pageOffset: {
      type: "number",
      format: "int64",
    },
    pageLimit: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "MonitorDowntimeMatchResponse",
  },
  "ErrorTrackingApi.V2.SearchIssues": {
    include: {
      type: "Array<SearchIssuesIncludeQueryParameterItem>",
      format: "",
    },
    body: {
      type: "IssuesSearchRequest",
      format: "",
    },
    operationResponseType: "IssuesSearchResponse",
  },
  "ErrorTrackingApi.V2.GetIssue": {
    issueId: {
      type: "string",
      format: "",
    },
    include: {
      type: "Array<GetIssueIncludeQueryParameterItem>",
      format: "",
    },
    operationResponseType: "IssueResponse",
  },
  "ErrorTrackingApi.V2.UpdateIssueAssignee": {
    issueId: {
      type: "string",
      format: "",
    },
    body: {
      type: "IssueUpdateAssigneeRequest",
      format: "",
    },
    operationResponseType: "IssueResponse",
  },
  "ErrorTrackingApi.V2.DeleteIssueAssignee": {
    issueId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "ErrorTrackingApi.V2.UpdateIssueState": {
    issueId: {
      type: "string",
      format: "",
    },
    body: {
      type: "IssueUpdateStateRequest",
      format: "",
    },
    operationResponseType: "IssueResponse",
  },
  "EventsApi.V2.ListEvents": {
    filterQuery: {
      type: "string",
      format: "",
    },
    filterFrom: {
      type: "string",
      format: "",
    },
    filterTo: {
      type: "string",
      format: "",
    },
    sort: {
      type: "EventsSort",
      format: "",
    },
    pageCursor: {
      type: "string",
      format: "",
    },
    pageLimit: {
      type: "number",
      format: "int32",
    },
    operationResponseType: "EventsListResponse",
  },
  "EventsApi.V2.CreateEvent": {
    body: {
      type: "EventCreateRequestPayload",
      format: "",
    },
    operationResponseType: "EventCreateResponsePayload",
  },
  "EventsApi.V2.SearchEvents": {
    body: {
      type: "EventsListRequest",
      format: "",
    },
    operationResponseType: "EventsListResponse",
  },
  "EventsApi.V2.GetEvent": {
    eventId: {
      type: "string",
      format: "",
    },
    operationResponseType: "V2EventResponse",
  },
  "HighAvailabilityMultiRegionApi.V2.GetHamrOrgConnection": {
    operationResponseType: "HamrOrgConnectionResponse",
  },
  "HighAvailabilityMultiRegionApi.V2.CreateHamrOrgConnection": {
    body: {
      type: "HamrOrgConnectionRequest",
      format: "",
    },
    operationResponseType: "HamrOrgConnectionResponse",
  },
  "IncidentsApi.V2.ListIncidents": {
    include: {
      type: "Array<IncidentRelatedObject>",
      format: "",
    },
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageOffset: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "IncidentsResponse",
  },
  "IncidentsApi.V2.CreateIncident": {
    body: {
      type: "IncidentCreateRequest",
      format: "",
    },
    operationResponseType: "IncidentResponse",
  },
  "IncidentsApi.V2.ListGlobalIncidentHandles": {
    include: {
      type: "string",
      format: "",
    },
    operationResponseType: "IncidentHandlesResponse",
  },
  "IncidentsApi.V2.UpdateGlobalIncidentHandle": {
    include: {
      type: "string",
      format: "",
    },
    body: {
      type: "IncidentHandleRequest",
      format: "",
    },
    operationResponseType: "IncidentHandleResponse",
  },
  "IncidentsApi.V2.CreateGlobalIncidentHandle": {
    include: {
      type: "string",
      format: "",
    },
    body: {
      type: "IncidentHandleRequest",
      format: "",
    },
    operationResponseType: "IncidentHandleResponse",
  },
  "IncidentsApi.V2.DeleteGlobalIncidentHandle": {
    operationResponseType: "{}",
  },
  "IncidentsApi.V2.GetGlobalIncidentSettings": {
    operationResponseType: "GlobalIncidentSettingsResponse",
  },
  "IncidentsApi.V2.UpdateGlobalIncidentSettings": {
    body: {
      type: "GlobalIncidentSettingsRequest",
      format: "",
    },
    operationResponseType: "GlobalIncidentSettingsResponse",
  },
  "IncidentsApi.V2.ListIncidentNotificationRules": {
    include: {
      type: "string",
      format: "",
    },
    operationResponseType: "IncidentNotificationRuleArray",
  },
  "IncidentsApi.V2.CreateIncidentNotificationRule": {
    body: {
      type: "CreateIncidentNotificationRuleRequest",
      format: "",
    },
    operationResponseType: "IncidentNotificationRule",
  },
  "IncidentsApi.V2.GetIncidentNotificationRule": {
    id: {
      type: "string",
      format: "uuid",
    },
    include: {
      type: "string",
      format: "",
    },
    operationResponseType: "IncidentNotificationRule",
  },
  "IncidentsApi.V2.UpdateIncidentNotificationRule": {
    id: {
      type: "string",
      format: "uuid",
    },
    include: {
      type: "string",
      format: "",
    },
    body: {
      type: "PutIncidentNotificationRuleRequest",
      format: "",
    },
    operationResponseType: "IncidentNotificationRule",
  },
  "IncidentsApi.V2.DeleteIncidentNotificationRule": {
    id: {
      type: "string",
      format: "uuid",
    },
    include: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "IncidentsApi.V2.ListIncidentNotificationTemplates": {
    filterIncidentType: {
      type: "string",
      format: "uuid",
    },
    include: {
      type: "string",
      format: "",
    },
    operationResponseType: "IncidentNotificationTemplateArray",
  },
  "IncidentsApi.V2.CreateIncidentNotificationTemplate": {
    body: {
      type: "CreateIncidentNotificationTemplateRequest",
      format: "",
    },
    operationResponseType: "IncidentNotificationTemplate",
  },
  "IncidentsApi.V2.GetIncidentNotificationTemplate": {
    id: {
      type: "string",
      format: "uuid",
    },
    include: {
      type: "string",
      format: "",
    },
    operationResponseType: "IncidentNotificationTemplate",
  },
  "IncidentsApi.V2.DeleteIncidentNotificationTemplate": {
    id: {
      type: "string",
      format: "uuid",
    },
    include: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "IncidentsApi.V2.UpdateIncidentNotificationTemplate": {
    id: {
      type: "string",
      format: "uuid",
    },
    include: {
      type: "string",
      format: "",
    },
    body: {
      type: "PatchIncidentNotificationTemplateRequest",
      format: "",
    },
    operationResponseType: "IncidentNotificationTemplate",
  },
  "IncidentsApi.V2.ListIncidentTypes": {
    includeDeleted: {
      type: "boolean",
      format: "",
    },
    operationResponseType: "IncidentTypeListResponse",
  },
  "IncidentsApi.V2.CreateIncidentType": {
    body: {
      type: "IncidentTypeCreateRequest",
      format: "",
    },
    operationResponseType: "IncidentTypeResponse",
  },
  "IncidentsApi.V2.GetIncidentType": {
    incidentTypeId: {
      type: "string",
      format: "",
    },
    operationResponseType: "IncidentTypeResponse",
  },
  "IncidentsApi.V2.DeleteIncidentType": {
    incidentTypeId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "IncidentsApi.V2.UpdateIncidentType": {
    incidentTypeId: {
      type: "string",
      format: "",
    },
    body: {
      type: "IncidentTypePatchRequest",
      format: "",
    },
    operationResponseType: "IncidentTypeResponse",
  },
  "IncidentsApi.V2.SearchIncidents": {
    include: {
      type: "IncidentRelatedObject",
      format: "",
    },
    query: {
      type: "string",
      format: "",
    },
    sort: {
      type: "IncidentSearchSortOrder",
      format: "",
    },
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageOffset: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "IncidentSearchResponse",
  },
  "IncidentsApi.V2.GetIncident": {
    incidentId: {
      type: "string",
      format: "",
    },
    include: {
      type: "Array<IncidentRelatedObject>",
      format: "",
    },
    operationResponseType: "IncidentResponse",
  },
  "IncidentsApi.V2.DeleteIncident": {
    incidentId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "IncidentsApi.V2.UpdateIncident": {
    incidentId: {
      type: "string",
      format: "",
    },
    include: {
      type: "Array<IncidentRelatedObject>",
      format: "",
    },
    body: {
      type: "IncidentUpdateRequest",
      format: "",
    },
    operationResponseType: "IncidentResponse",
  },
  "IncidentsApi.V2.ListIncidentAttachments": {
    incidentId: {
      type: "string",
      format: "",
    },
    filterAttachmentType: {
      type: "string",
      format: "",
    },
    include: {
      type: "string",
      format: "",
    },
    operationResponseType: "AttachmentArray",
  },
  "IncidentsApi.V2.CreateIncidentAttachment": {
    incidentId: {
      type: "string",
      format: "",
    },
    include: {
      type: "string",
      format: "",
    },
    body: {
      type: "CreateAttachmentRequest",
      format: "",
    },
    operationResponseType: "Attachment",
  },
  "IncidentsApi.V2.CreateIncidentPostmortemAttachment": {
    incidentId: {
      type: "string",
      format: "",
    },
    body: {
      type: "PostmortemAttachmentRequest",
      format: "",
    },
    operationResponseType: "Attachment",
  },
  "IncidentsApi.V2.DeleteIncidentAttachment": {
    incidentId: {
      type: "string",
      format: "",
    },
    attachmentId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "IncidentsApi.V2.UpdateIncidentAttachment": {
    incidentId: {
      type: "string",
      format: "",
    },
    attachmentId: {
      type: "string",
      format: "",
    },
    include: {
      type: "string",
      format: "",
    },
    body: {
      type: "PatchAttachmentRequest",
      format: "",
    },
    operationResponseType: "Attachment",
  },
  "IncidentsApi.V2.ListIncidentImpacts": {
    incidentId: {
      type: "string",
      format: "",
    },
    include: {
      type: "Array<IncidentImpactRelatedObject>",
      format: "",
    },
    operationResponseType: "IncidentImpactsResponse",
  },
  "IncidentsApi.V2.CreateIncidentImpact": {
    incidentId: {
      type: "string",
      format: "",
    },
    include: {
      type: "Array<IncidentImpactRelatedObject>",
      format: "",
    },
    body: {
      type: "IncidentImpactCreateRequest",
      format: "",
    },
    operationResponseType: "IncidentImpactResponse",
  },
  "IncidentsApi.V2.DeleteIncidentImpact": {
    incidentId: {
      type: "string",
      format: "",
    },
    impactId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "IncidentsApi.V2.ListIncidentIntegrations": {
    incidentId: {
      type: "string",
      format: "",
    },
    operationResponseType: "IncidentIntegrationMetadataListResponse",
  },
  "IncidentsApi.V2.CreateIncidentIntegration": {
    incidentId: {
      type: "string",
      format: "",
    },
    body: {
      type: "IncidentIntegrationMetadataCreateRequest",
      format: "",
    },
    operationResponseType: "IncidentIntegrationMetadataResponse",
  },
  "IncidentsApi.V2.GetIncidentIntegration": {
    incidentId: {
      type: "string",
      format: "",
    },
    integrationMetadataId: {
      type: "string",
      format: "",
    },
    operationResponseType: "IncidentIntegrationMetadataResponse",
  },
  "IncidentsApi.V2.DeleteIncidentIntegration": {
    incidentId: {
      type: "string",
      format: "",
    },
    integrationMetadataId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "IncidentsApi.V2.UpdateIncidentIntegration": {
    incidentId: {
      type: "string",
      format: "",
    },
    integrationMetadataId: {
      type: "string",
      format: "",
    },
    body: {
      type: "IncidentIntegrationMetadataPatchRequest",
      format: "",
    },
    operationResponseType: "IncidentIntegrationMetadataResponse",
  },
  "IncidentsApi.V2.ListIncidentTodos": {
    incidentId: {
      type: "string",
      format: "",
    },
    operationResponseType: "IncidentTodoListResponse",
  },
  "IncidentsApi.V2.CreateIncidentTodo": {
    incidentId: {
      type: "string",
      format: "",
    },
    body: {
      type: "IncidentTodoCreateRequest",
      format: "",
    },
    operationResponseType: "IncidentTodoResponse",
  },
  "IncidentsApi.V2.GetIncidentTodo": {
    incidentId: {
      type: "string",
      format: "",
    },
    todoId: {
      type: "string",
      format: "",
    },
    operationResponseType: "IncidentTodoResponse",
  },
  "IncidentsApi.V2.DeleteIncidentTodo": {
    incidentId: {
      type: "string",
      format: "",
    },
    todoId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "IncidentsApi.V2.UpdateIncidentTodo": {
    incidentId: {
      type: "string",
      format: "",
    },
    todoId: {
      type: "string",
      format: "",
    },
    body: {
      type: "IncidentTodoPatchRequest",
      format: "",
    },
    operationResponseType: "IncidentTodoResponse",
  },
  "AWSIntegrationApi.V2.ListAWSAccounts": {
    awsAccountId: {
      type: "string",
      format: "",
    },
    operationResponseType: "AWSAccountsResponse",
  },
  "AWSIntegrationApi.V2.CreateAWSAccount": {
    body: {
      type: "AWSAccountCreateRequest",
      format: "",
    },
    operationResponseType: "AWSAccountResponse",
  },
  "AWSIntegrationApi.V2.GetAWSAccount": {
    awsAccountConfigId: {
      type: "string",
      format: "",
    },
    operationResponseType: "AWSAccountResponse",
  },
  "AWSIntegrationApi.V2.DeleteAWSAccount": {
    awsAccountConfigId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "AWSIntegrationApi.V2.UpdateAWSAccount": {
    awsAccountConfigId: {
      type: "string",
      format: "",
    },
    body: {
      type: "AWSAccountUpdateRequest",
      format: "",
    },
    operationResponseType: "AWSAccountResponse",
  },
  "AWSIntegrationApi.V2.ListAWSNamespaces": {
    operationResponseType: "AWSNamespacesResponse",
  },
  "AWSIntegrationApi.V2.ListAWSEventBridgeSources": {
    operationResponseType: "AWSEventBridgeListResponse",
  },
  "AWSIntegrationApi.V2.CreateAWSEventBridgeSource": {
    body: {
      type: "AWSEventBridgeCreateRequest",
      format: "",
    },
    operationResponseType: "AWSEventBridgeCreateResponse",
  },
  "AWSIntegrationApi.V2.DeleteAWSEventBridgeSource": {
    body: {
      type: "AWSEventBridgeDeleteRequest",
      format: "",
    },
    operationResponseType: "AWSEventBridgeDeleteResponse",
  },
  "AWSIntegrationApi.V2.CreateNewAWSExternalID": {
    operationResponseType: "AWSNewExternalIDResponse",
  },
  "AWSIntegrationApi.V2.GetAWSIntegrationIAMPermissions": {
    operationResponseType: "AWSIntegrationIamPermissionsResponse",
  },
  "AWSIntegrationApi.V2.GetAWSIntegrationIAMPermissionsResourceCollection": {
    operationResponseType: "AWSIntegrationIamPermissionsResponse",
  },
  "AWSIntegrationApi.V2.GetAWSIntegrationIAMPermissionsStandard": {
    operationResponseType: "AWSIntegrationIamPermissionsResponse",
  },
  "AWSLogsIntegrationApi.V2.ListAWSLogsServices": {
    operationResponseType: "AWSLogsServicesResponse",
  },
  "GCPIntegrationApi.V2.ListGCPSTSAccounts": {
    operationResponseType: "GCPSTSServiceAccountsResponse",
  },
  "GCPIntegrationApi.V2.CreateGCPSTSAccount": {
    body: {
      type: "GCPSTSServiceAccountCreateRequest",
      format: "",
    },
    operationResponseType: "GCPSTSServiceAccountResponse",
  },
  "GCPIntegrationApi.V2.DeleteGCPSTSAccount": {
    accountId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "GCPIntegrationApi.V2.UpdateGCPSTSAccount": {
    accountId: {
      type: "string",
      format: "",
    },
    body: {
      type: "GCPSTSServiceAccountUpdateRequest",
      format: "",
    },
    operationResponseType: "GCPSTSServiceAccountResponse",
  },
  "GCPIntegrationApi.V2.GetGCPSTSDelegate": {
    operationResponseType: "GCPSTSDelegateAccountResponse",
  },
  "GCPIntegrationApi.V2.MakeGCPSTSDelegate": {
    body: {
      type: "any",
      format: "",
    },
    operationResponseType: "GCPSTSDelegateAccountResponse",
  },
  "JiraIntegrationApi.V2.ListJiraAccounts": {
    operationResponseType: "JiraAccountsResponse",
  },
  "JiraIntegrationApi.V2.DeleteJiraAccount": {
    accountId: {
      type: "string",
      format: "uuid",
    },
    operationResponseType: "{}",
  },
  "JiraIntegrationApi.V2.ListJiraIssueTemplates": {
    operationResponseType: "JiraIssueTemplatesResponse",
  },
  "JiraIntegrationApi.V2.CreateJiraIssueTemplate": {
    body: {
      type: "JiraIssueTemplateCreateRequest",
      format: "",
    },
    operationResponseType: "JiraIssueTemplateResponse",
  },
  "JiraIntegrationApi.V2.GetJiraIssueTemplate": {
    issueTemplateId: {
      type: "string",
      format: "uuid",
    },
    operationResponseType: "JiraIssueTemplateResponse",
  },
  "JiraIntegrationApi.V2.DeleteJiraIssueTemplate": {
    issueTemplateId: {
      type: "string",
      format: "uuid",
    },
    operationResponseType: "{}",
  },
  "JiraIntegrationApi.V2.UpdateJiraIssueTemplate": {
    issueTemplateId: {
      type: "string",
      format: "uuid",
    },
    body: {
      type: "JiraIssueTemplateUpdateRequest",
      format: "",
    },
    operationResponseType: "JiraIssueTemplateResponse",
  },
  "MicrosoftTeamsIntegrationApi.V2.GetChannelByName": {
    tenantName: {
      type: "string",
      format: "",
    },
    teamName: {
      type: "string",
      format: "",
    },
    channelName: {
      type: "string",
      format: "",
    },
    operationResponseType: "MicrosoftTeamsGetChannelByNameResponse",
  },
  "MicrosoftTeamsIntegrationApi.V2.ListTenantBasedHandles": {
    tenantId: {
      type: "string",
      format: "",
    },
    name: {
      type: "string",
      format: "",
    },
    operationResponseType: "MicrosoftTeamsTenantBasedHandlesResponse",
  },
  "MicrosoftTeamsIntegrationApi.V2.CreateTenantBasedHandle": {
    body: {
      type: "MicrosoftTeamsCreateTenantBasedHandleRequest",
      format: "",
    },
    operationResponseType: "MicrosoftTeamsTenantBasedHandleResponse",
  },
  "MicrosoftTeamsIntegrationApi.V2.GetTenantBasedHandle": {
    handleId: {
      type: "string",
      format: "",
    },
    operationResponseType: "MicrosoftTeamsTenantBasedHandleResponse",
  },
  "MicrosoftTeamsIntegrationApi.V2.DeleteTenantBasedHandle": {
    handleId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "MicrosoftTeamsIntegrationApi.V2.UpdateTenantBasedHandle": {
    handleId: {
      type: "string",
      format: "",
    },
    body: {
      type: "MicrosoftTeamsUpdateTenantBasedHandleRequest",
      format: "",
    },
    operationResponseType: "MicrosoftTeamsTenantBasedHandleResponse",
  },
  "MicrosoftTeamsIntegrationApi.V2.ListWorkflowsWebhookHandles": {
    name: {
      type: "string",
      format: "",
    },
    operationResponseType: "MicrosoftTeamsWorkflowsWebhookHandlesResponse",
  },
  "MicrosoftTeamsIntegrationApi.V2.CreateWorkflowsWebhookHandle": {
    body: {
      type: "MicrosoftTeamsCreateWorkflowsWebhookHandleRequest",
      format: "",
    },
    operationResponseType: "MicrosoftTeamsWorkflowsWebhookHandleResponse",
  },
  "MicrosoftTeamsIntegrationApi.V2.GetWorkflowsWebhookHandle": {
    handleId: {
      type: "string",
      format: "",
    },
    operationResponseType: "MicrosoftTeamsWorkflowsWebhookHandleResponse",
  },
  "MicrosoftTeamsIntegrationApi.V2.DeleteWorkflowsWebhookHandle": {
    handleId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "MicrosoftTeamsIntegrationApi.V2.UpdateWorkflowsWebhookHandle": {
    handleId: {
      type: "string",
      format: "",
    },
    body: {
      type: "MicrosoftTeamsUpdateWorkflowsWebhookHandleRequest",
      format: "",
    },
    operationResponseType: "MicrosoftTeamsWorkflowsWebhookHandleResponse",
  },
  "OpsgenieIntegrationApi.V2.ListOpsgenieServices": {
    operationResponseType: "OpsgenieServicesResponse",
  },
  "OpsgenieIntegrationApi.V2.CreateOpsgenieService": {
    body: {
      type: "OpsgenieServiceCreateRequest",
      format: "",
    },
    operationResponseType: "OpsgenieServiceResponse",
  },
  "OpsgenieIntegrationApi.V2.GetOpsgenieService": {
    integrationServiceId: {
      type: "string",
      format: "",
    },
    operationResponseType: "OpsgenieServiceResponse",
  },
  "OpsgenieIntegrationApi.V2.DeleteOpsgenieService": {
    integrationServiceId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "OpsgenieIntegrationApi.V2.UpdateOpsgenieService": {
    integrationServiceId: {
      type: "string",
      format: "",
    },
    body: {
      type: "OpsgenieServiceUpdateRequest",
      format: "",
    },
    operationResponseType: "OpsgenieServiceResponse",
  },
  "ServiceNowIntegrationApi.V2.ListServiceNowAssignmentGroups": {
    instanceId: {
      type: "string",
      format: "uuid",
    },
    operationResponseType: "ServiceNowAssignmentGroupsResponse",
  },
  "ServiceNowIntegrationApi.V2.ListServiceNowBusinessServices": {
    instanceId: {
      type: "string",
      format: "uuid",
    },
    operationResponseType: "ServiceNowBusinessServicesResponse",
  },
  "ServiceNowIntegrationApi.V2.ListServiceNowTemplates": {
    operationResponseType: "ServiceNowTemplatesResponse",
  },
  "ServiceNowIntegrationApi.V2.CreateServiceNowTemplate": {
    body: {
      type: "ServiceNowTemplateCreateRequest",
      format: "",
    },
    operationResponseType: "ServiceNowTemplateResponse",
  },
  "ServiceNowIntegrationApi.V2.GetServiceNowTemplate": {
    templateId: {
      type: "string",
      format: "uuid",
    },
    operationResponseType: "ServiceNowTemplateResponse",
  },
  "ServiceNowIntegrationApi.V2.UpdateServiceNowTemplate": {
    templateId: {
      type: "string",
      format: "uuid",
    },
    body: {
      type: "ServiceNowTemplateUpdateRequest",
      format: "",
    },
    operationResponseType: "ServiceNowTemplateResponse",
  },
  "ServiceNowIntegrationApi.V2.DeleteServiceNowTemplate": {
    templateId: {
      type: "string",
      format: "uuid",
    },
    operationResponseType: "{}",
  },
  "ServiceNowIntegrationApi.V2.ListServiceNowInstances": {
    operationResponseType: "ServiceNowInstancesResponse",
  },
  "ServiceNowIntegrationApi.V2.ListServiceNowUsers": {
    instanceId: {
      type: "string",
      format: "uuid",
    },
    operationResponseType: "ServiceNowUsersResponse",
  },
  "CloudflareIntegrationApi.V2.ListCloudflareAccounts": {
    operationResponseType: "CloudflareAccountsResponse",
  },
  "CloudflareIntegrationApi.V2.CreateCloudflareAccount": {
    body: {
      type: "CloudflareAccountCreateRequest",
      format: "",
    },
    operationResponseType: "CloudflareAccountResponse",
  },
  "CloudflareIntegrationApi.V2.GetCloudflareAccount": {
    accountId: {
      type: "string",
      format: "",
    },
    operationResponseType: "CloudflareAccountResponse",
  },
  "CloudflareIntegrationApi.V2.DeleteCloudflareAccount": {
    accountId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "CloudflareIntegrationApi.V2.UpdateCloudflareAccount": {
    accountId: {
      type: "string",
      format: "",
    },
    body: {
      type: "CloudflareAccountUpdateRequest",
      format: "",
    },
    operationResponseType: "CloudflareAccountResponse",
  },
  "ConfluentCloudApi.V2.ListConfluentAccount": {
    operationResponseType: "ConfluentAccountsResponse",
  },
  "ConfluentCloudApi.V2.CreateConfluentAccount": {
    body: {
      type: "ConfluentAccountCreateRequest",
      format: "",
    },
    operationResponseType: "ConfluentAccountResponse",
  },
  "ConfluentCloudApi.V2.GetConfluentAccount": {
    accountId: {
      type: "string",
      format: "",
    },
    operationResponseType: "ConfluentAccountResponse",
  },
  "ConfluentCloudApi.V2.DeleteConfluentAccount": {
    accountId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "ConfluentCloudApi.V2.UpdateConfluentAccount": {
    accountId: {
      type: "string",
      format: "",
    },
    body: {
      type: "ConfluentAccountUpdateRequest",
      format: "",
    },
    operationResponseType: "ConfluentAccountResponse",
  },
  "ConfluentCloudApi.V2.ListConfluentResource": {
    accountId: {
      type: "string",
      format: "",
    },
    operationResponseType: "ConfluentResourcesResponse",
  },
  "ConfluentCloudApi.V2.CreateConfluentResource": {
    accountId: {
      type: "string",
      format: "",
    },
    body: {
      type: "ConfluentResourceRequest",
      format: "",
    },
    operationResponseType: "ConfluentResourceResponse",
  },
  "ConfluentCloudApi.V2.GetConfluentResource": {
    accountId: {
      type: "string",
      format: "",
    },
    resourceId: {
      type: "string",
      format: "",
    },
    operationResponseType: "ConfluentResourceResponse",
  },
  "ConfluentCloudApi.V2.DeleteConfluentResource": {
    accountId: {
      type: "string",
      format: "",
    },
    resourceId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "ConfluentCloudApi.V2.UpdateConfluentResource": {
    accountId: {
      type: "string",
      format: "",
    },
    resourceId: {
      type: "string",
      format: "",
    },
    body: {
      type: "ConfluentResourceRequest",
      format: "",
    },
    operationResponseType: "ConfluentResourceResponse",
  },
  "FastlyIntegrationApi.V2.ListFastlyAccounts": {
    operationResponseType: "FastlyAccountsResponse",
  },
  "FastlyIntegrationApi.V2.CreateFastlyAccount": {
    body: {
      type: "FastlyAccountCreateRequest",
      format: "",
    },
    operationResponseType: "FastlyAccountResponse",
  },
  "FastlyIntegrationApi.V2.GetFastlyAccount": {
    accountId: {
      type: "string",
      format: "",
    },
    operationResponseType: "FastlyAccountResponse",
  },
  "FastlyIntegrationApi.V2.DeleteFastlyAccount": {
    accountId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "FastlyIntegrationApi.V2.UpdateFastlyAccount": {
    accountId: {
      type: "string",
      format: "",
    },
    body: {
      type: "FastlyAccountUpdateRequest",
      format: "",
    },
    operationResponseType: "FastlyAccountResponse",
  },
  "FastlyIntegrationApi.V2.ListFastlyServices": {
    accountId: {
      type: "string",
      format: "",
    },
    operationResponseType: "FastlyServicesResponse",
  },
  "FastlyIntegrationApi.V2.CreateFastlyService": {
    accountId: {
      type: "string",
      format: "",
    },
    body: {
      type: "FastlyServiceRequest",
      format: "",
    },
    operationResponseType: "FastlyServiceResponse",
  },
  "FastlyIntegrationApi.V2.GetFastlyService": {
    accountId: {
      type: "string",
      format: "",
    },
    serviceId: {
      type: "string",
      format: "",
    },
    operationResponseType: "FastlyServiceResponse",
  },
  "FastlyIntegrationApi.V2.DeleteFastlyService": {
    accountId: {
      type: "string",
      format: "",
    },
    serviceId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "FastlyIntegrationApi.V2.UpdateFastlyService": {
    accountId: {
      type: "string",
      format: "",
    },
    serviceId: {
      type: "string",
      format: "",
    },
    body: {
      type: "FastlyServiceRequest",
      format: "",
    },
    operationResponseType: "FastlyServiceResponse",
  },
  "OktaIntegrationApi.V2.ListOktaAccounts": {
    operationResponseType: "OktaAccountsResponse",
  },
  "OktaIntegrationApi.V2.CreateOktaAccount": {
    body: {
      type: "OktaAccountRequest",
      format: "",
    },
    operationResponseType: "OktaAccountResponse",
  },
  "OktaIntegrationApi.V2.GetOktaAccount": {
    accountId: {
      type: "string",
      format: "",
    },
    operationResponseType: "OktaAccountResponse",
  },
  "OktaIntegrationApi.V2.DeleteOktaAccount": {
    accountId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "OktaIntegrationApi.V2.UpdateOktaAccount": {
    accountId: {
      type: "string",
      format: "",
    },
    body: {
      type: "OktaAccountUpdateRequest",
      format: "",
    },
    operationResponseType: "OktaAccountResponse",
  },
  "IPAllowlistApi.V2.GetIPAllowlist": {
    operationResponseType: "IPAllowlistResponse",
  },
  "IPAllowlistApi.V2.UpdateIPAllowlist": {
    body: {
      type: "IPAllowlistUpdateRequest",
      format: "",
    },
    operationResponseType: "IPAllowlistResponse",
  },
  "LogsApi.V2.SubmitLog": {
    contentEncoding: {
      type: "ContentEncoding",
      format: "",
    },
    ddtags: {
      type: "string",
      format: "",
    },
    body: {
      type: "Array<HTTPLogItem>",
      format: "",
    },
    operationResponseType: "any",
  },
  "LogsApi.V2.AggregateLogs": {
    body: {
      type: "LogsAggregateRequest",
      format: "",
    },
    operationResponseType: "LogsAggregateResponse",
  },
  "LogsApi.V2.ListLogsGet": {
    filterQuery: {
      type: "string",
      format: "",
    },
    filterIndexes: {
      type: "Array<string>",
      format: "",
    },
    filterFrom: {
      type: "Date",
      format: "date-time",
    },
    filterTo: {
      type: "Date",
      format: "date-time",
    },
    filterStorageTier: {
      type: "LogsStorageTier",
      format: "",
    },
    sort: {
      type: "LogsSort",
      format: "",
    },
    pageCursor: {
      type: "string",
      format: "",
    },
    pageLimit: {
      type: "number",
      format: "int32",
    },
    operationResponseType: "LogsListResponse",
  },
  "LogsApi.V2.ListLogs": {
    body: {
      type: "LogsListRequest",
      format: "",
    },
    operationResponseType: "LogsListResponse",
  },
  "LogsArchivesApi.V2.GetLogsArchiveOrder": {
    operationResponseType: "LogsArchiveOrder",
  },
  "LogsArchivesApi.V2.UpdateLogsArchiveOrder": {
    body: {
      type: "LogsArchiveOrder",
      format: "",
    },
    operationResponseType: "LogsArchiveOrder",
  },
  "LogsArchivesApi.V2.ListLogsArchives": {
    operationResponseType: "LogsArchives",
  },
  "LogsArchivesApi.V2.CreateLogsArchive": {
    body: {
      type: "LogsArchiveCreateRequest",
      format: "",
    },
    operationResponseType: "LogsArchive",
  },
  "LogsArchivesApi.V2.GetLogsArchive": {
    archiveId: {
      type: "string",
      format: "",
    },
    operationResponseType: "LogsArchive",
  },
  "LogsArchivesApi.V2.UpdateLogsArchive": {
    archiveId: {
      type: "string",
      format: "",
    },
    body: {
      type: "LogsArchiveCreateRequest",
      format: "",
    },
    operationResponseType: "LogsArchive",
  },
  "LogsArchivesApi.V2.DeleteLogsArchive": {
    archiveId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "LogsArchivesApi.V2.ListArchiveReadRoles": {
    archiveId: {
      type: "string",
      format: "",
    },
    operationResponseType: "RolesResponse",
  },
  "LogsArchivesApi.V2.AddReadRoleToArchive": {
    archiveId: {
      type: "string",
      format: "",
    },
    body: {
      type: "RelationshipToRole",
      format: "",
    },
    operationResponseType: "{}",
  },
  "LogsArchivesApi.V2.RemoveRoleFromArchive": {
    archiveId: {
      type: "string",
      format: "",
    },
    body: {
      type: "RelationshipToRole",
      format: "",
    },
    operationResponseType: "{}",
  },
  "LogsCustomDestinationsApi.V2.ListLogsCustomDestinations": {
    operationResponseType: "CustomDestinationsResponse",
  },
  "LogsCustomDestinationsApi.V2.CreateLogsCustomDestination": {
    body: {
      type: "CustomDestinationCreateRequest",
      format: "",
    },
    operationResponseType: "CustomDestinationResponse",
  },
  "LogsCustomDestinationsApi.V2.GetLogsCustomDestination": {
    customDestinationId: {
      type: "string",
      format: "",
    },
    operationResponseType: "CustomDestinationResponse",
  },
  "LogsCustomDestinationsApi.V2.DeleteLogsCustomDestination": {
    customDestinationId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "LogsCustomDestinationsApi.V2.UpdateLogsCustomDestination": {
    customDestinationId: {
      type: "string",
      format: "",
    },
    body: {
      type: "CustomDestinationUpdateRequest",
      format: "",
    },
    operationResponseType: "CustomDestinationResponse",
  },
  "LogsMetricsApi.V2.ListLogsMetrics": {
    operationResponseType: "LogsMetricsResponse",
  },
  "LogsMetricsApi.V2.CreateLogsMetric": {
    body: {
      type: "LogsMetricCreateRequest",
      format: "",
    },
    operationResponseType: "LogsMetricResponse",
  },
  "LogsMetricsApi.V2.GetLogsMetric": {
    metricId: {
      type: "string",
      format: "",
    },
    operationResponseType: "LogsMetricResponse",
  },
  "LogsMetricsApi.V2.DeleteLogsMetric": {
    metricId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "LogsMetricsApi.V2.UpdateLogsMetric": {
    metricId: {
      type: "string",
      format: "",
    },
    body: {
      type: "LogsMetricUpdateRequest",
      format: "",
    },
    operationResponseType: "LogsMetricResponse",
  },
  "LogsRestrictionQueriesApi.V2.ListRestrictionQueries": {
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "RestrictionQueryListResponse",
  },
  "LogsRestrictionQueriesApi.V2.CreateRestrictionQuery": {
    body: {
      type: "RestrictionQueryCreatePayload",
      format: "",
    },
    operationResponseType: "RestrictionQueryWithoutRelationshipsResponse",
  },
  "LogsRestrictionQueriesApi.V2.GetRoleRestrictionQuery": {
    roleId: {
      type: "string",
      format: "",
    },
    operationResponseType: "RestrictionQueryListResponse",
  },
  "LogsRestrictionQueriesApi.V2.ListUserRestrictionQueries": {
    userId: {
      type: "string",
      format: "",
    },
    operationResponseType: "RestrictionQueryListResponse",
  },
  "LogsRestrictionQueriesApi.V2.GetRestrictionQuery": {
    restrictionQueryId: {
      type: "string",
      format: "",
    },
    operationResponseType: "RestrictionQueryWithRelationshipsResponse",
  },
  "LogsRestrictionQueriesApi.V2.ReplaceRestrictionQuery": {
    restrictionQueryId: {
      type: "string",
      format: "",
    },
    body: {
      type: "RestrictionQueryUpdatePayload",
      format: "",
    },
    operationResponseType: "RestrictionQueryWithoutRelationshipsResponse",
  },
  "LogsRestrictionQueriesApi.V2.DeleteRestrictionQuery": {
    restrictionQueryId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "LogsRestrictionQueriesApi.V2.UpdateRestrictionQuery": {
    restrictionQueryId: {
      type: "string",
      format: "",
    },
    body: {
      type: "RestrictionQueryUpdatePayload",
      format: "",
    },
    operationResponseType: "RestrictionQueryWithoutRelationshipsResponse",
  },
  "LogsRestrictionQueriesApi.V2.ListRestrictionQueryRoles": {
    restrictionQueryId: {
      type: "string",
      format: "",
    },
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "RestrictionQueryRolesResponse",
  },
  "LogsRestrictionQueriesApi.V2.AddRoleToRestrictionQuery": {
    restrictionQueryId: {
      type: "string",
      format: "",
    },
    body: {
      type: "RelationshipToRole",
      format: "",
    },
    operationResponseType: "{}",
  },
  "LogsRestrictionQueriesApi.V2.RemoveRoleFromRestrictionQuery": {
    restrictionQueryId: {
      type: "string",
      format: "",
    },
    body: {
      type: "RelationshipToRole",
      format: "",
    },
    operationResponseType: "{}",
  },
  "MetricsApi.V2.ListTagConfigurations": {
    filterConfigured: {
      type: "boolean",
      format: "",
    },
    filterTagsConfigured: {
      type: "string",
      format: "",
    },
    filterMetricType: {
      type: "MetricTagConfigurationMetricTypeCategory",
      format: "",
    },
    filterIncludePercentiles: {
      type: "boolean",
      format: "",
    },
    filterQueried: {
      type: "boolean",
      format: "",
    },
    filterTags: {
      type: "string",
      format: "",
    },
    filterRelatedAssets: {
      type: "boolean",
      format: "",
    },
    windowSeconds: {
      type: "number",
      format: "int64",
    },
    pageSize: {
      type: "number",
      format: "int32",
    },
    pageCursor: {
      type: "string",
      format: "",
    },
    operationResponseType: "MetricsAndMetricTagConfigurationsResponse",
  },
  "MetricsApi.V2.CreateBulkTagsMetricsConfiguration": {
    body: {
      type: "MetricBulkTagConfigCreateRequest",
      format: "",
    },
    operationResponseType: "MetricBulkTagConfigResponse",
  },
  "MetricsApi.V2.DeleteBulkTagsMetricsConfiguration": {
    body: {
      type: "MetricBulkTagConfigDeleteRequest",
      format: "",
    },
    operationResponseType: "MetricBulkTagConfigResponse",
  },
  "MetricsApi.V2.ListActiveMetricConfigurations": {
    metricName: {
      type: "string",
      format: "",
    },
    windowSeconds: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "MetricSuggestedTagsAndAggregationsResponse",
  },
  "MetricsApi.V2.ListTagsByMetricName": {
    metricName: {
      type: "string",
      format: "",
    },
    windowSeconds: {
      type: "number",
      format: "int64",
    },
    filterTags: {
      type: "string",
      format: "",
    },
    filterMatch: {
      type: "string",
      format: "",
    },
    filterIncludeTagValues: {
      type: "boolean",
      format: "",
    },
    filterAllowPartial: {
      type: "boolean",
      format: "",
    },
    pageLimit: {
      type: "number",
      format: "int32",
    },
    operationResponseType: "MetricAllTagsResponse",
  },
  "MetricsApi.V2.ListMetricAssets": {
    metricName: {
      type: "string",
      format: "",
    },
    operationResponseType: "MetricAssetsResponse",
  },
  "MetricsApi.V2.EstimateMetricsOutputSeries": {
    metricName: {
      type: "string",
      format: "",
    },
    filterGroups: {
      type: "string",
      format: "",
    },
    filterHoursAgo: {
      type: "number",
      format: "int32",
    },
    filterNumAggregations: {
      type: "number",
      format: "int32",
    },
    filterPct: {
      type: "boolean",
      format: "",
    },
    filterTimespanH: {
      type: "number",
      format: "int32",
    },
    operationResponseType: "MetricEstimateResponse",
  },
  "MetricsApi.V2.GetMetricTagCardinalityDetails": {
    metricName: {
      type: "string",
      format: "",
    },
    operationResponseType: "MetricTagCardinalitiesResponse",
  },
  "MetricsApi.V2.ListTagConfigurationByName": {
    metricName: {
      type: "string",
      format: "",
    },
    operationResponseType: "MetricTagConfigurationResponse",
  },
  "MetricsApi.V2.CreateTagConfiguration": {
    metricName: {
      type: "string",
      format: "",
    },
    body: {
      type: "MetricTagConfigurationCreateRequest",
      format: "",
    },
    operationResponseType: "MetricTagConfigurationResponse",
  },
  "MetricsApi.V2.DeleteTagConfiguration": {
    metricName: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "MetricsApi.V2.UpdateTagConfiguration": {
    metricName: {
      type: "string",
      format: "",
    },
    body: {
      type: "MetricTagConfigurationUpdateRequest",
      format: "",
    },
    operationResponseType: "MetricTagConfigurationResponse",
  },
  "MetricsApi.V2.ListVolumesByMetricName": {
    metricName: {
      type: "string",
      format: "",
    },
    operationResponseType: "MetricVolumesResponse",
  },
  "MetricsApi.V2.QueryScalarData": {
    body: {
      type: "ScalarFormulaQueryRequest",
      format: "",
    },
    operationResponseType: "ScalarFormulaQueryResponse",
  },
  "MetricsApi.V2.QueryTimeseriesData": {
    body: {
      type: "TimeseriesFormulaQueryRequest",
      format: "",
    },
    operationResponseType: "TimeseriesFormulaQueryResponse",
  },
  "MetricsApi.V2.SubmitMetrics": {
    contentEncoding: {
      type: "MetricContentEncoding",
      format: "",
    },
    body: {
      type: "MetricPayload",
      format: "",
    },
    operationResponseType: "IntakePayloadAccepted",
  },
  "MonitorsApi.V2.GetMonitorNotificationRules": {
    page: {
      type: "number",
      format: "int32",
    },
    perPage: {
      type: "number",
      format: "int32",
    },
    sort: {
      type: "string",
      format: "",
    },
    filters: {
      type: "string",
      format: "",
    },
    include: {
      type: "string",
      format: "",
    },
    operationResponseType: "MonitorNotificationRuleListResponse",
  },
  "MonitorsApi.V2.CreateMonitorNotificationRule": {
    body: {
      type: "MonitorNotificationRuleCreateRequest",
      format: "",
    },
    operationResponseType: "MonitorNotificationRuleResponse",
  },
  "MonitorsApi.V2.GetMonitorNotificationRule": {
    ruleId: {
      type: "string",
      format: "",
    },
    include: {
      type: "string",
      format: "",
    },
    operationResponseType: "MonitorNotificationRuleResponse",
  },
  "MonitorsApi.V2.DeleteMonitorNotificationRule": {
    ruleId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "MonitorsApi.V2.UpdateMonitorNotificationRule": {
    ruleId: {
      type: "string",
      format: "",
    },
    body: {
      type: "MonitorNotificationRuleUpdateRequest",
      format: "",
    },
    operationResponseType: "MonitorNotificationRuleResponse",
  },
  "MonitorsApi.V2.ListMonitorConfigPolicies": {
    operationResponseType: "MonitorConfigPolicyListResponse",
  },
  "MonitorsApi.V2.CreateMonitorConfigPolicy": {
    body: {
      type: "MonitorConfigPolicyCreateRequest",
      format: "",
    },
    operationResponseType: "MonitorConfigPolicyResponse",
  },
  "MonitorsApi.V2.GetMonitorConfigPolicy": {
    policyId: {
      type: "string",
      format: "",
    },
    operationResponseType: "MonitorConfigPolicyResponse",
  },
  "MonitorsApi.V2.DeleteMonitorConfigPolicy": {
    policyId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "MonitorsApi.V2.UpdateMonitorConfigPolicy": {
    policyId: {
      type: "string",
      format: "",
    },
    body: {
      type: "MonitorConfigPolicyEditRequest",
      format: "",
    },
    operationResponseType: "MonitorConfigPolicyResponse",
  },
  "MonitorsApi.V2.ListMonitorUserTemplates": {
    operationResponseType: "MonitorUserTemplateListResponse",
  },
  "MonitorsApi.V2.CreateMonitorUserTemplate": {
    body: {
      type: "MonitorUserTemplateCreateRequest",
      format: "",
    },
    operationResponseType: "MonitorUserTemplateCreateResponse",
  },
  "MonitorsApi.V2.ValidateMonitorUserTemplate": {
    body: {
      type: "MonitorUserTemplateCreateRequest",
      format: "",
    },
    operationResponseType: "{}",
  },
  "MonitorsApi.V2.GetMonitorUserTemplate": {
    templateId: {
      type: "string",
      format: "",
    },
    withAllVersions: {
      type: "boolean",
      format: "",
    },
    operationResponseType: "MonitorUserTemplateResponse",
  },
  "MonitorsApi.V2.UpdateMonitorUserTemplate": {
    templateId: {
      type: "string",
      format: "",
    },
    body: {
      type: "MonitorUserTemplateUpdateRequest",
      format: "",
    },
    operationResponseType: "MonitorUserTemplateResponse",
  },
  "MonitorsApi.V2.DeleteMonitorUserTemplate": {
    templateId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "MonitorsApi.V2.ValidateExistingMonitorUserTemplate": {
    templateId: {
      type: "string",
      format: "",
    },
    body: {
      type: "MonitorUserTemplateUpdateRequest",
      format: "",
    },
    operationResponseType: "{}",
  },
  "NetworkDeviceMonitoringApi.V2.ListDevices": {
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    sort: {
      type: "string",
      format: "",
    },
    filterTag: {
      type: "string",
      format: "",
    },
    operationResponseType: "ListDevicesResponse",
  },
  "NetworkDeviceMonitoringApi.V2.GetDevice": {
    deviceId: {
      type: "string",
      format: "",
    },
    operationResponseType: "GetDeviceResponse",
  },
  "NetworkDeviceMonitoringApi.V2.GetInterfaces": {
    deviceId: {
      type: "string",
      format: "",
    },
    getIpAddresses: {
      type: "boolean",
      format: "",
    },
    operationResponseType: "GetInterfacesResponse",
  },
  "NetworkDeviceMonitoringApi.V2.ListDeviceUserTags": {
    deviceId: {
      type: "string",
      format: "",
    },
    operationResponseType: "ListTagsResponse",
  },
  "NetworkDeviceMonitoringApi.V2.UpdateDeviceUserTags": {
    deviceId: {
      type: "string",
      format: "",
    },
    body: {
      type: "ListTagsResponse",
      format: "",
    },
    operationResponseType: "ListTagsResponse",
  },
  "CloudNetworkMonitoringApi.V2.GetAggregatedConnections": {
    from: {
      type: "number",
      format: "int64",
    },
    to: {
      type: "number",
      format: "int64",
    },
    groupBy: {
      type: "string",
      format: "",
    },
    tags: {
      type: "string",
      format: "",
    },
    limit: {
      type: "number",
      format: "int32",
    },
    operationResponseType: "SingleAggregatedConnectionResponseArray",
  },
  "CloudNetworkMonitoringApi.V2.GetAggregatedDns": {
    from: {
      type: "number",
      format: "int64",
    },
    to: {
      type: "number",
      format: "int64",
    },
    groupBy: {
      type: "string",
      format: "",
    },
    tags: {
      type: "string",
      format: "",
    },
    limit: {
      type: "number",
      format: "int32",
    },
    operationResponseType: "SingleAggregatedDnsResponseArray",
  },
  "ObservabilityPipelinesApi.V2.ListPipelines": {
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "ListPipelinesResponse",
  },
  "ObservabilityPipelinesApi.V2.CreatePipeline": {
    body: {
      type: "ObservabilityPipelineSpec",
      format: "",
    },
    operationResponseType: "ObservabilityPipeline",
  },
  "ObservabilityPipelinesApi.V2.ValidatePipeline": {
    body: {
      type: "ObservabilityPipelineSpec",
      format: "",
    },
    operationResponseType: "ValidationResponse",
  },
  "ObservabilityPipelinesApi.V2.GetPipeline": {
    pipelineId: {
      type: "string",
      format: "",
    },
    operationResponseType: "ObservabilityPipeline",
  },
  "ObservabilityPipelinesApi.V2.UpdatePipeline": {
    pipelineId: {
      type: "string",
      format: "",
    },
    body: {
      type: "ObservabilityPipeline",
      format: "",
    },
    operationResponseType: "ObservabilityPipeline",
  },
  "ObservabilityPipelinesApi.V2.DeletePipeline": {
    pipelineId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "OnCallApi.V2.CreateOnCallEscalationPolicy": {
    include: {
      type: "string",
      format: "",
    },
    body: {
      type: "EscalationPolicyCreateRequest",
      format: "",
    },
    operationResponseType: "EscalationPolicy",
  },
  "OnCallApi.V2.GetOnCallEscalationPolicy": {
    policyId: {
      type: "string",
      format: "",
    },
    include: {
      type: "string",
      format: "",
    },
    operationResponseType: "EscalationPolicy",
  },
  "OnCallApi.V2.UpdateOnCallEscalationPolicy": {
    policyId: {
      type: "string",
      format: "",
    },
    include: {
      type: "string",
      format: "",
    },
    body: {
      type: "EscalationPolicyUpdateRequest",
      format: "",
    },
    operationResponseType: "EscalationPolicy",
  },
  "OnCallApi.V2.DeleteOnCallEscalationPolicy": {
    policyId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "OnCallApi.V2.CreateOnCallSchedule": {
    include: {
      type: "string",
      format: "",
    },
    body: {
      type: "ScheduleCreateRequest",
      format: "",
    },
    operationResponseType: "Schedule",
  },
  "OnCallApi.V2.GetOnCallSchedule": {
    include: {
      type: "string",
      format: "",
    },
    scheduleId: {
      type: "string",
      format: "",
    },
    operationResponseType: "Schedule",
  },
  "OnCallApi.V2.UpdateOnCallSchedule": {
    include: {
      type: "string",
      format: "",
    },
    scheduleId: {
      type: "string",
      format: "",
    },
    body: {
      type: "ScheduleUpdateRequest",
      format: "",
    },
    operationResponseType: "Schedule",
  },
  "OnCallApi.V2.DeleteOnCallSchedule": {
    scheduleId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "OnCallApi.V2.GetScheduleOnCallUser": {
    include: {
      type: "string",
      format: "",
    },
    scheduleId: {
      type: "string",
      format: "",
    },
    filterAtTs: {
      type: "string",
      format: "",
    },
    operationResponseType: "Shift",
  },
  "OnCallApi.V2.GetTeamOnCallUsers": {
    include: {
      type: "string",
      format: "",
    },
    teamId: {
      type: "string",
      format: "",
    },
    operationResponseType: "TeamOnCallResponders",
  },
  "OnCallApi.V2.GetOnCallTeamRoutingRules": {
    teamId: {
      type: "string",
      format: "",
    },
    include: {
      type: "string",
      format: "",
    },
    operationResponseType: "TeamRoutingRules",
  },
  "OnCallApi.V2.SetOnCallTeamRoutingRules": {
    teamId: {
      type: "string",
      format: "",
    },
    include: {
      type: "string",
      format: "",
    },
    body: {
      type: "TeamRoutingRulesRequest",
      format: "",
    },
    operationResponseType: "TeamRoutingRules",
  },
  "OnCallApi.V2.ListUserNotificationChannels": {
    userId: {
      type: "string",
      format: "",
    },
    operationResponseType: "ListNotificationChannelsResponse",
  },
  "OnCallApi.V2.CreateUserNotificationChannel": {
    userId: {
      type: "string",
      format: "",
    },
    body: {
      type: "CreateUserNotificationChannelRequest",
      format: "",
    },
    operationResponseType: "NotificationChannel",
  },
  "OnCallApi.V2.GetUserNotificationChannel": {
    userId: {
      type: "string",
      format: "",
    },
    channelId: {
      type: "string",
      format: "",
    },
    operationResponseType: "NotificationChannel",
  },
  "OnCallApi.V2.DeleteUserNotificationChannel": {
    userId: {
      type: "string",
      format: "",
    },
    channelId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "OnCallApi.V2.ListUserNotificationRules": {
    include: {
      type: "string",
      format: "",
    },
    userId: {
      type: "string",
      format: "",
    },
    operationResponseType: "ListOnCallNotificationRulesResponse",
  },
  "OnCallApi.V2.CreateUserNotificationRule": {
    userId: {
      type: "string",
      format: "",
    },
    body: {
      type: "CreateOnCallNotificationRuleRequest",
      format: "",
    },
    operationResponseType: "OnCallNotificationRule",
  },
  "OnCallApi.V2.GetUserNotificationRule": {
    userId: {
      type: "string",
      format: "",
    },
    ruleId: {
      type: "string",
      format: "",
    },
    include: {
      type: "string",
      format: "",
    },
    operationResponseType: "OnCallNotificationRule",
  },
  "OnCallApi.V2.UpdateUserNotificationRule": {
    userId: {
      type: "string",
      format: "",
    },
    ruleId: {
      type: "string",
      format: "",
    },
    include: {
      type: "string",
      format: "",
    },
    body: {
      type: "UpdateOnCallNotificationRuleRequest",
      format: "",
    },
    operationResponseType: "OnCallNotificationRule",
  },
  "OnCallApi.V2.DeleteUserNotificationRule": {
    userId: {
      type: "string",
      format: "",
    },
    ruleId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "OnCallPagingApi.V2.CreateOnCallPage": {
    body: {
      type: "CreatePageRequest",
      format: "",
    },
    operationResponseType: "CreatePageResponse",
  },
  "OnCallPagingApi.V2.AcknowledgeOnCallPage": {
    pageId: {
      type: "string",
      format: "uuid",
    },
    operationResponseType: "{}",
  },
  "OnCallPagingApi.V2.EscalateOnCallPage": {
    pageId: {
      type: "string",
      format: "uuid",
    },
    operationResponseType: "{}",
  },
  "OnCallPagingApi.V2.ResolveOnCallPage": {
    pageId: {
      type: "string",
      format: "uuid",
    },
    operationResponseType: "{}",
  },
  "OrganizationsApi.V2.ListOrgConfigs": {
    operationResponseType: "OrgConfigListResponse",
  },
  "OrganizationsApi.V2.GetOrgConfig": {
    orgConfigName: {
      type: "string",
      format: "",
    },
    operationResponseType: "OrgConfigGetResponse",
  },
  "OrganizationsApi.V2.UpdateOrgConfig": {
    orgConfigName: {
      type: "string",
      format: "",
    },
    body: {
      type: "OrgConfigWriteRequest",
      format: "",
    },
    operationResponseType: "OrgConfigGetResponse",
  },
  "OrganizationsApi.V2.UploadIdPMetadata": {
    idpFile: {
      type: "HttpFile",
      format: "binary",
    },
    operationResponseType: "{}",
  },
  "OrgConnectionsApi.V2.ListOrgConnections": {
    sinkOrgId: {
      type: "string",
      format: "",
    },
    sourceOrgId: {
      type: "string",
      format: "",
    },
    limit: {
      type: "number",
      format: "int64",
    },
    offset: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "OrgConnectionListResponse",
  },
  "OrgConnectionsApi.V2.CreateOrgConnections": {
    body: {
      type: "OrgConnectionCreateRequest",
      format: "",
    },
    operationResponseType: "OrgConnectionResponse",
  },
  "OrgConnectionsApi.V2.DeleteOrgConnections": {
    connectionId: {
      type: "string",
      format: "uuid",
    },
    operationResponseType: "{}",
  },
  "OrgConnectionsApi.V2.UpdateOrgConnections": {
    connectionId: {
      type: "string",
      format: "uuid",
    },
    body: {
      type: "OrgConnectionUpdateRequest",
      format: "",
    },
    operationResponseType: "OrgConnectionResponse",
  },
  "RolesApi.V2.ListPermissions": {
    operationResponseType: "PermissionsResponse",
  },
  "RolesApi.V2.ListRoles": {
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    sort: {
      type: "RolesSort",
      format: "",
    },
    filter: {
      type: "string",
      format: "",
    },
    filterId: {
      type: "string",
      format: "",
    },
    operationResponseType: "RolesResponse",
  },
  "RolesApi.V2.CreateRole": {
    body: {
      type: "RoleCreateRequest",
      format: "",
    },
    operationResponseType: "RoleCreateResponse",
  },
  "RolesApi.V2.ListRoleTemplates": {
    operationResponseType: "RoleTemplateArray",
  },
  "RolesApi.V2.GetRole": {
    roleId: {
      type: "string",
      format: "",
    },
    operationResponseType: "RoleResponse",
  },
  "RolesApi.V2.DeleteRole": {
    roleId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "RolesApi.V2.UpdateRole": {
    roleId: {
      type: "string",
      format: "",
    },
    body: {
      type: "RoleUpdateRequest",
      format: "",
    },
    operationResponseType: "RoleUpdateResponse",
  },
  "RolesApi.V2.CloneRole": {
    roleId: {
      type: "string",
      format: "",
    },
    body: {
      type: "RoleCloneRequest",
      format: "",
    },
    operationResponseType: "RoleResponse",
  },
  "RolesApi.V2.ListRolePermissions": {
    roleId: {
      type: "string",
      format: "",
    },
    operationResponseType: "PermissionsResponse",
  },
  "RolesApi.V2.AddPermissionToRole": {
    roleId: {
      type: "string",
      format: "",
    },
    body: {
      type: "RelationshipToPermission",
      format: "",
    },
    operationResponseType: "PermissionsResponse",
  },
  "RolesApi.V2.RemovePermissionFromRole": {
    roleId: {
      type: "string",
      format: "",
    },
    body: {
      type: "RelationshipToPermission",
      format: "",
    },
    operationResponseType: "PermissionsResponse",
  },
  "RolesApi.V2.ListRoleUsers": {
    roleId: {
      type: "string",
      format: "",
    },
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    sort: {
      type: "string",
      format: "",
    },
    filter: {
      type: "string",
      format: "",
    },
    operationResponseType: "UsersResponse",
  },
  "RolesApi.V2.AddUserToRole": {
    roleId: {
      type: "string",
      format: "",
    },
    body: {
      type: "RelationshipToUser",
      format: "",
    },
    operationResponseType: "UsersResponse",
  },
  "RolesApi.V2.RemoveUserFromRole": {
    roleId: {
      type: "string",
      format: "",
    },
    body: {
      type: "RelationshipToUser",
      format: "",
    },
    operationResponseType: "UsersResponse",
  },
  "PowerpackApi.V2.ListPowerpacks": {
    pageLimit: {
      type: "number",
      format: "int64",
    },
    pageOffset: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "ListPowerpacksResponse",
  },
  "PowerpackApi.V2.CreatePowerpack": {
    body: {
      type: "Powerpack",
      format: "",
    },
    operationResponseType: "PowerpackResponse",
  },
  "PowerpackApi.V2.GetPowerpack": {
    powerpackId: {
      type: "string",
      format: "",
    },
    operationResponseType: "PowerpackResponse",
  },
  "PowerpackApi.V2.DeletePowerpack": {
    powerpackId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "PowerpackApi.V2.UpdatePowerpack": {
    powerpackId: {
      type: "string",
      format: "",
    },
    body: {
      type: "Powerpack",
      format: "",
    },
    operationResponseType: "PowerpackResponse",
  },
  "ProcessesApi.V2.ListProcesses": {
    search: {
      type: "string",
      format: "",
    },
    tags: {
      type: "string",
      format: "",
    },
    from: {
      type: "number",
      format: "int64",
    },
    to: {
      type: "number",
      format: "int64",
    },
    pageLimit: {
      type: "number",
      format: "int32",
    },
    pageCursor: {
      type: "string",
      format: "",
    },
    operationResponseType: "ProcessSummariesResponse",
  },
  "ProductAnalyticsApi.V2.SubmitProductAnalyticsEvent": {
    body: {
      type: "ProductAnalyticsServerSideEventItem",
      format: "",
    },
    operationResponseType: "any",
  },
  "RumAudienceManagementApi.V2.GetAccountFacetInfo": {
    body: {
      type: "FacetInfoRequest",
      format: "",
    },
    operationResponseType: "FacetInfoResponse",
  },
  "RumAudienceManagementApi.V2.QueryAccounts": {
    body: {
      type: "QueryAccountRequest",
      format: "",
    },
    operationResponseType: "QueryResponse",
  },
  "RumAudienceManagementApi.V2.QueryEventFilteredUsers": {
    body: {
      type: "QueryEventFilteredUsersRequest",
      format: "",
    },
    operationResponseType: "QueryResponse",
  },
  "RumAudienceManagementApi.V2.GetUserFacetInfo": {
    body: {
      type: "FacetInfoRequest",
      format: "",
    },
    operationResponseType: "FacetInfoResponse",
  },
  "RumAudienceManagementApi.V2.QueryUsers": {
    body: {
      type: "QueryUsersRequest",
      format: "",
    },
    operationResponseType: "QueryResponse",
  },
  "RumAudienceManagementApi.V2.GetMapping": {
    entity: {
      type: "string",
      format: "",
    },
    operationResponseType: "GetMappingResponse",
  },
  "RumAudienceManagementApi.V2.UpdateConnection": {
    entity: {
      type: "string",
      format: "",
    },
    body: {
      type: "UpdateConnectionRequest",
      format: "",
    },
    operationResponseType: "{}",
  },
  "RumAudienceManagementApi.V2.CreateConnection": {
    entity: {
      type: "string",
      format: "",
    },
    body: {
      type: "CreateConnectionRequest",
      format: "",
    },
    operationResponseType: "{}",
  },
  "RumAudienceManagementApi.V2.DeleteConnection": {
    id: {
      type: "string",
      format: "",
    },
    entity: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "RumAudienceManagementApi.V2.ListConnections": {
    entity: {
      type: "string",
      format: "",
    },
    operationResponseType: "ListConnectionsResponse",
  },
  "ReferenceTablesApi.V2.ListTables": {
    pageLimit: {
      type: "number",
      format: "int64",
    },
    pageOffset: {
      type: "number",
      format: "int64",
    },
    sort: {
      type: "ReferenceTableSortType",
      format: "",
    },
    filterStatus: {
      type: "string",
      format: "",
    },
    filterTableNameExact: {
      type: "string",
      format: "",
    },
    filterTableNameContains: {
      type: "string",
      format: "",
    },
    operationResponseType: "TableResultV2Array",
  },
  "ReferenceTablesApi.V2.CreateReferenceTable": {
    body: {
      type: "CreateTableRequest",
      format: "",
    },
    operationResponseType: "TableResultV2",
  },
  "ReferenceTablesApi.V2.GetTable": {
    id: {
      type: "string",
      format: "",
    },
    operationResponseType: "TableResultV2",
  },
  "ReferenceTablesApi.V2.DeleteTable": {
    id: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "ReferenceTablesApi.V2.UpdateReferenceTable": {
    id: {
      type: "string",
      format: "",
    },
    body: {
      type: "PatchTableRequest",
      format: "",
    },
    operationResponseType: "{}",
  },
  "ReferenceTablesApi.V2.GetRowsByID": {
    id: {
      type: "string",
      format: "",
    },
    rowId: {
      type: "Array<string>",
      format: "",
    },
    operationResponseType: "TableRowResourceArray",
  },
  "ReferenceTablesApi.V2.UpsertRows": {
    id: {
      type: "string",
      format: "",
    },
    body: {
      type: "BatchUpsertRowsRequestArray",
      format: "",
    },
    operationResponseType: "{}",
  },
  "ReferenceTablesApi.V2.DeleteRows": {
    id: {
      type: "string",
      format: "",
    },
    body: {
      type: "BatchDeleteRowsRequestArray",
      format: "",
    },
    operationResponseType: "{}",
  },
  "ReferenceTablesApi.V2.CreateReferenceTableUpload": {
    body: {
      type: "CreateUploadRequest",
      format: "",
    },
    operationResponseType: "CreateUploadResponse",
  },
  "ApplicationSecurityApi.V2.ListApplicationSecurityWAFCustomRules": {
    operationResponseType: "ApplicationSecurityWafCustomRuleListResponse",
  },
  "ApplicationSecurityApi.V2.CreateApplicationSecurityWafCustomRule": {
    body: {
      type: "ApplicationSecurityWafCustomRuleCreateRequest",
      format: "",
    },
    operationResponseType: "ApplicationSecurityWafCustomRuleResponse",
  },
  "ApplicationSecurityApi.V2.GetApplicationSecurityWafCustomRule": {
    customRuleId: {
      type: "string",
      format: "",
    },
    operationResponseType: "ApplicationSecurityWafCustomRuleResponse",
  },
  "ApplicationSecurityApi.V2.UpdateApplicationSecurityWafCustomRule": {
    customRuleId: {
      type: "string",
      format: "",
    },
    body: {
      type: "ApplicationSecurityWafCustomRuleUpdateRequest",
      format: "",
    },
    operationResponseType: "ApplicationSecurityWafCustomRuleResponse",
  },
  "ApplicationSecurityApi.V2.DeleteApplicationSecurityWafCustomRule": {
    customRuleId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "ApplicationSecurityApi.V2.ListApplicationSecurityWafExclusionFilters": {
    operationResponseType: "ApplicationSecurityWafExclusionFiltersResponse",
  },
  "ApplicationSecurityApi.V2.CreateApplicationSecurityWafExclusionFilter": {
    body: {
      type: "ApplicationSecurityWafExclusionFilterCreateRequest",
      format: "",
    },
    operationResponseType: "ApplicationSecurityWafExclusionFilterResponse",
  },
  "ApplicationSecurityApi.V2.GetApplicationSecurityWafExclusionFilter": {
    exclusionFilterId: {
      type: "string",
      format: "",
    },
    operationResponseType: "ApplicationSecurityWafExclusionFilterResponse",
  },
  "ApplicationSecurityApi.V2.UpdateApplicationSecurityWafExclusionFilter": {
    exclusionFilterId: {
      type: "string",
      format: "",
    },
    body: {
      type: "ApplicationSecurityWafExclusionFilterUpdateRequest",
      format: "",
    },
    operationResponseType: "ApplicationSecurityWafExclusionFilterResponse",
  },
  "ApplicationSecurityApi.V2.DeleteApplicationSecurityWafExclusionFilter": {
    exclusionFilterId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "CSMThreatsApi.V2.ListCSMThreatsAgentRules": {
    policyId: {
      type: "string",
      format: "",
    },
    operationResponseType: "CloudWorkloadSecurityAgentRulesListResponse",
  },
  "CSMThreatsApi.V2.CreateCSMThreatsAgentRule": {
    body: {
      type: "CloudWorkloadSecurityAgentRuleCreateRequest",
      format: "",
    },
    operationResponseType: "CloudWorkloadSecurityAgentRuleResponse",
  },
  "CSMThreatsApi.V2.GetCSMThreatsAgentRule": {
    agentRuleId: {
      type: "string",
      format: "",
    },
    policyId: {
      type: "string",
      format: "",
    },
    operationResponseType: "CloudWorkloadSecurityAgentRuleResponse",
  },
  "CSMThreatsApi.V2.DeleteCSMThreatsAgentRule": {
    agentRuleId: {
      type: "string",
      format: "",
    },
    policyId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "CSMThreatsApi.V2.UpdateCSMThreatsAgentRule": {
    agentRuleId: {
      type: "string",
      format: "",
    },
    policyId: {
      type: "string",
      format: "",
    },
    body: {
      type: "CloudWorkloadSecurityAgentRuleUpdateRequest",
      format: "",
    },
    operationResponseType: "CloudWorkloadSecurityAgentRuleResponse",
  },
  "CSMThreatsApi.V2.ListCSMThreatsAgentPolicies": {
    operationResponseType: "CloudWorkloadSecurityAgentPoliciesListResponse",
  },
  "CSMThreatsApi.V2.CreateCSMThreatsAgentPolicy": {
    body: {
      type: "CloudWorkloadSecurityAgentPolicyCreateRequest",
      format: "",
    },
    operationResponseType: "CloudWorkloadSecurityAgentPolicyResponse",
  },
  "CSMThreatsApi.V2.DownloadCSMThreatsPolicy": {
    operationResponseType: "HttpFile",
  },
  "CSMThreatsApi.V2.GetCSMThreatsAgentPolicy": {
    policyId: {
      type: "string",
      format: "",
    },
    operationResponseType: "CloudWorkloadSecurityAgentPolicyResponse",
  },
  "CSMThreatsApi.V2.DeleteCSMThreatsAgentPolicy": {
    policyId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "CSMThreatsApi.V2.UpdateCSMThreatsAgentPolicy": {
    policyId: {
      type: "string",
      format: "",
    },
    body: {
      type: "CloudWorkloadSecurityAgentPolicyUpdateRequest",
      format: "",
    },
    operationResponseType: "CloudWorkloadSecurityAgentPolicyResponse",
  },
  "CSMThreatsApi.V2.DownloadCloudWorkloadPolicyFile": {
    operationResponseType: "HttpFile",
  },
  "CSMThreatsApi.V2.ListCloudWorkloadSecurityAgentRules": {
    operationResponseType: "CloudWorkloadSecurityAgentRulesListResponse",
  },
  "CSMThreatsApi.V2.CreateCloudWorkloadSecurityAgentRule": {
    body: {
      type: "CloudWorkloadSecurityAgentRuleCreateRequest",
      format: "",
    },
    operationResponseType: "CloudWorkloadSecurityAgentRuleResponse",
  },
  "CSMThreatsApi.V2.GetCloudWorkloadSecurityAgentRule": {
    agentRuleId: {
      type: "string",
      format: "",
    },
    operationResponseType: "CloudWorkloadSecurityAgentRuleResponse",
  },
  "CSMThreatsApi.V2.DeleteCloudWorkloadSecurityAgentRule": {
    agentRuleId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "CSMThreatsApi.V2.UpdateCloudWorkloadSecurityAgentRule": {
    agentRuleId: {
      type: "string",
      format: "",
    },
    body: {
      type: "CloudWorkloadSecurityAgentRuleUpdateRequest",
      format: "",
    },
    operationResponseType: "CloudWorkloadSecurityAgentRuleResponse",
  },
  "RestrictionPoliciesApi.V2.GetRestrictionPolicy": {
    resourceId: {
      type: "string",
      format: "",
    },
    operationResponseType: "RestrictionPolicyResponse",
  },
  "RestrictionPoliciesApi.V2.UpdateRestrictionPolicy": {
    resourceId: {
      type: "string",
      format: "",
    },
    allowSelfLockout: {
      type: "boolean",
      format: "",
    },
    body: {
      type: "RestrictionPolicyUpdateRequest",
      format: "",
    },
    operationResponseType: "RestrictionPolicyResponse",
  },
  "RestrictionPoliciesApi.V2.DeleteRestrictionPolicy": {
    resourceId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "RUMApi.V2.AggregateRUMEvents": {
    body: {
      type: "RUMAggregateRequest",
      format: "",
    },
    operationResponseType: "RUMAnalyticsAggregateResponse",
  },
  "RUMApi.V2.GetRUMApplications": {
    operationResponseType: "RUMApplicationsResponse",
  },
  "RUMApi.V2.CreateRUMApplication": {
    body: {
      type: "RUMApplicationCreateRequest",
      format: "",
    },
    operationResponseType: "RUMApplicationResponse",
  },
  "RUMApi.V2.GetRUMApplication": {
    id: {
      type: "string",
      format: "",
    },
    operationResponseType: "RUMApplicationResponse",
  },
  "RUMApi.V2.DeleteRUMApplication": {
    id: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "RUMApi.V2.UpdateRUMApplication": {
    id: {
      type: "string",
      format: "",
    },
    body: {
      type: "RUMApplicationUpdateRequest",
      format: "",
    },
    operationResponseType: "RUMApplicationResponse",
  },
  "RUMApi.V2.ListRUMEvents": {
    filterQuery: {
      type: "string",
      format: "",
    },
    filterFrom: {
      type: "Date",
      format: "date-time",
    },
    filterTo: {
      type: "Date",
      format: "date-time",
    },
    sort: {
      type: "RUMSort",
      format: "",
    },
    pageCursor: {
      type: "string",
      format: "",
    },
    pageLimit: {
      type: "number",
      format: "int32",
    },
    operationResponseType: "RUMEventsResponse",
  },
  "RUMApi.V2.SearchRUMEvents": {
    body: {
      type: "RUMSearchEventsRequest",
      format: "",
    },
    operationResponseType: "RUMEventsResponse",
  },
  "RumRetentionFiltersApi.V2.OrderRetentionFilters": {
    appId: {
      type: "string",
      format: "",
    },
    body: {
      type: "RumRetentionFiltersOrderRequest",
      format: "",
    },
    operationResponseType: "RumRetentionFiltersOrderResponse",
  },
  "RumRetentionFiltersApi.V2.ListRetentionFilters": {
    appId: {
      type: "string",
      format: "",
    },
    operationResponseType: "RumRetentionFiltersResponse",
  },
  "RumRetentionFiltersApi.V2.CreateRetentionFilter": {
    appId: {
      type: "string",
      format: "",
    },
    body: {
      type: "RumRetentionFilterCreateRequest",
      format: "",
    },
    operationResponseType: "RumRetentionFilterResponse",
  },
  "RumRetentionFiltersApi.V2.GetRetentionFilter": {
    appId: {
      type: "string",
      format: "",
    },
    rfId: {
      type: "string",
      format: "",
    },
    operationResponseType: "RumRetentionFilterResponse",
  },
  "RumRetentionFiltersApi.V2.DeleteRetentionFilter": {
    appId: {
      type: "string",
      format: "",
    },
    rfId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "RumRetentionFiltersApi.V2.UpdateRetentionFilter": {
    appId: {
      type: "string",
      format: "",
    },
    rfId: {
      type: "string",
      format: "",
    },
    body: {
      type: "RumRetentionFilterUpdateRequest",
      format: "",
    },
    operationResponseType: "RumRetentionFilterResponse",
  },
  "RumMetricsApi.V2.ListRumMetrics": {
    operationResponseType: "RumMetricsResponse",
  },
  "RumMetricsApi.V2.CreateRumMetric": {
    body: {
      type: "RumMetricCreateRequest",
      format: "",
    },
    operationResponseType: "RumMetricResponse",
  },
  "RumMetricsApi.V2.GetRumMetric": {
    metricId: {
      type: "string",
      format: "",
    },
    operationResponseType: "RumMetricResponse",
  },
  "RumMetricsApi.V2.DeleteRumMetric": {
    metricId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "RumMetricsApi.V2.UpdateRumMetric": {
    metricId: {
      type: "string",
      format: "",
    },
    body: {
      type: "RumMetricUpdateRequest",
      format: "",
    },
    operationResponseType: "RumMetricResponse",
  },
  "ServiceScorecardsApi.V2.ListScorecardOutcomes": {
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageOffset: {
      type: "number",
      format: "int64",
    },
    include: {
      type: "string",
      format: "",
    },
    fieldsOutcome: {
      type: "string",
      format: "",
    },
    fieldsRule: {
      type: "string",
      format: "",
    },
    filterOutcomeServiceName: {
      type: "string",
      format: "",
    },
    filterOutcomeState: {
      type: "string",
      format: "",
    },
    filterRuleEnabled: {
      type: "boolean",
      format: "",
    },
    filterRuleId: {
      type: "string",
      format: "",
    },
    filterRuleName: {
      type: "string",
      format: "",
    },
    operationResponseType: "OutcomesResponse",
  },
  "ServiceScorecardsApi.V2.UpdateScorecardOutcomesAsync": {
    body: {
      type: "UpdateOutcomesAsyncRequest",
      format: "",
    },
    operationResponseType: "{}",
  },
  "ServiceScorecardsApi.V2.CreateScorecardOutcomesBatch": {
    body: {
      type: "OutcomesBatchRequest",
      format: "",
    },
    operationResponseType: "OutcomesBatchResponse",
  },
  "ServiceScorecardsApi.V2.ListScorecardRules": {
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageOffset: {
      type: "number",
      format: "int64",
    },
    include: {
      type: "string",
      format: "",
    },
    filterRuleId: {
      type: "string",
      format: "",
    },
    filterRuleEnabled: {
      type: "boolean",
      format: "",
    },
    filterRuleCustom: {
      type: "boolean",
      format: "",
    },
    filterRuleName: {
      type: "string",
      format: "",
    },
    filterRuleDescription: {
      type: "string",
      format: "",
    },
    fieldsRule: {
      type: "string",
      format: "",
    },
    fieldsScorecard: {
      type: "string",
      format: "",
    },
    operationResponseType: "ListRulesResponse",
  },
  "ServiceScorecardsApi.V2.CreateScorecardRule": {
    body: {
      type: "CreateRuleRequest",
      format: "",
    },
    operationResponseType: "CreateRuleResponse",
  },
  "ServiceScorecardsApi.V2.UpdateScorecardRule": {
    ruleId: {
      type: "string",
      format: "",
    },
    body: {
      type: "UpdateRuleRequest",
      format: "",
    },
    operationResponseType: "UpdateRuleResponse",
  },
  "ServiceScorecardsApi.V2.DeleteScorecardRule": {
    ruleId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "EntityRiskScoresApi.V2.ListEntityRiskScores": {
    from: {
      type: "number",
      format: "int64",
    },
    to: {
      type: "number",
      format: "int64",
    },
    pageSize: {
      type: "number",
      format: "",
    },
    pageNumber: {
      type: "number",
      format: "",
    },
    pageQueryId: {
      type: "string",
      format: "",
    },
    filterSort: {
      type: "string",
      format: "",
    },
    filterQuery: {
      type: "string",
      format: "",
    },
    entityType: {
      type: "Array<string>",
      format: "",
    },
    operationResponseType: "SecurityEntityRiskScoresResponse",
  },
  "SensitiveDataScannerApi.V2.ListScanningGroups": {
    operationResponseType: "SensitiveDataScannerGetConfigResponse",
  },
  "SensitiveDataScannerApi.V2.ReorderScanningGroups": {
    body: {
      type: "SensitiveDataScannerConfigRequest",
      format: "",
    },
    operationResponseType: "SensitiveDataScannerReorderGroupsResponse",
  },
  "SensitiveDataScannerApi.V2.CreateScanningGroup": {
    body: {
      type: "SensitiveDataScannerGroupCreateRequest",
      format: "",
    },
    operationResponseType: "SensitiveDataScannerCreateGroupResponse",
  },
  "SensitiveDataScannerApi.V2.DeleteScanningGroup": {
    groupId: {
      type: "string",
      format: "",
    },
    body: {
      type: "SensitiveDataScannerGroupDeleteRequest",
      format: "",
    },
    operationResponseType: "SensitiveDataScannerGroupDeleteResponse",
  },
  "SensitiveDataScannerApi.V2.UpdateScanningGroup": {
    groupId: {
      type: "string",
      format: "",
    },
    body: {
      type: "SensitiveDataScannerGroupUpdateRequest",
      format: "",
    },
    operationResponseType: "SensitiveDataScannerGroupUpdateResponse",
  },
  "SensitiveDataScannerApi.V2.CreateScanningRule": {
    body: {
      type: "SensitiveDataScannerRuleCreateRequest",
      format: "",
    },
    operationResponseType: "SensitiveDataScannerCreateRuleResponse",
  },
  "SensitiveDataScannerApi.V2.DeleteScanningRule": {
    ruleId: {
      type: "string",
      format: "",
    },
    body: {
      type: "SensitiveDataScannerRuleDeleteRequest",
      format: "",
    },
    operationResponseType: "SensitiveDataScannerRuleDeleteResponse",
  },
  "SensitiveDataScannerApi.V2.UpdateScanningRule": {
    ruleId: {
      type: "string",
      format: "",
    },
    body: {
      type: "SensitiveDataScannerRuleUpdateRequest",
      format: "",
    },
    operationResponseType: "SensitiveDataScannerRuleUpdateResponse",
  },
  "SensitiveDataScannerApi.V2.ListStandardPatterns": {
    operationResponseType: "SensitiveDataScannerStandardPatternsResponseData",
  },
  "ServiceAccountsApi.V2.CreateServiceAccount": {
    body: {
      type: "ServiceAccountCreateRequest",
      format: "",
    },
    operationResponseType: "UserResponse",
  },
  "ServiceAccountsApi.V2.ListServiceAccountApplicationKeys": {
    serviceAccountId: {
      type: "string",
      format: "",
    },
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    sort: {
      type: "ApplicationKeysSort",
      format: "",
    },
    filter: {
      type: "string",
      format: "",
    },
    filterCreatedAtStart: {
      type: "string",
      format: "",
    },
    filterCreatedAtEnd: {
      type: "string",
      format: "",
    },
    operationResponseType: "ListApplicationKeysResponse",
  },
  "ServiceAccountsApi.V2.CreateServiceAccountApplicationKey": {
    serviceAccountId: {
      type: "string",
      format: "",
    },
    body: {
      type: "ApplicationKeyCreateRequest",
      format: "",
    },
    operationResponseType: "ApplicationKeyResponse",
  },
  "ServiceAccountsApi.V2.GetServiceAccountApplicationKey": {
    serviceAccountId: {
      type: "string",
      format: "",
    },
    appKeyId: {
      type: "string",
      format: "",
    },
    operationResponseType: "PartialApplicationKeyResponse",
  },
  "ServiceAccountsApi.V2.DeleteServiceAccountApplicationKey": {
    serviceAccountId: {
      type: "string",
      format: "",
    },
    appKeyId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "ServiceAccountsApi.V2.UpdateServiceAccountApplicationKey": {
    serviceAccountId: {
      type: "string",
      format: "",
    },
    appKeyId: {
      type: "string",
      format: "",
    },
    body: {
      type: "ApplicationKeyUpdateRequest",
      format: "",
    },
    operationResponseType: "PartialApplicationKeyResponse",
  },
  "IncidentServicesApi.V2.ListIncidentServices": {
    include: {
      type: "IncidentRelatedObject",
      format: "",
    },
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageOffset: {
      type: "number",
      format: "int64",
    },
    filter: {
      type: "string",
      format: "",
    },
    operationResponseType: "IncidentServicesResponse",
  },
  "IncidentServicesApi.V2.CreateIncidentService": {
    body: {
      type: "IncidentServiceCreateRequest",
      format: "",
    },
    operationResponseType: "IncidentServiceResponse",
  },
  "IncidentServicesApi.V2.GetIncidentService": {
    serviceId: {
      type: "string",
      format: "",
    },
    include: {
      type: "IncidentRelatedObject",
      format: "",
    },
    operationResponseType: "IncidentServiceResponse",
  },
  "IncidentServicesApi.V2.DeleteIncidentService": {
    serviceId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "IncidentServicesApi.V2.UpdateIncidentService": {
    serviceId: {
      type: "string",
      format: "",
    },
    body: {
      type: "IncidentServiceUpdateRequest",
      format: "",
    },
    operationResponseType: "IncidentServiceResponse",
  },
  "ServiceDefinitionApi.V2.ListServiceDefinitions": {
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    schemaVersion: {
      type: "ServiceDefinitionSchemaVersions",
      format: "",
    },
    operationResponseType: "ServiceDefinitionsListResponse",
  },
  "ServiceDefinitionApi.V2.CreateOrUpdateServiceDefinitions": {
    body: {
      type: "ServiceDefinitionsCreateRequest",
      format: "",
    },
    operationResponseType: "ServiceDefinitionCreateResponse",
  },
  "ServiceDefinitionApi.V2.GetServiceDefinition": {
    serviceName: {
      type: "string",
      format: "",
    },
    schemaVersion: {
      type: "ServiceDefinitionSchemaVersions",
      format: "",
    },
    operationResponseType: "ServiceDefinitionGetResponse",
  },
  "ServiceDefinitionApi.V2.DeleteServiceDefinition": {
    serviceName: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "ServiceLevelObjectivesApi.V2.CreateSLOReportJob": {
    body: {
      type: "SloReportCreateRequest",
      format: "",
    },
    operationResponseType: "SLOReportPostResponse",
  },
  "ServiceLevelObjectivesApi.V2.GetSLOReport": {
    reportId: {
      type: "string",
      format: "",
    },
    operationResponseType: "string",
  },
  "ServiceLevelObjectivesApi.V2.GetSLOReportJobStatus": {
    reportId: {
      type: "string",
      format: "",
    },
    operationResponseType: "SLOReportStatusGetResponse",
  },
  "SpaApi.V2.GetSPARecommendations": {
    bypassCache: {
      type: "string",
      format: "",
    },
    service: {
      type: "string",
      format: "",
    },
    operationResponseType: "RecommendationDocument",
  },
  "SpaApi.V2.GetSPARecommendationsWithShard": {
    shard: {
      type: "string",
      format: "",
    },
    service: {
      type: "string",
      format: "",
    },
    bypassCache: {
      type: "string",
      format: "",
    },
    operationResponseType: "RecommendationDocument",
  },
  "SpansApi.V2.AggregateSpans": {
    body: {
      type: "SpansAggregateRequest",
      format: "",
    },
    operationResponseType: "SpansAggregateResponse",
  },
  "SpansApi.V2.ListSpansGet": {
    filterQuery: {
      type: "string",
      format: "",
    },
    filterFrom: {
      type: "string",
      format: "",
    },
    filterTo: {
      type: "string",
      format: "",
    },
    sort: {
      type: "SpansSort",
      format: "",
    },
    pageCursor: {
      type: "string",
      format: "",
    },
    pageLimit: {
      type: "number",
      format: "int32",
    },
    operationResponseType: "SpansListResponse",
  },
  "SpansApi.V2.ListSpans": {
    body: {
      type: "SpansListRequest",
      format: "",
    },
    operationResponseType: "SpansListResponse",
  },
  "StaticAnalysisApi.V2.CreateSCAResult": {
    body: {
      type: "ScaRequest",
      format: "",
    },
    operationResponseType: "{}",
  },
  "StaticAnalysisApi.V2.CreateSCAResolveVulnerableSymbols": {
    body: {
      type: "ResolveVulnerableSymbolsRequest",
      format: "",
    },
    operationResponseType: "ResolveVulnerableSymbolsResponse",
  },
  "StaticAnalysisApi.V2.GetCustomRuleset": {
    rulesetName: {
      type: "string",
      format: "",
    },
    operationResponseType: "CustomRulesetResponse",
  },
  "StaticAnalysisApi.V2.DeleteCustomRuleset": {
    rulesetName: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "StaticAnalysisApi.V2.UpdateCustomRuleset": {
    rulesetName: {
      type: "string",
      format: "",
    },
    body: {
      type: "CustomRulesetRequest",
      format: "",
    },
    operationResponseType: "CustomRulesetResponse",
  },
  "StaticAnalysisApi.V2.CreateCustomRule": {
    rulesetName: {
      type: "string",
      format: "",
    },
    body: {
      type: "CustomRuleRequest",
      format: "",
    },
    operationResponseType: "CustomRuleResponse",
  },
  "StaticAnalysisApi.V2.GetCustomRule": {
    rulesetName: {
      type: "string",
      format: "",
    },
    ruleName: {
      type: "string",
      format: "",
    },
    operationResponseType: "CustomRuleResponse",
  },
  "StaticAnalysisApi.V2.DeleteCustomRule": {
    rulesetName: {
      type: "string",
      format: "",
    },
    ruleName: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "StaticAnalysisApi.V2.ListCustomRuleRevisions": {
    rulesetName: {
      type: "string",
      format: "",
    },
    ruleName: {
      type: "string",
      format: "",
    },
    pageOffset: {
      type: "number",
      format: "",
    },
    pageLimit: {
      type: "number",
      format: "",
    },
    operationResponseType: "CustomRuleRevisionsResponse",
  },
  "StaticAnalysisApi.V2.CreateCustomRuleRevision": {
    rulesetName: {
      type: "string",
      format: "",
    },
    ruleName: {
      type: "string",
      format: "",
    },
    body: {
      type: "CustomRuleRevisionRequest",
      format: "",
    },
    operationResponseType: "{}",
  },
  "StaticAnalysisApi.V2.RevertCustomRuleRevision": {
    rulesetName: {
      type: "string",
      format: "",
    },
    ruleName: {
      type: "string",
      format: "",
    },
    body: {
      type: "RevertCustomRuleRevisionRequest",
      format: "",
    },
    operationResponseType: "{}",
  },
  "StaticAnalysisApi.V2.GetCustomRuleRevision": {
    rulesetName: {
      type: "string",
      format: "",
    },
    ruleName: {
      type: "string",
      format: "",
    },
    id: {
      type: "string",
      format: "",
    },
    operationResponseType: "CustomRuleRevisionResponse",
  },
  "StatusPagesApi.V2.ListStatusPages": {
    pageOffset: {
      type: "number",
      format: "",
    },
    pageLimit: {
      type: "number",
      format: "",
    },
    include: {
      type: "string",
      format: "",
    },
    operationResponseType: "StatusPageArray",
  },
  "StatusPagesApi.V2.CreateStatusPage": {
    include: {
      type: "string",
      format: "",
    },
    body: {
      type: "CreateStatusPageRequest",
      format: "",
    },
    operationResponseType: "StatusPage",
  },
  "StatusPagesApi.V2.ListDegradations": {
    filterPageId: {
      type: "string",
      format: "",
    },
    pageOffset: {
      type: "number",
      format: "",
    },
    pageLimit: {
      type: "number",
      format: "",
    },
    include: {
      type: "string",
      format: "",
    },
    filterStatus: {
      type: "string",
      format: "",
    },
    operationResponseType: "DegradationArray",
  },
  "StatusPagesApi.V2.GetStatusPage": {
    pageId: {
      type: "string",
      format: "uuid",
    },
    include: {
      type: "string",
      format: "",
    },
    operationResponseType: "StatusPage",
  },
  "StatusPagesApi.V2.DeleteStatusPage": {
    pageId: {
      type: "string",
      format: "uuid",
    },
    operationResponseType: "{}",
  },
  "StatusPagesApi.V2.UpdateStatusPage": {
    deleteSubscribers: {
      type: "boolean",
      format: "",
    },
    pageId: {
      type: "string",
      format: "uuid",
    },
    include: {
      type: "string",
      format: "",
    },
    body: {
      type: "PatchStatusPageRequest",
      format: "",
    },
    operationResponseType: "StatusPage",
  },
  "StatusPagesApi.V2.ListComponents": {
    pageId: {
      type: "string",
      format: "uuid",
    },
    include: {
      type: "string",
      format: "",
    },
    operationResponseType: "StatusPagesComponentArray",
  },
  "StatusPagesApi.V2.CreateComponent": {
    pageId: {
      type: "string",
      format: "uuid",
    },
    include: {
      type: "string",
      format: "",
    },
    body: {
      type: "CreateComponentRequest",
      format: "",
    },
    operationResponseType: "StatusPagesComponent",
  },
  "StatusPagesApi.V2.GetComponent": {
    pageId: {
      type: "string",
      format: "uuid",
    },
    componentId: {
      type: "string",
      format: "uuid",
    },
    include: {
      type: "string",
      format: "",
    },
    operationResponseType: "StatusPagesComponent",
  },
  "StatusPagesApi.V2.DeleteComponent": {
    pageId: {
      type: "string",
      format: "uuid",
    },
    componentId: {
      type: "string",
      format: "uuid",
    },
    operationResponseType: "{}",
  },
  "StatusPagesApi.V2.UpdateComponent": {
    pageId: {
      type: "string",
      format: "uuid",
    },
    componentId: {
      type: "string",
      format: "uuid",
    },
    include: {
      type: "string",
      format: "",
    },
    body: {
      type: "PatchComponentRequest",
      format: "",
    },
    operationResponseType: "StatusPagesComponent",
  },
  "StatusPagesApi.V2.CreateDegradation": {
    pageId: {
      type: "string",
      format: "uuid",
    },
    notifySubscribers: {
      type: "boolean",
      format: "",
    },
    include: {
      type: "string",
      format: "",
    },
    body: {
      type: "CreateDegradationRequest",
      format: "",
    },
    operationResponseType: "Degradation",
  },
  "StatusPagesApi.V2.GetDegradation": {
    pageId: {
      type: "string",
      format: "uuid",
    },
    degradationId: {
      type: "string",
      format: "uuid",
    },
    include: {
      type: "string",
      format: "",
    },
    operationResponseType: "Degradation",
  },
  "StatusPagesApi.V2.DeleteDegradation": {
    pageId: {
      type: "string",
      format: "uuid",
    },
    degradationId: {
      type: "string",
      format: "uuid",
    },
    operationResponseType: "{}",
  },
  "StatusPagesApi.V2.UpdateDegradation": {
    pageId: {
      type: "string",
      format: "uuid",
    },
    notifySubscribers: {
      type: "boolean",
      format: "",
    },
    degradationId: {
      type: "string",
      format: "uuid",
    },
    include: {
      type: "string",
      format: "",
    },
    body: {
      type: "PatchDegradationRequest",
      format: "",
    },
    operationResponseType: "Degradation",
  },
  "SyntheticsApi.V2.GetOnDemandConcurrencyCap": {
    operationResponseType: "OnDemandConcurrencyCapResponse",
  },
  "SyntheticsApi.V2.SetOnDemandConcurrencyCap": {
    body: {
      type: "OnDemandConcurrencyCapAttributes",
      format: "",
    },
    operationResponseType: "OnDemandConcurrencyCapResponse",
  },
  "SyntheticsApi.V2.CreateSyntheticsSuite": {
    body: {
      type: "SuiteCreateEditRequest",
      format: "",
    },
    operationResponseType: "SyntheticsSuiteResponse",
  },
  "SyntheticsApi.V2.DeleteSyntheticsSuites": {
    body: {
      type: "DeletedSuitesRequestDeleteRequest",
      format: "",
    },
    operationResponseType: "DeletedSuitesResponse",
  },
  "SyntheticsApi.V2.SearchSuites": {
    query: {
      type: "string",
      format: "",
    },
    sort: {
      type: "string",
      format: "",
    },
    facetsOnly: {
      type: "boolean",
      format: "",
    },
    start: {
      type: "number",
      format: "int64",
    },
    count: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "SyntheticsSuiteSearchResponse",
  },
  "SyntheticsApi.V2.GetSyntheticsSuite": {
    publicId: {
      type: "string",
      format: "",
    },
    operationResponseType: "SyntheticsSuiteResponse",
  },
  "SyntheticsApi.V2.EditSyntheticsSuite": {
    publicId: {
      type: "string",
      format: "",
    },
    body: {
      type: "SuiteCreateEditRequest",
      format: "",
    },
    operationResponseType: "SyntheticsSuiteResponse",
  },
  "SyntheticsApi.V2.PatchGlobalVariable": {
    variableId: {
      type: "string",
      format: "",
    },
    body: {
      type: "GlobalVariableJsonPatchRequest",
      format: "",
    },
    operationResponseType: "GlobalVariableResponse",
  },
  "TeamsApi.V2.ListTeams": {
    pageNumber: {
      type: "number",
      format: "int64",
    },
    pageSize: {
      type: "number",
      format: "int64",
    },
    sort: {
      type: "ListTeamsSort",
      format: "",
    },
    include: {
      type: "Array<ListTeamsInclude>",
      format: "",
    },
    filterKeyword: {
      type: "string",
      format: "",
    },
    filterMe: {
      type: "boolean",
      format: "",
    },
    fieldsTeam: {
      type: "Array<TeamsField>",
      format: "",
    },
    operationResponseType: "TeamsResponse",
  },
  "TeamsApi.V2.CreateTeam": {
    body: {
      type: "TeamCreateRequest",
      format: "",
    },
    operationResponseType: "TeamResponse",
  },
  "TeamsApi.V2.ListTeamHierarchyLinks": {
    pageNumber: {
      type: "number",
      format: "int64",
    },
    pageSize: {
      type: "number",
      format: "int64",
    },
    filterParentTeam: {
      type: "string",
      format: "",
    },
    filterSubTeam: {
      type: "string",
      format: "",
    },
    operationResponseType: "TeamHierarchyLinksResponse",
  },
  "TeamsApi.V2.AddTeamHierarchyLink": {
    body: {
      type: "TeamHierarchyLinkCreateRequest",
      format: "",
    },
    operationResponseType: "TeamHierarchyLinkResponse",
  },
  "TeamsApi.V2.GetTeamHierarchyLink": {
    linkId: {
      type: "string",
      format: "",
    },
    operationResponseType: "TeamHierarchyLinkResponse",
  },
  "TeamsApi.V2.RemoveTeamHierarchyLink": {
    linkId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "TeamsApi.V2.ListTeamConnections": {
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    filterSources: {
      type: "Array<string>",
      format: "",
    },
    filterTeamIds: {
      type: "Array<string>",
      format: "",
    },
    filterConnectedTeamIds: {
      type: "Array<string>",
      format: "",
    },
    filterConnectionIds: {
      type: "Array<string>",
      format: "",
    },
    operationResponseType: "TeamConnectionsResponse",
  },
  "TeamsApi.V2.CreateTeamConnections": {
    body: {
      type: "TeamConnectionCreateRequest",
      format: "",
    },
    operationResponseType: "TeamConnectionsResponse",
  },
  "TeamsApi.V2.DeleteTeamConnections": {
    body: {
      type: "TeamConnectionDeleteRequest",
      format: "",
    },
    operationResponseType: "{}",
  },
  "TeamsApi.V2.GetTeamSync": {
    filterSource: {
      type: "TeamSyncAttributesSource",
      format: "",
    },
    operationResponseType: "TeamSyncResponse",
  },
  "TeamsApi.V2.SyncTeams": {
    body: {
      type: "TeamSyncRequest",
      format: "",
    },
    operationResponseType: "{}",
  },
  "TeamsApi.V2.ListMemberTeams": {
    superTeamId: {
      type: "string",
      format: "",
    },
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    fieldsTeam: {
      type: "Array<TeamsField>",
      format: "",
    },
    operationResponseType: "TeamsResponse",
  },
  "TeamsApi.V2.AddMemberTeam": {
    superTeamId: {
      type: "string",
      format: "",
    },
    body: {
      type: "AddMemberTeamRequest",
      format: "",
    },
    operationResponseType: "{}",
  },
  "TeamsApi.V2.RemoveMemberTeam": {
    superTeamId: {
      type: "string",
      format: "",
    },
    memberTeamId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "TeamsApi.V2.GetTeam": {
    teamId: {
      type: "string",
      format: "",
    },
    operationResponseType: "TeamResponse",
  },
  "TeamsApi.V2.DeleteTeam": {
    teamId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "TeamsApi.V2.UpdateTeam": {
    teamId: {
      type: "string",
      format: "",
    },
    body: {
      type: "TeamUpdateRequest",
      format: "",
    },
    operationResponseType: "TeamResponse",
  },
  "TeamsApi.V2.GetTeamLinks": {
    teamId: {
      type: "string",
      format: "",
    },
    operationResponseType: "TeamLinksResponse",
  },
  "TeamsApi.V2.CreateTeamLink": {
    teamId: {
      type: "string",
      format: "",
    },
    body: {
      type: "TeamLinkCreateRequest",
      format: "",
    },
    operationResponseType: "TeamLinkResponse",
  },
  "TeamsApi.V2.GetTeamLink": {
    teamId: {
      type: "string",
      format: "",
    },
    linkId: {
      type: "string",
      format: "",
    },
    operationResponseType: "TeamLinkResponse",
  },
  "TeamsApi.V2.DeleteTeamLink": {
    teamId: {
      type: "string",
      format: "",
    },
    linkId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "TeamsApi.V2.UpdateTeamLink": {
    teamId: {
      type: "string",
      format: "",
    },
    linkId: {
      type: "string",
      format: "",
    },
    body: {
      type: "TeamLinkCreateRequest",
      format: "",
    },
    operationResponseType: "TeamLinkResponse",
  },
  "TeamsApi.V2.GetTeamMemberships": {
    teamId: {
      type: "string",
      format: "",
    },
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    sort: {
      type: "GetTeamMembershipsSort",
      format: "",
    },
    filterKeyword: {
      type: "string",
      format: "",
    },
    operationResponseType: "UserTeamsResponse",
  },
  "TeamsApi.V2.CreateTeamMembership": {
    teamId: {
      type: "string",
      format: "",
    },
    body: {
      type: "UserTeamRequest",
      format: "",
    },
    operationResponseType: "UserTeamResponse",
  },
  "TeamsApi.V2.DeleteTeamMembership": {
    teamId: {
      type: "string",
      format: "",
    },
    userId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "TeamsApi.V2.UpdateTeamMembership": {
    teamId: {
      type: "string",
      format: "",
    },
    userId: {
      type: "string",
      format: "",
    },
    body: {
      type: "UserTeamUpdateRequest",
      format: "",
    },
    operationResponseType: "UserTeamResponse",
  },
  "TeamsApi.V2.GetTeamNotificationRules": {
    teamId: {
      type: "string",
      format: "",
    },
    operationResponseType: "TeamNotificationRulesResponse",
  },
  "TeamsApi.V2.CreateTeamNotificationRule": {
    teamId: {
      type: "string",
      format: "",
    },
    body: {
      type: "TeamNotificationRuleRequest",
      format: "",
    },
    operationResponseType: "TeamNotificationRuleResponse",
  },
  "TeamsApi.V2.GetTeamNotificationRule": {
    teamId: {
      type: "string",
      format: "",
    },
    ruleId: {
      type: "string",
      format: "",
    },
    operationResponseType: "TeamNotificationRuleResponse",
  },
  "TeamsApi.V2.UpdateTeamNotificationRule": {
    teamId: {
      type: "string",
      format: "",
    },
    ruleId: {
      type: "string",
      format: "",
    },
    body: {
      type: "TeamNotificationRuleRequest",
      format: "",
    },
    operationResponseType: "TeamNotificationRuleResponse",
  },
  "TeamsApi.V2.DeleteTeamNotificationRule": {
    teamId: {
      type: "string",
      format: "",
    },
    ruleId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "TeamsApi.V2.GetTeamPermissionSettings": {
    teamId: {
      type: "string",
      format: "",
    },
    operationResponseType: "TeamPermissionSettingsResponse",
  },
  "TeamsApi.V2.UpdateTeamPermissionSetting": {
    teamId: {
      type: "string",
      format: "",
    },
    action: {
      type: "string",
      format: "",
    },
    body: {
      type: "TeamPermissionSettingUpdateRequest",
      format: "",
    },
    operationResponseType: "TeamPermissionSettingResponse",
  },
  "TeamsApi.V2.GetUserMemberships": {
    userUuid: {
      type: "string",
      format: "",
    },
    operationResponseType: "UserTeamsResponse",
  },
  "IncidentTeamsApi.V2.ListIncidentTeams": {
    include: {
      type: "IncidentRelatedObject",
      format: "",
    },
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageOffset: {
      type: "number",
      format: "int64",
    },
    filter: {
      type: "string",
      format: "",
    },
    operationResponseType: "IncidentTeamsResponse",
  },
  "IncidentTeamsApi.V2.CreateIncidentTeam": {
    body: {
      type: "IncidentTeamCreateRequest",
      format: "",
    },
    operationResponseType: "IncidentTeamResponse",
  },
  "IncidentTeamsApi.V2.GetIncidentTeam": {
    teamId: {
      type: "string",
      format: "",
    },
    include: {
      type: "IncidentRelatedObject",
      format: "",
    },
    operationResponseType: "IncidentTeamResponse",
  },
  "IncidentTeamsApi.V2.DeleteIncidentTeam": {
    teamId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "IncidentTeamsApi.V2.UpdateIncidentTeam": {
    teamId: {
      type: "string",
      format: "",
    },
    body: {
      type: "IncidentTeamUpdateRequest",
      format: "",
    },
    operationResponseType: "IncidentTeamResponse",
  },
  "TestOptimizationApi.V2.SearchFlakyTests": {
    body: {
      type: "FlakyTestsSearchRequest",
      format: "",
    },
    operationResponseType: "FlakyTestsSearchResponse",
  },
  "TestOptimizationApi.V2.UpdateFlakyTests": {
    body: {
      type: "UpdateFlakyTestsRequest",
      format: "",
    },
    operationResponseType: "UpdateFlakyTestsResponse",
  },
  "UsersApi.V2.SendInvitations": {
    body: {
      type: "UserInvitationsRequest",
      format: "",
    },
    operationResponseType: "UserInvitationsResponse",
  },
  "UsersApi.V2.GetInvitation": {
    userInvitationUuid: {
      type: "string",
      format: "",
    },
    operationResponseType: "UserInvitationResponse",
  },
  "UsersApi.V2.ListUsers": {
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    sort: {
      type: "string",
      format: "",
    },
    sortDir: {
      type: "QuerySortOrder",
      format: "",
    },
    filter: {
      type: "string",
      format: "",
    },
    filterStatus: {
      type: "string",
      format: "",
    },
    operationResponseType: "UsersResponse",
  },
  "UsersApi.V2.CreateUser": {
    body: {
      type: "UserCreateRequest",
      format: "",
    },
    operationResponseType: "UserResponse",
  },
  "UsersApi.V2.GetUser": {
    userId: {
      type: "string",
      format: "",
    },
    operationResponseType: "UserResponse",
  },
  "UsersApi.V2.DisableUser": {
    userId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "UsersApi.V2.UpdateUser": {
    userId: {
      type: "string",
      format: "",
    },
    body: {
      type: "UserUpdateRequest",
      format: "",
    },
    operationResponseType: "UserResponse",
  },
  "UsersApi.V2.ListUserOrganizations": {
    userId: {
      type: "string",
      format: "",
    },
    operationResponseType: "UserResponse",
  },
  "UsersApi.V2.ListUserPermissions": {
    userId: {
      type: "string",
      format: "",
    },
    operationResponseType: "PermissionsResponse",
  },
  "WorkflowAutomationApi.V2.CreateWorkflow": {
    body: {
      type: "CreateWorkflowRequest",
      format: "",
    },
    operationResponseType: "CreateWorkflowResponse",
  },
  "WorkflowAutomationApi.V2.GetWorkflow": {
    workflowId: {
      type: "string",
      format: "",
    },
    operationResponseType: "GetWorkflowResponse",
  },
  "WorkflowAutomationApi.V2.DeleteWorkflow": {
    workflowId: {
      type: "string",
      format: "",
    },
    operationResponseType: "{}",
  },
  "WorkflowAutomationApi.V2.UpdateWorkflow": {
    workflowId: {
      type: "string",
      format: "",
    },
    body: {
      type: "UpdateWorkflowRequest",
      format: "",
    },
    operationResponseType: "UpdateWorkflowResponse",
  },
  "WorkflowAutomationApi.V2.ListWorkflowInstances": {
    workflowId: {
      type: "string",
      format: "",
    },
    pageSize: {
      type: "number",
      format: "int64",
    },
    pageNumber: {
      type: "number",
      format: "int64",
    },
    operationResponseType: "WorkflowListInstancesResponse",
  },
  "WorkflowAutomationApi.V2.CreateWorkflowInstance": {
    workflowId: {
      type: "string",
      format: "",
    },
    body: {
      type: "WorkflowInstanceCreateRequest",
      format: "",
    },
    operationResponseType: "WorkflowInstanceCreateResponse",
  },
  "WorkflowAutomationApi.V2.GetWorkflowInstance": {
    workflowId: {
      type: "string",
      format: "",
    },
    instanceId: {
      type: "string",
      format: "",
    },
    operationResponseType: "WorklflowGetInstanceResponse",
  },
  "WorkflowAutomationApi.V2.CancelWorkflowInstance": {
    workflowId: {
      type: "string",
      format: "",
    },
    instanceId: {
      type: "string",
      format: "",
    },
    operationResponseType: "WorklflowCancelInstanceResponse",
  },
};
