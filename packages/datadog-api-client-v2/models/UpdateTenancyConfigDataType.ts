/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * OCI tenancy resource type.
*/

export type UpdateTenancyConfigDataType = typeof OCI_TENANCY | UnparsedObject;
export const OCI_TENANCY = 'oci_tenancy';