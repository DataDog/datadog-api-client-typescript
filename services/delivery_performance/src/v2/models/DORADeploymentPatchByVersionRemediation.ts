import { UnparsedObject } from "@datadog/datadog-api-client";

import { DORADeploymentPatchByVersionRemediationByID } from "./DORADeploymentPatchByVersionRemediationByID";
import { DORADeploymentPatchByVersionRemediationByVersion } from "./DORADeploymentPatchByVersionRemediationByVersion";

/**
 * Remediation details for the deployment. Optional, but required to calculate failed deployment recovery time. Specify either `id` or `version` to identify the remediation deployment, but not both.
 */
export type DORADeploymentPatchByVersionRemediation =
  | DORADeploymentPatchByVersionRemediationByID
  | DORADeploymentPatchByVersionRemediationByVersion
  | UnparsedObject;
