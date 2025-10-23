import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { FleetDeployment } from "./FleetDeployment";
import { FleetDeploymentAttributes } from "./FleetDeploymentAttributes";
import { FleetDeploymentConfigureAttributes } from "./FleetDeploymentConfigureAttributes";
import { FleetDeploymentConfigureCreate } from "./FleetDeploymentConfigureCreate";
import { FleetDeploymentConfigureCreateRequest } from "./FleetDeploymentConfigureCreateRequest";
import { FleetDeploymentOperation } from "./FleetDeploymentOperation";
import { FleetDeploymentResponse } from "./FleetDeploymentResponse";
import { FleetDeploymentsPage } from "./FleetDeploymentsPage";
import { FleetDeploymentsResponse } from "./FleetDeploymentsResponse";
import { FleetDeploymentsResponseMeta } from "./FleetDeploymentsResponseMeta";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    FleetDeploymentFileOp: ["merge-patch", "delete"],
    FleetDeploymentResourceType: ["deployment"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    FleetDeployment: FleetDeployment,
    FleetDeploymentAttributes: FleetDeploymentAttributes,
    FleetDeploymentConfigureAttributes: FleetDeploymentConfigureAttributes,
    FleetDeploymentConfigureCreate: FleetDeploymentConfigureCreate,
    FleetDeploymentConfigureCreateRequest:
      FleetDeploymentConfigureCreateRequest,
    FleetDeploymentOperation: FleetDeploymentOperation,
    FleetDeploymentResponse: FleetDeploymentResponse,
    FleetDeploymentsPage: FleetDeploymentsPage,
    FleetDeploymentsResponse: FleetDeploymentsResponse,
    FleetDeploymentsResponseMeta: FleetDeploymentsResponseMeta,
  },
};
