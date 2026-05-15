import { UnparsedObject } from "@datadog/datadog-api-client";

import { CommitmentsAwsEC2RICommitment } from "./CommitmentsAwsEC2RICommitment";
import { CommitmentsAwsElasticacheRICommitment } from "./CommitmentsAwsElasticacheRICommitment";
import { CommitmentsAwsRDSRICommitment } from "./CommitmentsAwsRDSRICommitment";
import { CommitmentsAwsSPCommitment } from "./CommitmentsAwsSPCommitment";
import { CommitmentsAzureComputeSPCommitment } from "./CommitmentsAzureComputeSPCommitment";
import { CommitmentsAzureVMRICommitment } from "./CommitmentsAzureVMRICommitment";

/**
 * A commitment item, which varies based on the provider, product, and commitment type.
 */
export type CommitmentsListItem =
  | CommitmentsAwsEC2RICommitment
  | CommitmentsAwsRDSRICommitment
  | CommitmentsAwsElasticacheRICommitment
  | CommitmentsAwsSPCommitment
  | CommitmentsAzureVMRICommitment
  | CommitmentsAzureComputeSPCommitment
  | UnparsedObject;
