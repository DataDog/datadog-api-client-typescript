/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ActionQuery } from "./ActionQuery";
import { DataTransform } from "./DataTransform";
import { StateVariable } from "./StateVariable";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A data query used by an app. This can take the form of an external action, a data transformation, or a state variable.
 */

export type Query =
  | ActionQuery
  | DataTransform
  | StateVariable
  | UnparsedObject;
