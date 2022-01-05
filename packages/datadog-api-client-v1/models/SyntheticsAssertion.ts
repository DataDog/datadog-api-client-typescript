/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsAssertionJSONPathOperator } from './SyntheticsAssertionJSONPathOperator';
import { SyntheticsAssertionJSONPathTarget } from './SyntheticsAssertionJSONPathTarget';
import { SyntheticsAssertionJSONPathTargetTarget } from './SyntheticsAssertionJSONPathTargetTarget';
import { SyntheticsAssertionTarget } from './SyntheticsAssertionTarget';
import { SyntheticsAssertionType } from './SyntheticsAssertionType';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* Object describing the assertions type, their associated operator, which property they apply, and upon which target.
*/

export type SyntheticsAssertion = SyntheticsAssertionJSONPathTarget | SyntheticsAssertionTarget | UnparsedObject;
