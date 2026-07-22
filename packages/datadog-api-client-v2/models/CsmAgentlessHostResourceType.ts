/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The type of cloud resource for an agentless host.
*/

export type CsmAgentlessHostResourceType = typeof AWS_EC2_INSTANCE| typeof AZURE_VIRTUAL_MACHINE_INSTANCE| typeof GCP_COMPUTE_INSTANCE| typeof OCI_INSTANCE | UnparsedObject;
export const AWS_EC2_INSTANCE = 'aws_ec2_instance';
export const AZURE_VIRTUAL_MACHINE_INSTANCE = 'azure_virtual_machine_instance';
export const GCP_COMPUTE_INSTANCE = 'gcp_compute_instance';
export const OCI_INSTANCE = 'oci_instance';