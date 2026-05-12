/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateBackfilledDegradationRequestDataAttributesUpdatesItems } from "./CreateBackfilledDegradationRequestDataAttributesUpdatesItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The supported attributes for creating a backfilled degradation.
 */
export class CreateBackfilledDegradationRequestDataAttributes {
  /**
   * The title of the backfilled degradation.
   */
  "title": string;
  /**
   * The list of status updates describing the timeline of the degradation.
   */
  "updates": Array<CreateBackfilledDegradationRequestDataAttributesUpdatesItems>;

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
    title: {
      baseName: "title",
      type: "string",
      required: true,
    },
    updates: {
      baseName: "updates",
      type: "Array<CreateBackfilledDegradationRequestDataAttributesUpdatesItems>",
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
    return CreateBackfilledDegradationRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
