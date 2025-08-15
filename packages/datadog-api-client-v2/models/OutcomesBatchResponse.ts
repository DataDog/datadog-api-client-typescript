/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OutcomesBatchResponseMeta } from "./OutcomesBatchResponseMeta";
import { OutcomesResponseDataItem } from "./OutcomesResponseDataItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Scorecard outcomes batch response.
 */
export class OutcomesBatchResponse {
  /**
   * List of rule outcomes which were affected during the bulk operation.
   */
  "data": Array<OutcomesResponseDataItem>;
  /**
   * Metadata pertaining to the bulk operation.
   */
  "meta": OutcomesBatchResponseMeta;

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
    data: {
      baseName: "data",
      type: "Array<OutcomesResponseDataItem>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "OutcomesBatchResponseMeta",
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
    return OutcomesBatchResponse.attributeTypeMap;
  }

  public constructor() {}
}
