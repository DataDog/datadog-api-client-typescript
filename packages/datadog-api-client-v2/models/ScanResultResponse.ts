/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The raw scan result document produced by the SCA processor.
 * The contents reflect the vulnerabilities and metadata produced for the libraries
 * submitted in the original scan request.
 */

export type ScanResultResponse = { [key: string]: any } | UnparsedObject;
