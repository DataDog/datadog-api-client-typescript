/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricAssetAttributes } from "./MetricAssetAttributes";
import { MetricSLOType } from "./MetricSLOType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A SLO object with title.
 */
export class MetricSLOAsset {
  /**
   * Assets related to the object, including title, url, and tags.
   */
  "attributes"?: MetricAssetAttributes;
  /**
   * The SLO ID.
   */
  "id": string;
  /**
   * SLO resource type.
   */
  "type": MetricSLOType;

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
      type: "MetricAssetAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MetricSLOType",
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
    return MetricSLOAsset.attributeTypeMap;
  }

  public constructor() {}
}
