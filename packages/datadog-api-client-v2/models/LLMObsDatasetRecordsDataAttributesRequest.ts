/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsDatasetRecordItem } from "./LLMObsDatasetRecordItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for appending records to an LLM Observability dataset.
 */
export class LLMObsDatasetRecordsDataAttributesRequest {
  /**
   * Whether to deduplicate records before appending. Defaults to `true`.
   */
  "deduplicate"?: boolean;
  /**
   * List of records to append to the dataset.
   */
  "records": Array<LLMObsDatasetRecordItem>;

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
    deduplicate: {
      baseName: "deduplicate",
      type: "boolean",
    },
    records: {
      baseName: "records",
      type: "Array<LLMObsDatasetRecordItem>",
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
    return LLMObsDatasetRecordsDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
