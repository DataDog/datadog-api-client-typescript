/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsAssertionBodyHashTarget } from "./SyntheticsAssertionBodyHashTarget";
import { SyntheticsAssertionJavascript } from "./SyntheticsAssertionJavascript";
import { SyntheticsAssertionJSONPathTarget } from "./SyntheticsAssertionJSONPathTarget";
import { SyntheticsAssertionJSONSchemaTarget } from "./SyntheticsAssertionJSONSchemaTarget";
import { SyntheticsAssertionTarget } from "./SyntheticsAssertionTarget";
import { SyntheticsAssertionXPathTarget } from "./SyntheticsAssertionXPathTarget";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Object describing the assertions type, their associated operator,
 * which property they apply, and upon which target.
 */

export type SyntheticsAssertion =
  | SyntheticsAssertionTarget
  | SyntheticsAssertionBodyHashTarget
  | SyntheticsAssertionJSONPathTarget
  | SyntheticsAssertionJSONSchemaTarget
  | SyntheticsAssertionXPathTarget
  | SyntheticsAssertionJavascript
  | UnparsedObject;
