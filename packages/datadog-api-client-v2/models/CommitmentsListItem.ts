/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CommitmentsAwsEC2RICommitment } from "./CommitmentsAwsEC2RICommitment";
import { CommitmentsAwsElasticacheRICommitment } from "./CommitmentsAwsElasticacheRICommitment";
import { CommitmentsAwsRDSRICommitment } from "./CommitmentsAwsRDSRICommitment";
import { CommitmentsAwsSPCommitment } from "./CommitmentsAwsSPCommitment";
import { CommitmentsAzureComputeSPCommitment } from "./CommitmentsAzureComputeSPCommitment";
import { CommitmentsAzureVMRICommitment } from "./CommitmentsAzureVMRICommitment";

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
