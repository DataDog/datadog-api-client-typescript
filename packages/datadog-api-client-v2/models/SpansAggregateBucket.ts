/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SpansAggregateBucketAttributes } from "./SpansAggregateBucketAttributes";
import { SpansAggregateBucketType } from "./SpansAggregateBucketType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Spans aggregate.
 */
export class SpansAggregateBucket {
  /**
   * A bucket values.
   */
  "attributes"?: SpansAggregateBucketAttributes;
  /**
   * ID of the spans aggregate.
   */
  "id"?: string;
  /**
   * The spans aggregate bucket type.
   */
  "type"?: SpansAggregateBucketType;

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
      type: "SpansAggregateBucketAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SpansAggregateBucketType",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SpansAggregateBucket.attributeTypeMap;
  }

  public constructor() {}
}
