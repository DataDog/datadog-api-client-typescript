/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMOperationJourneyRum } from "./RUMOperationJourneyRum";
import { RUMOperationUser } from "./RUMOperationUser";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a RUM operation response.
 */
export class RUMOperationResponseAttributes {
  /**
   * The RUM application ID the operation belongs to.
   */
  "applicationId"?: string;
  /**
   * The category of the RUM operation.
   */
  "category"?: string;
  /**
   * The timestamp when the RUM operation was created.
   */
  "createdAt"?: Date;
  /**
   * A Datadog user referenced by a RUM operation.
   */
  "createdBy"?: RUMOperationUser;
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
   * The ID of the organization the RUM operation belongs to.
   */
  "orgId"?: number;
  /**
   * A list of tags associated with the RUM operation.
   */
  "tags": Array<string>;
  /**
   * The timestamp when the RUM operation was last updated.
   */
  "updatedAt"?: Date;
  /**
   * A Datadog user referenced by a RUM operation.
   */
  "updatedBy"?: RUMOperationUser;

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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "RUMOperationUser",
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
    orgId: {
      baseName: "org_id",
      type: "number",
      format: "int64",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      format: "date-time",
    },
    updatedBy: {
      baseName: "updated_by",
      type: "RUMOperationUser",
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
    return RUMOperationResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
