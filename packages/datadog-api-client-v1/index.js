"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./http/http"), exports);
__exportStar(require("./auth/auth"), exports);
var configuration_1 = require("./configuration");
Object.defineProperty(exports, "createConfiguration", { enumerable: true, get: function () { return configuration_1.createConfiguration; } });
__exportStar(require("./apis/exception"), exports);
__exportStar(require("./servers"), exports);
var ObjectParamAPI_1 = require("./types/ObjectParamAPI");
Object.defineProperty(exports, "AWSIntegrationApi", { enumerable: true, get: function () { return ObjectParamAPI_1.ObjectAWSIntegrationApi; } });
Object.defineProperty(exports, "AWSLogsIntegrationApi", { enumerable: true, get: function () { return ObjectParamAPI_1.ObjectAWSLogsIntegrationApi; } });
Object.defineProperty(exports, "AuthenticationApi", { enumerable: true, get: function () { return ObjectParamAPI_1.ObjectAuthenticationApi; } });
Object.defineProperty(exports, "AzureIntegrationApi", { enumerable: true, get: function () { return ObjectParamAPI_1.ObjectAzureIntegrationApi; } });
Object.defineProperty(exports, "DashboardListsApi", { enumerable: true, get: function () { return ObjectParamAPI_1.ObjectDashboardListsApi; } });
Object.defineProperty(exports, "DashboardsApi", { enumerable: true, get: function () { return ObjectParamAPI_1.ObjectDashboardsApi; } });
Object.defineProperty(exports, "DowntimesApi", { enumerable: true, get: function () { return ObjectParamAPI_1.ObjectDowntimesApi; } });
Object.defineProperty(exports, "EventsApi", { enumerable: true, get: function () { return ObjectParamAPI_1.ObjectEventsApi; } });
Object.defineProperty(exports, "GCPIntegrationApi", { enumerable: true, get: function () { return ObjectParamAPI_1.ObjectGCPIntegrationApi; } });
Object.defineProperty(exports, "HostsApi", { enumerable: true, get: function () { return ObjectParamAPI_1.ObjectHostsApi; } });
Object.defineProperty(exports, "IPRangesApi", { enumerable: true, get: function () { return ObjectParamAPI_1.ObjectIPRangesApi; } });
Object.defineProperty(exports, "KeyManagementApi", { enumerable: true, get: function () { return ObjectParamAPI_1.ObjectKeyManagementApi; } });
Object.defineProperty(exports, "LogsApi", { enumerable: true, get: function () { return ObjectParamAPI_1.ObjectLogsApi; } });
Object.defineProperty(exports, "LogsIndexesApi", { enumerable: true, get: function () { return ObjectParamAPI_1.ObjectLogsIndexesApi; } });
Object.defineProperty(exports, "LogsPipelinesApi", { enumerable: true, get: function () { return ObjectParamAPI_1.ObjectLogsPipelinesApi; } });
Object.defineProperty(exports, "MetricsApi", { enumerable: true, get: function () { return ObjectParamAPI_1.ObjectMetricsApi; } });
Object.defineProperty(exports, "MonitorsApi", { enumerable: true, get: function () { return ObjectParamAPI_1.ObjectMonitorsApi; } });
Object.defineProperty(exports, "NotebooksApi", { enumerable: true, get: function () { return ObjectParamAPI_1.ObjectNotebooksApi; } });
Object.defineProperty(exports, "OrganizationsApi", { enumerable: true, get: function () { return ObjectParamAPI_1.ObjectOrganizationsApi; } });
Object.defineProperty(exports, "PagerDutyIntegrationApi", { enumerable: true, get: function () { return ObjectParamAPI_1.ObjectPagerDutyIntegrationApi; } });
Object.defineProperty(exports, "ServiceChecksApi", { enumerable: true, get: function () { return ObjectParamAPI_1.ObjectServiceChecksApi; } });
Object.defineProperty(exports, "ServiceLevelObjectiveCorrectionsApi", { enumerable: true, get: function () { return ObjectParamAPI_1.ObjectServiceLevelObjectiveCorrectionsApi; } });
Object.defineProperty(exports, "ServiceLevelObjectivesApi", { enumerable: true, get: function () { return ObjectParamAPI_1.ObjectServiceLevelObjectivesApi; } });
Object.defineProperty(exports, "SlackIntegrationApi", { enumerable: true, get: function () { return ObjectParamAPI_1.ObjectSlackIntegrationApi; } });
Object.defineProperty(exports, "SnapshotsApi", { enumerable: true, get: function () { return ObjectParamAPI_1.ObjectSnapshotsApi; } });
Object.defineProperty(exports, "SyntheticsApi", { enumerable: true, get: function () { return ObjectParamAPI_1.ObjectSyntheticsApi; } });
Object.defineProperty(exports, "TagsApi", { enumerable: true, get: function () { return ObjectParamAPI_1.ObjectTagsApi; } });
Object.defineProperty(exports, "UsageMeteringApi", { enumerable: true, get: function () { return ObjectParamAPI_1.ObjectUsageMeteringApi; } });
Object.defineProperty(exports, "UsersApi", { enumerable: true, get: function () { return ObjectParamAPI_1.ObjectUsersApi; } });
//# sourceMappingURL=index.js.map