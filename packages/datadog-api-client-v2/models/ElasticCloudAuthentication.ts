/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ElasticCloudBasicAuth } from "./ElasticCloudBasicAuth";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Authentication methods supported by the Elastic Cloud interface. Exactly one is set, selected by its `type`.
 */

export type ElasticCloudAuthentication = ElasticCloudBasicAuth | UnparsedObject;
