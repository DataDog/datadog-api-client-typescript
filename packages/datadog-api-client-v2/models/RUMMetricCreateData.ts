/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMMetricCreateAttributes } from "./RUMMetricCreateAttributes";
import { RUMMetricType } from "./RUMMetricType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The new RUM-based metric properties.
 */
export class RUMMetricCreateData {
  /**
   * The object describing the Datadog RUM-based metric to create.
   */
  "attributes": RUMMetricCreateAttributes;
  /**
   * The name of the RUM-based metric.
   * On creation, it must be 1 to 200 characters long, contain only ASCII letters, digits, underscores, and periods, start with a letter, and not start with `rum.measure` or `rum.investigate`.
   * It cannot be changed after creation.
   */
  "id": string;
  /**
   * The type of the resource. The value must be `rum_metrics`.
   */
  "type": RUMMetricType;

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
      type: "RUMMetricCreateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMMetricType",
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
    return RUMMetricCreateData.attributeTypeMap;
  }

  public constructor() {}
}
