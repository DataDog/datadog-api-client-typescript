import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for a container.
 */
export class ContainerAttributes {
  /**
   * The ID of the container.
   */
  "containerId"?: string;
  /**
   * Time the container was created.
   */
  "createdAt"?: string;
  /**
   * Hostname of the host running the container.
   */
  "host"?: string;
  /**
   * Digest of the compressed image manifest.
   */
  "imageDigest"?: string;
  /**
   * Name of the associated container image.
   */
  "imageName"?: string;
  /**
   * List of image tags associated with the container image.
   */
  "imageTags"?: Array<string>;
  /**
   * Name of the container.
   */
  "name"?: string;
  /**
   * Time the container was started.
   */
  "startedAt"?: string;
  /**
   * State of the container. This depends on the container runtime.
   */
  "state"?: string;
  /**
   * List of tags associated with the container.
   */
  "tags"?: Array<string>;
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
    containerId: {
      baseName: "container_id",
      type: "string",
    },
    createdAt: {
      baseName: "created_at",
      type: "string",
    },
    host: {
      baseName: "host",
      type: "string",
    },
    imageDigest: {
      baseName: "image_digest",
      type: "string",
    },
    imageName: {
      baseName: "image_name",
      type: "string",
    },
    imageTags: {
      baseName: "image_tags",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    startedAt: {
      baseName: "started_at",
      type: "string",
    },
    state: {
      baseName: "state",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return ContainerAttributes.attributeTypeMap;
  }

  public constructor() {}
}
