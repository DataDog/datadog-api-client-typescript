import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { FleetAgentAttributesTagsItems } from "./FleetAgentAttributesTagsItems";
import { FleetAgentConfigurationFilesV2 } from "./FleetAgentConfigurationFilesV2";
import { FleetAgentDetailV2 } from "./FleetAgentDetailV2";
import { FleetAgentDetailV2Attributes } from "./FleetAgentDetailV2Attributes";
import { FleetAgentDetailV2Response } from "./FleetAgentDetailV2Response";
import { FleetAgentInfoDetailsV2 } from "./FleetAgentInfoDetailsV2";
import { FleetAgentV2 } from "./FleetAgentV2";
import { FleetAgentV2Attributes } from "./FleetAgentV2Attributes";
import { FleetAgentVersionV2 } from "./FleetAgentVersionV2";
import { FleetAgentVersionV2Attributes } from "./FleetAgentVersionV2Attributes";
import { FleetAgentVersionsV2Page } from "./FleetAgentVersionsV2Page";
import { FleetAgentVersionsV2Response } from "./FleetAgentVersionsV2Response";
import { FleetAgentVersionsV2ResponseMeta } from "./FleetAgentVersionsV2ResponseMeta";
import { FleetAgentsV2Page } from "./FleetAgentsV2Page";
import { FleetAgentsV2Response } from "./FleetAgentsV2Response";
import { FleetAgentsV2ResponseMeta } from "./FleetAgentsV2ResponseMeta";
import { FleetConfigurationFileV2 } from "./FleetConfigurationFileV2";
import { FleetConfigurationLayer } from "./FleetConfigurationLayer";
import { FleetDeployment } from "./FleetDeployment";
import { FleetDeploymentAttributes } from "./FleetDeploymentAttributes";
import { FleetDeploymentConfigureV2Attributes } from "./FleetDeploymentConfigureV2Attributes";
import { FleetDeploymentConfigureV2Create } from "./FleetDeploymentConfigureV2Create";
import { FleetDeploymentConfigureV2CreateRequest } from "./FleetDeploymentConfigureV2CreateRequest";
import { FleetDeploymentConfigureV2DryRun } from "./FleetDeploymentConfigureV2DryRun";
import { FleetDeploymentConfigureV2DryRunAttributes } from "./FleetDeploymentConfigureV2DryRunAttributes";
import { FleetDeploymentConfigureV2DryRunResponse } from "./FleetDeploymentConfigureV2DryRunResponse";
import { FleetDeploymentConfigureV2DryRunResult } from "./FleetDeploymentConfigureV2DryRunResult";
import { FleetDeploymentConfigureV2Package } from "./FleetDeploymentConfigureV2Package";
import { FleetDeploymentHost } from "./FleetDeploymentHost";
import { FleetDeploymentHostPackage } from "./FleetDeploymentHostPackage";
import { FleetDeploymentHostsPage } from "./FleetDeploymentHostsPage";
import { FleetDeploymentOperation } from "./FleetDeploymentOperation";
import { FleetDeploymentPackage } from "./FleetDeploymentPackage";
import { FleetDeploymentPackageUpgradeV2Attributes } from "./FleetDeploymentPackageUpgradeV2Attributes";
import { FleetDeploymentPackageUpgradeV2Create } from "./FleetDeploymentPackageUpgradeV2Create";
import { FleetDeploymentPackageUpgradeV2CreateRequest } from "./FleetDeploymentPackageUpgradeV2CreateRequest";
import { FleetDeploymentResponse } from "./FleetDeploymentResponse";
import { FleetDeploymentResponseMeta } from "./FleetDeploymentResponseMeta";
import { FleetDeploymentV2 } from "./FleetDeploymentV2";
import { FleetDeploymentV2Attributes } from "./FleetDeploymentV2Attributes";
import { FleetDeploymentV2Cancel } from "./FleetDeploymentV2Cancel";
import { FleetDeploymentV2CancelAttributes } from "./FleetDeploymentV2CancelAttributes";
import { FleetDeploymentV2CancelResponse } from "./FleetDeploymentV2CancelResponse";
import { FleetDeploymentV2CreateResponse } from "./FleetDeploymentV2CreateResponse";
import { FleetDeploymentV2Detail } from "./FleetDeploymentV2Detail";
import { FleetDeploymentV2DetailAgent } from "./FleetDeploymentV2DetailAgent";
import { FleetDeploymentV2DetailAttributes } from "./FleetDeploymentV2DetailAttributes";
import { FleetDeploymentV2DetailResponse } from "./FleetDeploymentV2DetailResponse";
import { FleetDeploymentsV2Page } from "./FleetDeploymentsV2Page";
import { FleetDeploymentsV2Response } from "./FleetDeploymentsV2Response";
import { FleetDeploymentsV2ResponseMeta } from "./FleetDeploymentsV2ResponseMeta";
import { FleetDetectedIntegration } from "./FleetDetectedIntegration";
import { FleetIntegrationDetailsV2 } from "./FleetIntegrationDetailsV2";
import { FleetIntegrationsByStatusV2 } from "./FleetIntegrationsByStatusV2";
import { FleetOtelCollectorConfigurationV2 } from "./FleetOtelCollectorConfigurationV2";
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
import { FleetScheduleV2 } from "./FleetScheduleV2";
import { FleetScheduleV2Attributes } from "./FleetScheduleV2Attributes";
import { FleetScheduleV2NotificationRule } from "./FleetScheduleV2NotificationRule";
import { FleetScheduleV2RecurrenceRule } from "./FleetScheduleV2RecurrenceRule";
import { FleetScheduleV2Response } from "./FleetScheduleV2Response";
import { FleetSchedulesV2Page } from "./FleetSchedulesV2Page";
import { FleetSchedulesV2Response } from "./FleetSchedulesV2Response";
import { FleetSchedulesV2ResponseMeta } from "./FleetSchedulesV2ResponseMeta";
import { FleetTracerAttributes } from "./FleetTracerAttributes";
import { FleetTracersResponse } from "./FleetTracersResponse";
import { FleetTracersResponseData } from "./FleetTracersResponseData";
import { FleetTracersResponseDataAttributes } from "./FleetTracersResponseDataAttributes";
import { FleetTracersResponseMeta } from "./FleetTracersResponseMeta";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    FleetAgentV2AttributesInstrumentationStatus: ["success", "failure"],
    FleetAgentV2ResourceType: ["agent"],
    FleetAgentVersionV2ResourceType: ["agent_version"],
    FleetDeploymentFileOp: ["merge-patch", "delete"],
    FleetDeploymentResourceType: ["deployment"],
    FleetScheduleResourceType: ["schedule"],
    FleetScheduleStatus: ["active", "inactive"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    FleetAgentAttributesTagsItems: FleetAgentAttributesTagsItems,
    FleetAgentConfigurationFilesV2: FleetAgentConfigurationFilesV2,
    FleetAgentDetailV2: FleetAgentDetailV2,
    FleetAgentDetailV2Attributes: FleetAgentDetailV2Attributes,
    FleetAgentDetailV2Response: FleetAgentDetailV2Response,
    FleetAgentInfoDetailsV2: FleetAgentInfoDetailsV2,
    FleetAgentV2: FleetAgentV2,
    FleetAgentV2Attributes: FleetAgentV2Attributes,
    FleetAgentVersionV2: FleetAgentVersionV2,
    FleetAgentVersionV2Attributes: FleetAgentVersionV2Attributes,
    FleetAgentVersionsV2Page: FleetAgentVersionsV2Page,
    FleetAgentVersionsV2Response: FleetAgentVersionsV2Response,
    FleetAgentVersionsV2ResponseMeta: FleetAgentVersionsV2ResponseMeta,
    FleetAgentsV2Page: FleetAgentsV2Page,
    FleetAgentsV2Response: FleetAgentsV2Response,
    FleetAgentsV2ResponseMeta: FleetAgentsV2ResponseMeta,
    FleetConfigurationFileV2: FleetConfigurationFileV2,
    FleetConfigurationLayer: FleetConfigurationLayer,
    FleetDeployment: FleetDeployment,
    FleetDeploymentAttributes: FleetDeploymentAttributes,
    FleetDeploymentConfigureV2Attributes: FleetDeploymentConfigureV2Attributes,
    FleetDeploymentConfigureV2Create: FleetDeploymentConfigureV2Create,
    FleetDeploymentConfigureV2CreateRequest:
      FleetDeploymentConfigureV2CreateRequest,
    FleetDeploymentConfigureV2DryRun: FleetDeploymentConfigureV2DryRun,
    FleetDeploymentConfigureV2DryRunAttributes:
      FleetDeploymentConfigureV2DryRunAttributes,
    FleetDeploymentConfigureV2DryRunResponse:
      FleetDeploymentConfigureV2DryRunResponse,
    FleetDeploymentConfigureV2DryRunResult:
      FleetDeploymentConfigureV2DryRunResult,
    FleetDeploymentConfigureV2Package: FleetDeploymentConfigureV2Package,
    FleetDeploymentHost: FleetDeploymentHost,
    FleetDeploymentHostPackage: FleetDeploymentHostPackage,
    FleetDeploymentHostsPage: FleetDeploymentHostsPage,
    FleetDeploymentOperation: FleetDeploymentOperation,
    FleetDeploymentPackage: FleetDeploymentPackage,
    FleetDeploymentPackageUpgradeV2Attributes:
      FleetDeploymentPackageUpgradeV2Attributes,
    FleetDeploymentPackageUpgradeV2Create:
      FleetDeploymentPackageUpgradeV2Create,
    FleetDeploymentPackageUpgradeV2CreateRequest:
      FleetDeploymentPackageUpgradeV2CreateRequest,
    FleetDeploymentResponse: FleetDeploymentResponse,
    FleetDeploymentResponseMeta: FleetDeploymentResponseMeta,
    FleetDeploymentV2: FleetDeploymentV2,
    FleetDeploymentV2Attributes: FleetDeploymentV2Attributes,
    FleetDeploymentV2Cancel: FleetDeploymentV2Cancel,
    FleetDeploymentV2CancelAttributes: FleetDeploymentV2CancelAttributes,
    FleetDeploymentV2CancelResponse: FleetDeploymentV2CancelResponse,
    FleetDeploymentV2CreateResponse: FleetDeploymentV2CreateResponse,
    FleetDeploymentV2Detail: FleetDeploymentV2Detail,
    FleetDeploymentV2DetailAgent: FleetDeploymentV2DetailAgent,
    FleetDeploymentV2DetailAttributes: FleetDeploymentV2DetailAttributes,
    FleetDeploymentV2DetailResponse: FleetDeploymentV2DetailResponse,
    FleetDeploymentsV2Page: FleetDeploymentsV2Page,
    FleetDeploymentsV2Response: FleetDeploymentsV2Response,
    FleetDeploymentsV2ResponseMeta: FleetDeploymentsV2ResponseMeta,
    FleetDetectedIntegration: FleetDetectedIntegration,
    FleetIntegrationDetailsV2: FleetIntegrationDetailsV2,
    FleetIntegrationsByStatusV2: FleetIntegrationsByStatusV2,
    FleetOtelCollectorConfigurationV2: FleetOtelCollectorConfigurationV2,
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
    FleetScheduleV2: FleetScheduleV2,
    FleetScheduleV2Attributes: FleetScheduleV2Attributes,
    FleetScheduleV2NotificationRule: FleetScheduleV2NotificationRule,
    FleetScheduleV2RecurrenceRule: FleetScheduleV2RecurrenceRule,
    FleetScheduleV2Response: FleetScheduleV2Response,
    FleetSchedulesV2Page: FleetSchedulesV2Page,
    FleetSchedulesV2Response: FleetSchedulesV2Response,
    FleetSchedulesV2ResponseMeta: FleetSchedulesV2ResponseMeta,
    FleetTracerAttributes: FleetTracerAttributes,
    FleetTracersResponse: FleetTracersResponse,
    FleetTracersResponseData: FleetTracersResponseData,
    FleetTracersResponseDataAttributes: FleetTracersResponseDataAttributes,
    FleetTracersResponseMeta: FleetTracersResponseMeta,
  },
};
