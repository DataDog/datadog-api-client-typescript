/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayModelAutomaticPricingMapping } from "./AiGatewayModelAutomaticPricingMapping";
import { AiGatewayModelAutomaticPricingModeTrigger } from "./AiGatewayModelAutomaticPricingModeTrigger";
import { AiGatewayModelAutomaticPricingRate } from "./AiGatewayModelAutomaticPricingRate";
import { AiGatewayModelAutomaticPricingSource } from "./AiGatewayModelAutomaticPricingSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The automatically synced published price. Present only when it is the effective price.
 */
export class AiGatewayModelAutomaticPricing {
  /**
   * Time the price was last revalidated against the source.
   */
  "lastValidatedAt": Date;
  /**
   * The reviewed endpoint mapping used to identify a custom provider. Omitted when the provider and model identity matched exactly.
   */
  "mapping"?: AiGatewayModelAutomaticPricingMapping;
  /**
   * Request fields that select each priced mode, such as `speed: fast` for `anthropic` models. Omitted when the model has a single mode.
   */
  "modeTriggers"?: Array<AiGatewayModelAutomaticPricingModeTrigger>;
  /**
   * Time the price was observed in the source.
   */
  "observedAt": Date;
  /**
   * Published rates.
   */
  "rates": Array<AiGatewayModelAutomaticPricingRate>;
  /**
   * The pricing source entry the price was read from.
   */
  "source": AiGatewayModelAutomaticPricingSource;
  /**
   * True when the price has not been revalidated recently and is being retained as last-known-good.
   */
  "stale": boolean;

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
    lastValidatedAt: {
      baseName: "last_validated_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    mapping: {
      baseName: "mapping",
      type: "AiGatewayModelAutomaticPricingMapping",
    },
    modeTriggers: {
      baseName: "mode_triggers",
      type: "Array<AiGatewayModelAutomaticPricingModeTrigger>",
    },
    observedAt: {
      baseName: "observed_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    rates: {
      baseName: "rates",
      type: "Array<AiGatewayModelAutomaticPricingRate>",
      required: true,
    },
    source: {
      baseName: "source",
      type: "AiGatewayModelAutomaticPricingSource",
      required: true,
    },
    stale: {
      baseName: "stale",
      type: "boolean",
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
    return AiGatewayModelAutomaticPricing.attributeTypeMap;
  }

  public constructor() {}
}
