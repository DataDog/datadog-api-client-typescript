/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsDeleteDatasetRecordsDataAttributesRequest } from "./LLMObsDeleteDatasetRecordsDataAttributesRequest";
import { LLMObsRecordType } from "./LLMObsRecordType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for deleting records from an LLM Observability dataset.
 */
export class LLMObsDeleteDatasetRecordsDataRequest {
  /**
   * Attributes for deleting records from an LLM Observability dataset.
   */
  "attributes": LLMObsDeleteDatasetRecordsDataAttributesRequest;
  /**
   * Resource type of LLM Observability dataset records.
   */
  "type": LLMObsRecordType;

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
    attributes: {
      baseName: "attributes",
      type: "LLMObsDeleteDatasetRecordsDataAttributesRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsRecordType",
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
    return LLMObsDeleteDatasetRecordsDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
