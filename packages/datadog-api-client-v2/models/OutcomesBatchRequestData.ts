/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OutcomesBatchAttributes } from "./OutcomesBatchAttributes";
import { OutcomesBatchType } from "./OutcomesBatchType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Scorecard outcomes batch request data.
 */
export class OutcomesBatchRequestData {
  /**
   * The JSON:API attributes for a batched set of scorecard outcomes.
   */
  "attributes"?: OutcomesBatchAttributes;
  /**
   * The JSON:API type for scorecard outcomes.
   */
  "type"?: OutcomesBatchType;

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
      type: "OutcomesBatchAttributes",
    },
    type: {
      baseName: "type",
      type: "OutcomesBatchType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OutcomesBatchRequestData.attributeTypeMap;
  }

  public constructor() {}
}
