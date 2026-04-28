/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MuteDataType } from "./MuteDataType";
import { MuteFindingsRequestDataAttributes } from "./MuteFindingsRequestDataAttributes";
import { MuteFindingsRequestDataRelationships } from "./MuteFindingsRequestDataRelationships";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of the mute request.
 */
export class MuteFindingsRequestData {
  /**
   * Attributes of the mute request.
   */
  "attributes": MuteFindingsRequestDataAttributes;
  /**
   * Unique identifier of the mute request.
   */
  "id"?: string;
  /**
   * Relationships of the mute request.
   */
  "relationships": MuteFindingsRequestDataRelationships;
  /**
   * Mute resource type.
   */
  "type": MuteDataType;

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
      type: "MuteFindingsRequestDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "MuteFindingsRequestDataRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MuteDataType",
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
    return MuteFindingsRequestData.attributeTypeMap;
  }

  public constructor() {}
}
