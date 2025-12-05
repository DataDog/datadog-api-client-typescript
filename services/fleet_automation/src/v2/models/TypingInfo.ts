import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { FleetAgentAttributes } from "./FleetAgentAttributes";
import { FleetAgentAttributesTagsItems } from "./FleetAgentAttributesTagsItems";
import { FleetAgentInfo } from "./FleetAgentInfo";
import { FleetAgentInfoAttributes } from "./FleetAgentInfoAttributes";
import { FleetAgentInfoDetails } from "./FleetAgentInfoDetails";
import { FleetAgentInfoResponse } from "./FleetAgentInfoResponse";
import { FleetAgentVersion } from "./FleetAgentVersion";
import { FleetAgentVersionAttributes } from "./FleetAgentVersionAttributes";
import { FleetAgentVersionsResponse } from "./FleetAgentVersionsResponse";
import { FleetAgentsResponse } from "./FleetAgentsResponse";
import { FleetAgentsResponseData } from "./FleetAgentsResponseData";
import { FleetAgentsResponseDataAttributes } from "./FleetAgentsResponseDataAttributes";
import { FleetAgentsResponseMeta } from "./FleetAgentsResponseMeta";
import { FleetConfigurationFile } from "./FleetConfigurationFile";
import { FleetConfigurationLayer } from "./FleetConfigurationLayer";
import { FleetDeployment } from "./FleetDeployment";
import { FleetDeploymentAttributes } from "./FleetDeploymentAttributes";
import { FleetDeploymentConfigureAttributes } from "./FleetDeploymentConfigureAttributes";
import { FleetDeploymentConfigureCreate } from "./FleetDeploymentConfigureCreate";
import { FleetDeploymentConfigureCreateRequest } from "./FleetDeploymentConfigureCreateRequest";
import { FleetDeploymentHost } from "./FleetDeploymentHost";
import { FleetDeploymentHostPackage } from "./FleetDeploymentHostPackage";
import { FleetDeploymentHostsPage } from "./FleetDeploymentHostsPage";
import { FleetDeploymentOperation } from "./FleetDeploymentOperation";
import { FleetDeploymentPackage } from "./FleetDeploymentPackage";
import { FleetDeploymentPackageUpgradeAttributes } from "./FleetDeploymentPackageUpgradeAttributes";
import { FleetDeploymentPackageUpgradeCreate } from "./FleetDeploymentPackageUpgradeCreate";
import { FleetDeploymentPackageUpgradeCreateRequest } from "./FleetDeploymentPackageUpgradeCreateRequest";
import { FleetDeploymentResponse } from "./FleetDeploymentResponse";
import { FleetDeploymentResponseMeta } from "./FleetDeploymentResponseMeta";
import { FleetDeploymentsPage } from "./FleetDeploymentsPage";
import { FleetDeploymentsResponse } from "./FleetDeploymentsResponse";
import { FleetDeploymentsResponseMeta } from "./FleetDeploymentsResponseMeta";
import { FleetDetectedIntegration } from "./FleetDetectedIntegration";
import { FleetIntegrationDetails } from "./FleetIntegrationDetails";
import { FleetIntegrationsByStatus } from "./FleetIntegrationsByStatus";
import { FleetSchedule } from "./FleetSchedule";
import { FleetScheduleAttributes } from "./FleetScheduleAttributes";
import { FleetScheduleCreate } from "./FleetScheduleCreate";
import { FleetScheduleCreateAttributes } from "./FleetScheduleCreateAttributes";
import { FleetScheduleCreateRequest } from "./FleetScheduleCreateRequest";
import { FleetSchedulePatch } from "./FleetSchedulePatch";
import { FleetSchedulePatchAttributes } from "./FleetSchedulePatchAttributes";
import { FleetSchedulePatchRequest } from "./FleetSchedulePatchRequest";
import { FleetScheduleRecurrenceRule } from "./FleetScheduleRecurrenceRule";
import { FleetScheduleResponse } from "./FleetScheduleResponse";
import { FleetSchedulesResponse } from "./FleetSchedulesResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    FleetAgentInfoResourceType: ["datadog_agent_key"],
    FleetAgentVersionResourceType: ["agent_version"],
    FleetDeploymentFileOp: ["merge-patch", "delete"],
    FleetDeploymentResourceType: ["deployment"],
    FleetScheduleResourceType: ["schedule"],
    FleetScheduleStatus: ["active", "inactive"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    FleetAgentAttributes: FleetAgentAttributes,
    FleetAgentAttributesTagsItems: FleetAgentAttributesTagsItems,
    FleetAgentInfo: FleetAgentInfo,
    FleetAgentInfoAttributes: FleetAgentInfoAttributes,
    FleetAgentInfoDetails: FleetAgentInfoDetails,
    FleetAgentInfoResponse: FleetAgentInfoResponse,
    FleetAgentVersion: FleetAgentVersion,
    FleetAgentVersionAttributes: FleetAgentVersionAttributes,
    FleetAgentVersionsResponse: FleetAgentVersionsResponse,
    FleetAgentsResponse: FleetAgentsResponse,
    FleetAgentsResponseData: FleetAgentsResponseData,
    FleetAgentsResponseDataAttributes: FleetAgentsResponseDataAttributes,
    FleetAgentsResponseMeta: FleetAgentsResponseMeta,
    FleetConfigurationFile: FleetConfigurationFile,
    FleetConfigurationLayer: FleetConfigurationLayer,
    FleetDeployment: FleetDeployment,
    FleetDeploymentAttributes: FleetDeploymentAttributes,
    FleetDeploymentConfigureAttributes: FleetDeploymentConfigureAttributes,
    FleetDeploymentConfigureCreate: FleetDeploymentConfigureCreate,
    FleetDeploymentConfigureCreateRequest:
      FleetDeploymentConfigureCreateRequest,
    FleetDeploymentHost: FleetDeploymentHost,
    FleetDeploymentHostPackage: FleetDeploymentHostPackage,
    FleetDeploymentHostsPage: FleetDeploymentHostsPage,
    FleetDeploymentOperation: FleetDeploymentOperation,
    FleetDeploymentPackage: FleetDeploymentPackage,
    FleetDeploymentPackageUpgradeAttributes:
      FleetDeploymentPackageUpgradeAttributes,
    FleetDeploymentPackageUpgradeCreate: FleetDeploymentPackageUpgradeCreate,
    FleetDeploymentPackageUpgradeCreateRequest:
      FleetDeploymentPackageUpgradeCreateRequest,
    FleetDeploymentResponse: FleetDeploymentResponse,
    FleetDeploymentResponseMeta: FleetDeploymentResponseMeta,
    FleetDeploymentsPage: FleetDeploymentsPage,
    FleetDeploymentsResponse: FleetDeploymentsResponse,
    FleetDeploymentsResponseMeta: FleetDeploymentsResponseMeta,
    FleetDetectedIntegration: FleetDetectedIntegration,
    FleetIntegrationDetails: FleetIntegrationDetails,
    FleetIntegrationsByStatus: FleetIntegrationsByStatus,
    FleetSchedule: FleetSchedule,
    FleetScheduleAttributes: FleetScheduleAttributes,
    FleetScheduleCreate: FleetScheduleCreate,
    FleetScheduleCreateAttributes: FleetScheduleCreateAttributes,
    FleetScheduleCreateRequest: FleetScheduleCreateRequest,
    FleetSchedulePatch: FleetSchedulePatch,
    FleetSchedulePatchAttributes: FleetSchedulePatchAttributes,
    FleetSchedulePatchRequest: FleetSchedulePatchRequest,
    FleetScheduleRecurrenceRule: FleetScheduleRecurrenceRule,
    FleetScheduleResponse: FleetScheduleResponse,
    FleetSchedulesResponse: FleetSchedulesResponse,
  },
};
