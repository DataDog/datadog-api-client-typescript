/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UpdateOutcomesAsyncRequestItem } from "./UpdateOutcomesAsyncRequestItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The JSON:API attributes for a batched set of scorecard outcomes.
 */
export class UpdateOutcomesAsyncAttributes {
  /**
   * Set of scorecard outcomes to update asynchronously.
   */
  "results"?: Array<UpdateOutcomesAsyncRequestItem>;

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
    results: {
      baseName: "results",
      type: "Array<UpdateOutcomesAsyncRequestItem>",
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
    return UpdateOutcomesAsyncAttributes.attributeTypeMap;
  }

  public constructor() {}
}
