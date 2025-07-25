/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricTagConfigurationType } from "./MetricTagConfigurationType";
import { MetricTagConfigurationUpdateAttributes } from "./MetricTagConfigurationUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object for a single tag configuration to be edited.
 */
export class MetricTagConfigurationUpdateData {
  /**
   * Object containing the definition of a metric tag configuration to be updated.
   */
  "attributes"?: MetricTagConfigurationUpdateAttributes;
  /**
   * The metric name for this resource.
   */
  "id": string;
  /**
   * The metric tag configuration resource type.
   */
  "type": MetricTagConfigurationType;

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
      type: "MetricTagConfigurationUpdateAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MetricTagConfigurationType",
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
    return MetricTagConfigurationUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
