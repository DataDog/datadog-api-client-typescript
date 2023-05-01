/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DataScalarColumn } from "./DataScalarColumn";
import { GroupScalarColumn } from "./GroupScalarColumn";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A single column in a scalar query response.
 */

export type ScalarColumn =
  | GroupScalarColumn
  | DataScalarColumn
  | UnparsedObject;
