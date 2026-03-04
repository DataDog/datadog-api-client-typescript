/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsDatasetRecordUpdateItem } from "./LLMObsDatasetRecordUpdateItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for updating records in an LLM Observability dataset.
 */
export class LLMObsDatasetRecordsUpdateDataAttributesRequest {
  /**
   * List of records to update.
   */
  "records": Array<LLMObsDatasetRecordUpdateItem>;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    records: {
      baseName: "records",
      type: "Array<LLMObsDatasetRecordUpdateItem>",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LLMObsDatasetRecordsUpdateDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
