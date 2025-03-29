/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AddFieldsProcessor } from "./AddFieldsProcessor";
import { FilterProcessor } from "./FilterProcessor";
import { ParseJSONProcessor } from "./ParseJSONProcessor";
import { QuotaProcessor } from "./QuotaProcessor";
import { RemoveFieldsProcessor } from "./RemoveFieldsProcessor";
import { RenameFieldsProcessor } from "./RenameFieldsProcessor";

import { UnparsedObject } from "../../datadog-api-client-common/util";

export type PipelineDataAttributesConfigProcessorsItem =
  | FilterProcessor
  | ParseJSONProcessor
  | QuotaProcessor
  | AddFieldsProcessor
  | RemoveFieldsProcessor
  | RenameFieldsProcessor
  | UnparsedObject;
