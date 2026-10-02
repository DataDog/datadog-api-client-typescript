/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsCreateMetricCollectionV2RequestDataAttributesMetricsItems } from "./ExperimentsCreateMetricCollectionV2RequestDataAttributesMetricsItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Name, description, and metric selection for the new collection.
 */
export class ExperimentsCreateMetricCollectionV2RequestDataAttributes {
  /**
   * Description of the metric collection.
   */
  "description"?: string;
  /**
   * Whether the collection is designated as a guardrail collection.
   */
  "isGuardrail"?: boolean;
  /**
   * Metrics to include in the collection.
   */
  "metrics"?: Array<ExperimentsCreateMetricCollectionV2RequestDataAttributesMetricsItems>;
  /**
   * Display name of the metric collection.
   */
  "name": string;

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
    description: {
      baseName: "description",
      type: "string",
    },
    isGuardrail: {
      baseName: "is_guardrail",
      type: "boolean",
    },
    metrics: {
      baseName: "metrics",
      type: "Array<ExperimentsCreateMetricCollectionV2RequestDataAttributesMetricsItems>",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return ExperimentsCreateMetricCollectionV2RequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
