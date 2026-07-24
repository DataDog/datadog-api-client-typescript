/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMOperationJourneyRum } from "./RUMOperationJourneyRum";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating or updating a RUM operation.
 */
export class RUMOperationRequestAttributes {
  /**
   * The RUM application ID the operation belongs to.
   */
  "applicationId"?: string;
  /**
   * The category of the RUM operation.
   */
  "category"?: string;
  /**
   * A description of the RUM operation.
   */
  "description"?: string;
  /**
   * A human-readable display name for the RUM operation.
   */
  "displayName"?: string;
  /**
   * The list of feature IDs associated with the RUM operation.
   */
  "featureIds"?: Array<string>;
  /**
   * The definition of a RUM operation's journey, used to detect it from RUM events.
   */
  "journeyRum": RUMOperationJourneyRum;
  /**
   * The unique name of the RUM operation. Must not contain spaces.
   */
  "name": string;
  /**
   * A list of tags associated with the RUM operation.
   */
  "tags": Array<string>;

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
    applicationId: {
      baseName: "application_id",
      type: "string",
      format: "uuid",
    },
    category: {
      baseName: "category",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    displayName: {
      baseName: "display_name",
      type: "string",
    },
    featureIds: {
      baseName: "feature_ids",
      type: "Array<string>",
    },
    journeyRum: {
      baseName: "journey_rum",
      type: "RUMOperationJourneyRum",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return RUMOperationRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
